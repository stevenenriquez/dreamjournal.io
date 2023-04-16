import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES, HTTP_METHODS } from '../../../constants/http';
import { prisma } from '../../../server/db/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    /**
     * GET
     */
    if(req?.method === HTTP_METHODS.GET) {
        const users = await prisma.user.findMany({
            take: 10
        });

        return res.status(HTTP_STATUS_CODES.OK).json({ message: HTTP_STATUS_MESSAGES.OK, users: users });
    }
}