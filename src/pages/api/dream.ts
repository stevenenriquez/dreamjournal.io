import { prisma } from '../../server/db/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from '../../constants/db';
import { getServerAuthSession } from '../../server/common/get-server-auth-session';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const session = getServerAuthSession({ req, res });
    
    if(session?.user?.id) {
        if(req.method === 'POST') {
            const { title, content, sleepTime, wakeTime } = JSON.parse(req.body);
            
            const dream: Prisma.DreamCreateInput = {
                title: title,
                content: content,
                author: { connect: { id: session.user.id } },
                sleepTime: new Date(sleepTime),
                wakeTime: new Date(wakeTime)
            };

            console.log(dream);
        
            const createDream = await prisma.dream.create({
                data: dream
            });

            return createDream;
        }
    } else {
        return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({ message: HTTP_STATUS_MESSAGES.UNAUTHORIZED });
    }
}