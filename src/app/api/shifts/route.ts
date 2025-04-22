import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { Opportunity } from '@prisma/client';

import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    // Extrair parâmetros de consulta da URL
    const { searchParams } = new URL(req.url);
    const location = searchParams.get('location') || undefined;
    const minSalary = searchParams.get('minSalary') ? parseInt(searchParams.get('minSalary')!) : undefined;
    const maxSalary = searchParams.get('maxSalary') ? parseInt(searchParams.get('maxSalary')!) : undefined;
    const cashOnly = searchParams.get('cashOnly') === 'true';
    const specialty = searchParams.get('specialty') || undefined;
    const shiftType = searchParams.get('shiftType') || undefined;
    const datePosted = searchParams.get('datePosted') || undefined;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Construir o objeto de filtro para a consulta do Prisma
    const where: any = {};

    // Filtro por localização
    if (location) {
      where.location = {
        contains: location,
        mode: 'insensitive',
      };
    }

    // Filtro por faixa salarial
    if (minSalary !== undefined || maxSalary !== undefined) {
      where.salary = {};
      if (minSalary !== undefined) {
        where.salary.gte = minSalary;
      }
      if (maxSalary !== undefined) {
        where.salary.lte = maxSalary;
      }
    }

    // Filtro por pagamento à vista
    if (cashOnly) {
      where.isCashPayment = true;
    }

    // Filtro por especialidade
    if (specialty) {
      where.specialty = specialty;
    }

    // Filtro por tipo de plantão
    if (shiftType) {
      where.shiftType = shiftType;
    }

    // Filtro por data de postagem
    if (datePosted) {
      const now = new Date();
      let cutoffDate = new Date();
      
      if (datePosted === 'today') {
        cutoffDate.setHours(0, 0, 0, 0);
      } else if (datePosted === '3days') {
        cutoffDate.setDate(cutoffDate.getDate() - 3);
      } else if (datePosted === 'week') {
        cutoffDate.setDate(cutoffDate.getDate() - 7);
      }
      
      where.createdAt = {
        gte: cutoffDate,
      };
    }

    // Verificar autenticação do usuário
    const session = await getServerSession(authOptions);
    const isAuthenticated = !!session?.user;

    // Buscar oportunidades no banco de dados
    const [opportunities, total] = await Promise.all([
      prisma.opportunity.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.opportunity.count({
        where,
      }),
    ]);

    // Se não autenticado, mascarar números de contato
    const formattedOpportunities = opportunities.map((opportunity: Opportunity) => {
      // Mascarar o número de contato se o usuário não estiver autenticado
      if (!isAuthenticated) {
        const contactNumber = opportunity.contactNumber;
        const maskedNumber = contactNumber.slice(0, 2) + '******' + contactNumber.slice(-2);
        return {
          ...opportunity,
          contactNumber: maskedNumber,
        };
      }
      return opportunity;
    });

    // Calcular informações de paginação
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      data: formattedOpportunities,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage,
      },
      isAuthenticated,
    });
  } catch (error) {
    console.error('Erro ao buscar oportunidades:', error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar oportunidades' },
      { status: 500 }
    );
  }
} 