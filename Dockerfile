# Refer https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ to create docker-image of your NodeJS-Web-App.
FROM node:14

# The WORKDIR instruction sets docker-working-directory, for other Dockerfile-instructions such as "RUN, CMD, ENTRYPOINT, COPY and ADD".
# If the WORKDIR doesn’t exist, it will be created even if it’s not used by any other Dockerfile-instructions.
# Refer https://docs.docker.com/engine/reference/builder/#workdir
WORKDIR /dockerWorkDir

# Copy "package.json & package-lock.json" files into dockerWorkDir-folder.
COPY package.json package-lock.json ./

# "npm ci" command will run inside dockerWorkDir, where npm uses node-version-15.0.1 i.e from "node:15.0.1-alpine3.10" docker-image to install npm-packages.
# we are using "npm ci" instead of "npm i", becuase "npm ci" will install extact-versions (let say 4.1.1) of npm-packges from package-lock.json file by ignoring cap (^4.1.1.), where cap means it will take updated available version b/w "4.1.1 to 4.1.9"
RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Copying all files from current-working-directory (contacts-services) into docker-working-directory (dockerWorkDir).
# First-dot (.) refers to current-working-directory, Second-dot (.) refers to dockerWorkDir.
# Use ".dockerignore" file to ignore copying folders like "node_modules & build".
COPY . .

RUN npm run build

# PM2 is a production-process-manager for Node.js applications with a built-in load balancer.
# It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.
# RUN npm i pm2 -g

# 8001 for NODE_ENV=development, refer ./src/config/development.js
EXPOSE 8001
# 8000 for NODE_ENV=production, refer ./src/config/production.js
# EXPOSE 8000

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# CMD commands will execute only when created a container for this image & running that container.
CMD sh -c "/wait && npm start"
# CMD sh -c "npm start"
# CMD sh -c "NODE_ENV=development pm2-runtime start ./build/server.js"
# CMD sh -c "NODE_ENV=production pm2-runtime start ./build/server.js"

# To build docker-image with latest-tag
#   docker build -t "amarendharganji/contacts-services:latest" .
# To run container for docker-image, & expose 8001 port of docker-image as 8000
#   docker run -p 8000:8001 "amarendharganji/contacts-services:latest"
