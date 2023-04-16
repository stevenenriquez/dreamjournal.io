import { prisma } from '../../server/db/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES, HTTP_METHODS } from '../../constants/http';
import { getServerAuthSession } from '../../server/common/get-server-auth-session';
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
            // handle non-authenticated retrievals

            // handle authenticated retrievals
        } 
        /**
         * PUT 
         */
        else if(req.method === HTTP_METHODS.PUT) {
            // handle PUT
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
                    type: type
                };
            
                const createDream = await prisma.dream.create({
                    data: dream
                });
                
                return res.status(HTTP_STATUS_CODES.CREATED).json({ message: HTTP_STATUS_MESSAGES.CREATED, dream: createDream });
            } else {
                return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({ message: HTTP_STATUS_MESSAGES.UNAUTHORIZED });
            }
        }
        /** 
         * DELETE
         */
        else if(req.method === HTTP_METHODS.DELETE) {
            // handle DELETE
        }

    }
}