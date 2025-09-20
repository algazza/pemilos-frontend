FROM oven/bun:1

WORKDIR /app

COPY bun.lockb package.json ./

RUN bun install

COPY . .

EXPOSE 5173