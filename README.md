# Thermostat (Backend)
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
    $ git pull origin <master>
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

# Thermostat (UI)
Application for showing chart of thermostat details and also upload thermostat data.

## Pre-requisite

  - Node js version 10.15.0
  - Angular version 8

### Installation

- Open other terminal and change directory to `angular-thermostat-chart`.

- Install all the frontend dependency
    ```sh
    $ npm install
    ```
    
### Deploy
- Run the thermostat app locally.

    >Boot the application

    ```sh
    $ npm run start
    ```
    

### To use the app
- Navigate to [http://localhost:4200/](http://localhost:3000/)
- To upload data click on `file upload` option and upload a .json file containing records.
- To see chart select the specific date range and click `select` button.
- 
## NOTE
If there isn't any data in database then no chart will be displayed. To resolve this you need to upload data through `Upload File` option in the navbar. Once data upload process is done charts will be visible depending on specific date range selected.


# Thermostat
Application for showing chart of thermostat details and also upload thermostat data.

## Pre-requisite

  - Node js version 10.15.0
  - Angular version 8

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
- Sync from remote branch into your local.
    ```sh
    $ git pull origin <master>
    ```

- Install all the frontend dependency
    ```sh
    $ npm install
    ```
    
### Deploy
- Run the thermostat app locally.

    >Boot the application

    ```sh
    $ npm run start
    ```
    

### To use the app
- Navigate to [http://localhost:4200/](http://localhost:3000/)
- To upload data click on `file upload` option and upload a .json file containing records.
- To see chart select the specific date range and click `select` button.
- 
## NOTE
If there isn't any data in database then no chart will be displayed. To resolve this you need to upload data through `Upload File` option in the navbar. Once data upload process is done charts will be visible depending on specific date range selected.

# Thermostat
Application for showing chart of thermostat details and also upload thermostat data.

## Pre-requisite

  - Node js version 10.15.0
  - Angular version 8

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
- Sync from remote branch into your local.
    ```sh
    $ git pull origin <Branch Name>
    ```

- Install all the frontend dependency
    ```sh
    $ npm install
    ```
    
### Deploy
- Run the thermostat app locally.

    >Boot the application

    ```sh
    $ npm run start
    ```
    

### To use the app
- Navigate to [http://localhost:4200/](http://localhost:3000/)
- To upload data click on `file upload` option and upload a .json file containing records.
- To see chart select the specific date range and click `select` button.
- 
## NOTE
If there isn't any data in database then no chart will be displayed. To resolve this you need to upload data through `Upload File` option in the navbar. Once data upload process is done charts will be visible depending on specific date range selected.
