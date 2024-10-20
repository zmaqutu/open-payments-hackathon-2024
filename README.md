<h1 align="center">GNPL: Get Now, Pay Later via USSD</h1>

<div align="center" >
  <img src="https://img.shields.io/badge/made%20by-Team%2044-blue?style=for-the-badge&labelColor=20232a" />
  <img src="https://img.shields.io/badge/Javascript-20232a?style=for-the-badge&logo=javascript&labelColor=2e2f38" />
  <img src="https://img.shields.io/badge/Tailwind CSS-20232a?style=for-the-badge&logo=tailwindcss&labelColor=162e16" />
  <img src="https://img.shields.io/badge/React JS-20232a?style=for-the-badge&logo=react&labelColor=2e2f38" />
  <img src="https://img.shields.io/badge/Vite-20232a?style=for-the-badge&logo=vite&labelColor=2e2f38" />
</div>

**Overview**

GNPL (Get Now, Pay Later via USSD) is a financial service platform designed for underserved communities where smartphone penetration is low. It allows users to make essential purchases, like medication or groceries, even if they don’t have the funds at the moment. Using a simple USSD interface, users can confirm a loan and set up a repayment schedule, making financial access possible through any basic phone.

The cashier initiates the process via a dashboard where user profiles can be created, and the terms (loan amount, repayment schedule, grace period) are discussed. Once terms are confirmed, the user receives a USSD prompt to accept or decline the offer.

## Key Features

- Dashboard for merchants: Store cashiers can create user profiles and initiate loan applications.

- USSD confirmation: Customers can confirm their loan via a USSD menu, making the process accessible even without a smartphone.

- Custom repayment terms: Users can negotiate grace periods, repayment schedules, and amounts.

- Cloud processing: All loan details and user interactions are processed through cloud functions, ensuring secure and real-time transactions.

- Loan lifecycle management: Full tracking from loan disbursement to repayment.

## Tech Stack

### Frontend

- React: Used to build the cashier dashboard where users are registered, and loan terms are set.

- Tailwind CSS: Provides a modern and responsive user interface for the dashboard.

### Backend

- Node.js: Backend server for processing requests.

- Express: Handles API requests between the frontend and the backend.

- Firebase: Hosts the backend cloud functions and database.

### DevOps

- Ngrok: Used for local testing and exposing your local server to the internet for USSD testing.



## Project Setup and Installation

Before running the application, make sure you have Node.js installed on your machine.

### Installation

```bash
git clone https://github.com/zmaqutu/open-payments-hackathon-2024.git
```

### Install the dependencies for all x apps (client and server)

- `open-payments-hackathon` (merchant dashboard)
- `open-loans-mobile-simulator` (USSD functionality simulation)

To do this you can navigate to the root directory of the project and run

```bash
npm run install:all
```

## Running the Application locally

Once the dependencies are installed, you can start the development server for the different apps using the following command from the root directory:

```bash
npm run start:all
```

This will start all the necessary servers locally on different ports
## Usage

### 1. Cashier Dashboard

1. Navigate to the cashier dashboard (http://localhost:3000/dashboard).
2. The cashier creates a new profile for the user who wants to make a purchase.
3. Input details like loan amount, repayment schedule, and grace period.
4. The user will receive a USSD confirmation request on their mobile phone.

### 2. USSD Loan Confirmation
1. The customer receives a USSD prompt on their phone with the loan details.
2. They can accept or reject the loan via the USSD menu.
3. Once accepted, the loan is processed, and the transaction is recorded.

### 3. Repayment
1. The user will receive periodic reminders via USSD to repay the loan, with the system automatically adjusting based on the repayment schedule and grace periods.

### Libraries used

-   React.js
-   Tailwind CSS
-   Firebase
-   Vite

## Future Scope

- Credit Score Integration: Introduce a basic credit score system based on repayment history.
- Multilingual USSD Support: Add support for different languages in the USSD flow to make the platform more inclusive.
- SMS Alerts: Use SMS alerts alongside USSD for better communication with users.

<p align="center">Made with ❤️ in React JS</p>
