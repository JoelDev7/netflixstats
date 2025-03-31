FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

# FROM mysql:8.4

# WORKDIR /

# COPY ./initdb .

# COPY ./upload /var/lib/mysql-files/

# RUN yes "" | mysql -u root -p < init.sql

