// @ts-nocheck
import { getCaseData } from '$lib/server/db.js';
import type { PageServerLoad } from './$types.js';

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
  const caseData = await getCaseData(params.slug);
  return {
    caseData: caseData,
    currency: locals.lang === 'pl' ? 'pln' : 'eur',
    ...locals
  };
};
