# HackTheOcean

# Project name

Save Mexico from Sargassum

## Table of Contents (Backend)

1. [Description](#id1)
2. [Installation](#id2)
3. [Use](#id3)
4. [Explaining the backend](#id4)
5. [Services](#id5)
6. [Controllers](#id6)
7. [Models](#id7)
8. [Contribution](#id8)
9. [License](#id9)

# Description <a name="id1"></a>

Let's keep our mexican beaches clean of **sargassum**.

This project will allow users to report the exact location where sargassum is found, to allow the society to be aware where the sargassum is stricking.

Some companies are interested in processing sargassum to produce goods like biofuel, papper, shoes, organic compost as fertilizer and much more. This website will show them where to find it.

# Installation <a name="id2"></a>

```
git clone https://github.com/OmarVenturaP/HackTheOcean.git

cd HackTheOcean

npm run setup
```

Create a file called `./server/.env` with the following text inside, replacing the
required fields (`user`, `password`, `host`, `port` and `database`).

to use add postgres:

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:3306/database?schema=public"
```

to use add mysql:

```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/database"
```

*Don't forget to replace `user`, `password`, `host`, `port` and `database`*

After, ensure db provider is correct in the file called `./server/prisma/schema.prisma`

to use postgres:

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

to use mysql:

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

Then run the following command, to allow prisma create a migration:

```
cd server
npx prisma migrate dev --name init
```

And finally, run seed file to get default records:

```
node prisma/seed.js
```

Enjoy! :)

# Use <a name="id3"></a>

To launch VueX project and API server at the same time, just run:

```
npm run serve
```

This will make available the VueX project at http://localhost:8081/ and the API server at http://localhost:3000.

The server will operate with the following API

| Endpoint                         | Request | Response                                                                                                                                     |
| -------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `localhost:3000/reports`       | GET     | Get all reports.                                                                                                                             |
| `localhost:3000/reports/:id`   | GET     | Get report by id.                                                                                                                            |
| `localhost:3000/reports`       | POST    | Create report. JSON data example to send { "name": "Juan", "lastname": "Quiroga", "latitude": 20, "longitude": -10.15, "status": "Open" }    |
| `localhost:3000/reports`       | PUT     | Send report. JSON data example to send { "name": "Juan", "lastname": "Quiroga", "latitude": 20, "longitude": -10.15, "status": "Open" }      |
| `localhost:3000/reports/:id`   | DELETE  | Delete report by id.                                                                                                                         |
| `localhost:3000/donations`     | GET     | Get all donations.                                                                                                                           |
| `localhost:3000/donations/:id` | GET     | Get donation by id.                                                                                                                          |
| `localhost:3000/donations`     | POST    | Creates donation. JSON data example to send { "name": "Juan", "lastname": "Quiroga", "latitude": 20, "longitude": -10.15, "status": "Open" } |
| `localhost:3000/donations`     | PUT     | Updates donation. JSON data example to send { "name": "Juan", "lastname": "Quiroga", "latitude": 20, "longitude": -10.15, "status": "Open" } |
| `localhost:3000/donations/:id` | DELETE  | Delete donation by id.                                                                                                                       |

## Explaining the backend <a name="id4"></a>

The server will communicate to the controller and this last one to the service. The service will do all the error handling, checking the required input is correct, to communicate to the SQL database and return the result.

```mermaid
graph TD;
    ReportService-->ReportController
    DonationService-->DonationController
    UserService-->UserController
    ReportController-->Server
    DonationController-->Server
    UserController-->Server
```

### Services <a name="id5"></a>

```mermaid
classDiagram
    class ReportService
    ReportService : +getAllReports()
    ReportService : +getReportByID(id)
    ReportService : +createReport({name, lastname, latitute, longitude, status})
    ReportService : +updateReport(id, {name, lastname, latitute, longitude, status})
    ReportService : +deleteReport(id)
```

```mermaid
classDiagram
    class DonationService
    DonationService : +getAllDonations()
    DonationService : +getDonationByID(id)
    DonationService : +createDonation({city, donatorName, amount, description, status, state})
    DonationService : +updateDonation(id,{city, donatorName, amount, description, status, state})
    DonationService : +deleteDonation(id)
```

```mermaid
classDiagram
    class UserService
    UserService : +getAllUsers()
    UserService : +getUserByID(id)
    UserService : +createUser({name, lastname, role, email, pass})
    UserService : +updateUser(id, {name, lastname, role, email, pass})
    UserService : +deleteUser(id)
    UserService : +signIn(theEmail, thePassword)
```

### Controllers <a name="id6"></a>

```mermaid
classDiagram
    class ReportController
    ReportController : +getAllReports()
    ReportController : +getReportByID(id)
    ReportController : +createReport({name, lastname, latitute, longitude, status})
    ReportController : +updateReport(id, {name, lastname, latitute, longitude, status})
    ReportController : +deleteReport(id)
```

```mermaid
classDiagram
    class DonationController
    DonationController : +getAllDonations()
    DonationController : +getDonationByID(id)
    DonationController : +createDonation({city, donatorName, amount, description, status, state})
    DonationController : +updateDonation(id, {city, donatorName, amount, description, status, state})
    DonationController : +deleteDonation(id)
```

```mermaid
classDiagram
    class UserController
    UserController : +getAllUsers()
    UserController : +getUserByID(id)
    UserController : +createUser({name, lastname, role, email, pass})
    UserController : +updateUser(id, {name, lastname, role, email, pass})
    UserController : +deleteUser(id)
    UserController : +signIn(email, password)
```

### Models <a name="id7"></a>

Reports

| Field       | DataType                 |
| ----------- | ------------------------ |
| id          | Integer (autogenerated)  |
| latitude    | Float                    |
| longitude   | Float                    |
| name        | String                   |
| lastname    | String                   |
| status      | String                   |
| dateCreated | DateTime (autogenerated) |
| lastUpdated | DateTime (autogenerated) |

Donations

| Field       | DataType                 |
| ----------- | ------------------------ |
| id          | Integer (autogenerated)  |
| city        | String                   |
| donatorName | String                   |
| amount      | Decimal                  |
| description | String                   |
| status      | String                   |
| state       | String                   |
| dateCreated | DateTime (autogenerated) |
| lastUpdated | DateTime (autogenerated) |

Users

| Field    | DataType                |
| -------- | ----------------------- |
| id       | Integer (autogenerated) |
| name     | String                  |
| lastname | String                  |
| email    | String                  |
| role     | Integer                 |
| pass     | String                  |

# Contribution <a name="id8"></a>

This is an Open Source project. Please feel free to contribute to this project!

# License <a name="id9"></a>

This project is licensed with [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
