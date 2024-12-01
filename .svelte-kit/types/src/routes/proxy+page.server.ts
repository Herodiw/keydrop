// @ts-nocheck
import { getCaseData } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
  const sections = await getCaseData('sections');
  return {
    sections: sections,
    currency: locals.lang === 'pl' ? 'pln' : 'eur',
    ...locals
  };
};
