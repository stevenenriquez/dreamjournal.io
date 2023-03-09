# dreamjournal.io

## Technologies Used

-   [Next.js](https://nextjs.org)
-   [NextAuth.js](https://next-auth.js.org)
-   [Prisma](https://prisma.io)
-   [Tailwind CSS](https://tailwindcss.com)

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

-   [T3 Documentation](https://create.t3.gg/)
-   [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
-   [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app)

## Local Development

1. Install dependencies via `npm install`
1. Create `.env` file and populate environment variables (utilizing `.env.example` as reference)
1. Install Docker ([via Windows](https://docs.docker.com/desktop/install/windows-install/#install-docker-desktop-on-windows))
1. Start postgresql container with `sudo docker run -itd -e POSTGRES_USER={USER_HERE} -e POSTGRES_PASSWORD={PASSWORD_HERE} -p 5432:5432 -v /data:/var/lib/postgresql/data --name postgresql postgres`
1. Create tables in database via Prisma with `npx prisma db push`
    - Schema is defined in prisma/schema.prisma
    - To apply any future updates to the schema, re-run `npx prisma db push`
1. Start up Prisma Studio to interface with data within DB with `npx prisma studio`
1. Run `npx prisma generate` to update the client whenever there is an update to the schema

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
