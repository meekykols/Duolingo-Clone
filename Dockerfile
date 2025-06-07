# Install dependencies and build
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
# for development
CMD ["npm", "run", "start"]

# for local comment npm run build if you wnat to run ["npm", "run", "dev"]
#CMD ["npm", "run", "dev"]
