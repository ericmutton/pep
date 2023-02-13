# crystal+kemal
FROM crystallang/crystal:latest-alpine
COPY shard.yml /opt/backend/shard.yml
WORKDIR /opt/backend
#ENV KEMAL_ENV=production
RUN crystal init app pep . --skip-existing \
    && shards install
COPY . /opt/backend
CMD ["crystal", "run", "src/pep.cr"]
EXPOSE 3000
