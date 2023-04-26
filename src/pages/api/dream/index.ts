import { prisma } from '../../../server/db/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES, HTTP_METHODS } from '../../../constants/http';
import { getServerAuthSession } from '../../../server/common/get-server-auth-session';
import { isNaturalNumber } from '../../../utils/api';
import { DEFAULT_RETRIEVAL_LIMIT } from '../../../constants/api';
import validateDreamCreateInput from '../../../utils/validation';
import type { Prisma } from '@prisma/client';

/**
 * Dream API
 * Endpoint: /api/dream
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req) {
        /**
         * GET
         */
        if(req.method === HTTP_METHODS.GET) {
            const query = req.query;
            const { page, limit } = query;

            const dreams = await prisma.dream.findMany({
                include: {
                    author: true
                },
                where: {
                    published: true
                },
                take: isNaturalNumber(limit) ? Number(limit) : DEFAULT_RETRIEVAL_LIMIT,
                skip: isNaturalNumber(page) ? Number(page) * Number(limit) : 0
            });
        
            return res.status(HTTP_STATUS_CODES.OK).json({ message: HTTP_STATUS_MESSAGES.OK, dreams: dreams });
        } 
        /** 
         * POST
         */
        else if(req.method === HTTP_METHODS.POST) {
            const session = await getServerAuthSession({ req, res });
            if(session?.user?.id) {
                const { title, content, sleepTime, wakeTime, type } = JSON.parse(req.body);
                const dream: Prisma.DreamCreateInput = {
                    title: title,
                    content: content,
                    author: { connect: { id: session.user.id } },
                    sleepTime: sleepTime ? new Date(sleepTime) : new Date(),
                    wakeTime: wakeTime ? new Date(wakeTime) : new Date(),
                    type: type,
                    published: true
                };
            
                const result = validateDreamCreateInput(dream);
                if(!result.success) {
                    return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ message: HTTP_STATUS_MESSAGES.BAD_REQUEST, error: result.error });
                }

                const createdDream = await prisma.dream.create({
                    data: dream
                });
                
                return res.status(HTTP_STATUS_CODES.CREATED).json({ message: HTTP_STATUS_MESSAGES.CREATED, dream: createdDream });
            } else {
                return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({ message: HTTP_STATUS_MESSAGES.UNAUTHORIZED });
            }
        }
    }
}