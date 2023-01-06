FROM docker.io/library/node:19-alpine
RUN mkdir /work
COPY . /work
WORKDIR /work
RUN npm install
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
EXPOSE 5173
