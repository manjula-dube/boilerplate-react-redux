

## Setup
```
$ npm install
```
>Remember to run `npm stop` to stop all the pwa pm2 instances before using a different script from below.

npm start to start the server locally

Start as local development server:
$ npm run development
# runs at http://localhost:1337



Using pm2:
```bash
$ npm run pm2 -- logs # follow all server logs
$ npm run pm2 -- list # list all processes
$ npm run pm2 -- kill # kill pm2 parent process
$ npm run pm2 -- help # show other available commands
```
