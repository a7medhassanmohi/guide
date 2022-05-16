/* 

~ docker create <image name>
~ docker start -a <id obtain from docker create>
~ docker logs <container id> ==> if you forget to add -a when docker start

~ docker stop <container id>
~ docker kill <container id>

~ docker run <image name in local or in docker hub>

~ docker ps  ==> show running container
~ docker ps --all  ==> to show all container started in your machine

~ docker system prune  ==> to remove all container

~ docker exec -it <container id> < command you want to execute>
~ docker exec -it <container id> sh
~ docker run -it <image id or name> sh


*/

/* 
?build your own docker image
 ~1- create Dockerfile and then put inside it
 From alpine
 RUN apk add -- update redis
 CDM ["redis-server"]
 ! to build the file 
 docker build -t a7medhassanmohi/name:version .
! to run
docker run <image name or id>
 .................................................... 

 From node:alpine
 WORKDIR /usr/app
 COPY ./package.json ./
 RUN npm install
 COPY ./ ./
 CDM ["npm","start"]
 ! to build the file 
 docker build -t a7medhassanmohi/name:version
 ! to run
docker run -p 8080:8080 <image id or name>

*/

//? docker compose
/* 
after creating dockerfile

1-create file name  docker-compose.yml
2- then write inside it
version:'3'
services:
    redis-server:
        image:'redis'
    node-app:
        restart:always or on-failure
        build:.
        ports:
            -"4001:8081"

3- to run it 
docker-compose up
4- to rebuild
docker-compose up --build

5- to run docker compose in backgroud 
docker-compose up -d
6- to stop docker compose
docker compose down
*/

//~ using docker with react
/* 
1- create file Dockerfile.dev
2- write inside it
FROM node:alpine  //node:16-alpine
 WORKDIR /app
 COPY ./package.json ./
 RUN npm install
 COPY ./ ./
 CDM ["npm","run","start"]
3- to run it
docker build -f Dockerfile.dev .
! to run
docker run -p 3000:3000 <image id or name>
! to run and make  automatic update
docker run -p 8080:8080 -v /app/node_modules -v $(pwd):/app <image id or name>

? to make shorthand for this command will use docker compose to make the build and the run in one step so
1- create docker compose file docker-compose.yml 
2-write inside it
version:'3'
services:
    react:          // you can write any name you want
        build:
            context:. 
            dockerfile:Dockerfile.dev 
        ports:
            -"3000:3000"
        volumes:
            - /app/node_modules
            - .:/app 

            

*/
