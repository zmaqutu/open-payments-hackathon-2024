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

-Tailwind CSS: Provides a modern and responsive user interface for the dashboard.

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

Once the dependencies are installed, you can start the development server using the following command:

```bash
npm run dev
```

## Usage

### Card Flip Animations

-   When interacting with a card by clicking, the user triggers an animation effect. This animation utilizes the capabilities of the React Spring library to smoothly

### Libraries used

-   React.js
-   Tailwind CSS
-   React Spring
-   Vite

## Future Scope

-   Implement online play capabilities to enable multiplayer matches and competitions.
-   Introduce an in-game chat feature to facilitate communication between players during gameplay.
-   Develop a leaderboard feature to track high scores and player rankings.
-   Enhance the user interface with customizable themes or card designs.
-   Incorporate sound effects and background music to enhance the gaming experience.
-   Implement an undo feature to allow players to reverse their last move.
-   Introduce power-up cards or special abilities that can be used strategically during gameplay.
-   Explore the possibility of integrating virtual reality (VR) support for an immersive gaming experience.
-   Develop a mobile app version of the game to reach a wider audience and enable on-the-go gameplay.
-   Implement social media integration to allow players to share their achievements and progress with friends.
-   Create a tutorial or interactive guide to help new players learn the game mechanics and strategies.

<p align="center">Made with ❤️ in React JS</p>
