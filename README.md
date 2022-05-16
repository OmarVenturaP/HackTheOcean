# HackTheOcean

## Services
```mermaid
classDiagram
    class ReportService
    ReportService : +getAllReports()
    ReportService : +getReportByID(id)
    ReportService : +createReport({name, lastname, latitute, longitude, status0})
    ReportService : +updateReport(id, {name, lastname, latitute, longitude, status})
    ReportService : +deleteReport(id)
```

```mermaid
classDiagram
    class DonationService
    DonationService : +getAllDonations()
    DonationService : +createDonation({city, donatorName, amount, description, status, state})
    DonationService : +getDonationByID(id)
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

## Controllers
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
    DonationController : +createDonation({city, donatorName, amount, description, status, state})
    DonationController : +getDonationByID(id)
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

## Models
### Reports
| Campo | Tipo de Dato |
|---|---|
| id | Integer (autogenerado) |
| latitude | String |
| longitude | String |
| name | String |
| lastname | String |
| status | String |
| dateCreated | DateTime (autogenerado) |
| lastUpdated | DateTime (autogenerado) |

### Donations
| Campo | Tipo de Dato |
|---|---|
| id | Integer (autogenerado) |
| city | String |
| donatorName | String |
| amount | Decimal |
| description | String |
| status | String |
| state | String |
| dateCreated | DateTime (autogenerado) |
| lastUpdated | DateTime (autogenerado) |

### Users
| Campo | Tipo de Dato |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| lastname | String |
| email | String |
| role | Integer |
| pass | String |
