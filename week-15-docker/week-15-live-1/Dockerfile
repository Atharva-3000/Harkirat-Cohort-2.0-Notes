FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

# ENV DATABASE_URL="postgresql://Atharva-3000:PiXBH4eAM3yW@ep-small-smoke-99087033.us-east-2.aws.neon.tech/test?sslmode=require"

EXPOSE 3000

CMD ["node", "dist/index.js"]