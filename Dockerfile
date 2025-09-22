FROM oven/bun:1 AS builder

WORKDIR /app

COPY bun.lockb package.json ./

RUN bun install

COPY . .

RUN bun run build

FROM node:alpine AS production

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]