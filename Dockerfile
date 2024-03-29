FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile

FROM base AS runner
ENV TZ=Asia/Shanghai
ENV NODE_ENV production
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN mv /app/.env.example /app/.env
RUN yarn prisma db push
RUN yarn build

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENTRYPOINT ["yarn", "start"]