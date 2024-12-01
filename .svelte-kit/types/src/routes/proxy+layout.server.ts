// @ts-nocheck
import { db } from '$lib/server';
import type { LayoutServerLoad } from './$types';

export const load = async ({ locals }: Parameters<LayoutServerLoad>[0]) => {
  const connectionCount = (
    (await db.$queryRaw`SELECT sum(numbackends) FROM pg_stat_database;`) as any
  )[0].sum as number;

  if (connectionCount > 100) await db.$disconnect();
  return {
    connectionCount: connectionCount,
    lang: locals.lang as 'pl' | 'en',
    user: locals.user
  };
};
