import type { NextApiRequest, NextApiResponse } from "next";
import { HTTP_METHODS } from "../../../constants/http";
import { prisma } from "../../../server/db/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

/**
 * Dream API
 * Endpoint: /api/dream/[dreamId]
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req) {
        /**
         * GET
         */
        if(req.method === HTTP_METHODS.DELETE) {
            const session = await getServerAuthSession({ req, res });

            if(session?.user?.id) {
                const query = req.query;
                const { dreamId } = query;

                const dream = await prisma.dream.findUnique({
                    where: {
                        id: dreamId as string
                    }
                });

                if(dream) {
                    if(dream.authorId === session.user.id) {
                        await prisma.dream.delete({
                            where: {
                                id: dreamId as string
                            }
                        });
        
                        return res.status(200).json({ message: 'Dream deleted', dreamId: dreamId });
                    } else {
                        return res.status(401).json({ message: 'Unauthorized' });
                    }
                } else {
                    return res.status(404).json({ message: 'Dream not found' });
                }
            } else {
                return res.status(401).json({ message: 'Unauthorized' });
            }
        } 
    }
}