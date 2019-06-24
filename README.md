# Thermostat
Application for showing chart of thermostat details and also upload thermostat data.

## Pre-requisite

  - Node js version 10.15.0
  - Mongo 3.x
  - ExpressJs version 4.x


### Installation 

- Create a project folder thermostat
    ```sh
    $ mkdir thermostat
    ```

- Go to a project root folder thermostat
    ```sh
    $ cd thermostat
    ```

- Clone the repo from git to the current directory.
    ```sh
    $ git clone <URL>
    ```
- Sync from remote branch into your local .
    ```sh
    $ git pull origin <Branch Name>
    ```
- Install all the backend dependency
    ```sh
    $ npm install
    ```
- locally boot mongo by following commands
    ```sh
    $ sudo su
    ```
    ```sh
    $ mongod
    ```
- Open another terminal and login to mongo shell.
    ```sh
    $ mongo
    ```
- Create database `temp` in MongoDB.
    ```sh
    $ db.use('temp')
    ```
Create table `thermostat` inside database  `temp`.
    ```sh
    $ db.use('temp')
    ```
    
### Deploy
- Run the thermostat app locally.

    >Booting the application

    ```sh
    $ npm run start
    ```

### To use the app
[http://localhost:3000/](http://localhost:3000/)
