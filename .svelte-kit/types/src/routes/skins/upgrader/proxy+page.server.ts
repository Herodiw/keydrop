// @ts-nocheck
import { userFromSessionID } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load = async ({ locals, cookies }: Parameters<PageServerLoad>[0]) => {
  const user = await userFromSessionID(cookies.get('session_id') ?? '', true);
  return {
    currency: locals.lang === 'pl' ? 'pln' : 'eur',
    userInventory: user?.inventory ?? [],
    ...locals
  };
};
