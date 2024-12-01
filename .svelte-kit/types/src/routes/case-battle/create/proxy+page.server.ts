// @ts-nocheck
import { db } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
  const cases = await db.case.findMany({
    where: { goldenCase: false },
    orderBy: {
      section: {
        position: 'asc'
      }
    }
  });
  return {
    cases: cases,
    currency: locals.lang === 'pl' ? 'pln' : 'eur',
    ...locals
  };
};
