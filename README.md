<h1 align="center">Geek Cosmetics :soccer:</h1>

<p align="center"> 
An API REST to consult teams and players on FIFA 21 Ultimate Team
</p>


### Table of contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Docker](#docker)


### Technologies

Made using the following technologies:

- [Node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
  - > And more...

### Installation

<b>FIFA 21 - API REST</b> requires <b>Node.js v10+</b>, and <b>ExpressJS v4+ </b> to run.

> _The following instructions only work locally, for the deployment in the cloud the instructions change_

First of all clone the repository on the branch main

```bash
https://github.com/JuanEstebanCC/FIFA-21---API-REST.git
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
### Docker 

Pull the image from Docker Hub

```
docker pull juanestebancc/api-fifa2021:api-fifa
```

Start the container 
```
docker run -p 5300:5300 -d juanestebancc/api-fifa2021:api-fifa
```
> _Make sure the port 5300 is empty or without using, if not, change the port in the command above_


<b align="center"> **Happy Coding!**</b>

[node.js]: http://nodejs.org
[express]: https://expressjs.com/
