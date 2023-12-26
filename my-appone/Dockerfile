FROM node:latest
WORKDIR /app
COPY package-lock.json
RUN npm install
COPY . .
CMD ["npm","start"]
