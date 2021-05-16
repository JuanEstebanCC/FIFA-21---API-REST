<h1 align="center">FIFA ULTIMATE TEAM 21 - API REST:soccer:</h1>

<p align="center"> 
An API REST to consult teams and players on FIFA 21 Ultimate Team
</p>


### Table of contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)


### Technologies

Made using the following technologies:

- [Node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Docker] - Accelerate how you build, share and run modern applications 
- [Mysql] - a relational database
  - > And more...

### Installation


<b>FIFA 21 - API REST</b> requires <b>Node.js v10+</b>, and <b>ExpressJS v4+ </b> to run.

> _The following instructions only work locally, for the deployment in the cloud the instructions change_

First of all clone the repository on the branch main

```bash
git clone https://github.com/JuanEstebanCC/FIFA-21---API-REST.git
```

Open the server directory
```
cd FIFA-21---API-REST
```
Install all dependencies (NPM needed)
```
npm install 
```

Run the script to fill the database
```
node src/script.js
```

Run the server on the port 
>*The default port is 5300/tcp , but if you have a .env file you can change it*

On development mode
```
npm run dev
```

Or production mode
```
npm start
```

### Usage
<b>Make sure you have the headers x-api-key with the value 'secret' (string) on the request</b>
### Docker 

> _Make sure you have Docker installed!
Docker Hub Url


https://hub.docker.com/repository/docker/juanestebancc/api-fifa2021


Pull the image from Docker Hub

```
docker pull juanestebancc/api-fifa2021:latest
```

Start the container 
```
docker run -p 5300:5300 -d juanestebancc/api-fifa2021:latest
```
> _Make sure the port 5300 is empty or without using, if not, change the port in the command above_

Get running containers  
```
docker ps

CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS                               NAMES
1ed1a3a7721e        juanestebancc/api-fifa2021:latest   "docker-entrypoint.s…"   9 minutes ago       Up 9 minutes        0.0.0.0:5300->5300/tcp              modest_maxwell
```

Copy container name


Execute the script to fill the database inside the container
```
docker exec -it docker_container_name node src/script.js
```


<b align="center"> **Happy Coding!**</b>

[node.js]: http://nodejs.org
[express]: https://expressjs.com/
[docker]: https://www.docker.com/
[mysql]: https://www.mysql.com/
