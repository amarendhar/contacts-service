### What is this repository for? ###
* Contacts-List-Service to add/remove/fetch contacts

### How to run project
* Install NodeJS from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Install Docker-Desktop from [https://docs.docker.com/desktop/install/mac-install/](https://docs.docker.com/desktop/install/mac-install/)
* `npm install`
* `npm run start:docker`
* `npm run start:dev`

### How to prepare Docker-Image and push into the Docker-Hub
* `./build-docker.sh`
* If permission is denied, then `sudo chmod 777 Dockerfile`

### how to run the GraphQL playground
* `http://localhost:8001/graphql`

### How to run in development-mode
* `npm run start:dev`

### How to run in debug-mode
* `npm run start:debug`

### How to run in production-mode
* `npm run start:prod`

### How to serve project from the build folder
* `npm run serve:build`

### How to check typescript-errors
* `npm run type-check`

### Tech stack ###
* Node JS
* Express JS
* Typescript
* Docker
* MongoDB
