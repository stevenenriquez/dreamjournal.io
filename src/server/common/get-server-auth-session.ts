import { type GetServerSidePropsContext } from 'next';
import { getServerSession } from "next-auth/next"

import { authOptions } from '../../pages/api/auth/[...nextauth]';

/**
 * Wrapper for getServerSession for passing in authOptions
 */
export const getServerAuthSession = async (ctx: {
    req: GetServerSidePropsContext['req'];
    res: GetServerSidePropsContext['res'];
}) => {
    return await getServerSession(ctx.req, ctx.res, authOptions);
};
