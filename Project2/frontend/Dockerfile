FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps --force

COPY . .

EXPOSE 3000

ENV NODE_ENV=development
ENV CI=true

CMD ["npm", "start"] 