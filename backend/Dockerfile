# crystal+kemal
FROM crystallang/crystal:latest-alpine
COPY . /opt/backend
WORKDIR /opt/backend
#ENV KEMAL_ENV=production
RUN crystal init app pep . --skip-existing \
    && shards install
CMD ["crystal", "run", "src/pep.cr"]
EXPOSE 3000
