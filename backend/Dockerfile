# https://hub.docker.com/_/postgres
FROM docker.io/library/node:19-alpine
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm
RUN mkdir /work
COPY . /work
WORKDIR /work
RUN pnpm install
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0", "--port", "5432"]