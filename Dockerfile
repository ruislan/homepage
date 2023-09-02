FROM node:18-alpine

ENV TZ=Asia/Shanghai
ENV NODE_ENV production

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npx prisma db push
RUN npm run build

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENTRYPOINT ["npm", "run start"]