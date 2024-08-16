# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Bot-APP
Welcome to Bot-APP—the ultimate galactic app for building your own custom Bot Army! This application allows users to browse through a list of robots, view their details, and enlist them into a personal army. Once enlisted, bots can be managed, released, or even discharged permanently.

# Table of Contents
Project Setup
Project Guidelines
Core Deliverables
Endpoints
License

# Project Setup
To get started with this project, follow these steps:

Create a Project Folder: Start by creating a new project folder on your local machine.

Initialize a GitHub Repository: Create a new private GitHub repository and add your Team Manager (TM) as a contributor for grading purposes.

Regular Commits: Ensure that you commit your work regularly to the GitHub repository.

Set Up the Backend:

Create a db.json file in your project directory and populate it with the provided data.
Run the following command to start the local JSON server:
bash
Copy code
json-server --watch db.json
Test your server by navigating to http://localhost:8001/bots in your browser.

# Project Guidelines
This project involves creating a React application with the following guidelines:

Bot Collection: Display profiles of all available bots in the BotCollection component.
Your Bot Army: Allow users to add bots to their army by clicking on them. A bot can be enlisted only once and should still be visible in the BotCollection.
Release Bots: Users should be able to release a bot from their army by clicking on it. The bot will be removed from the YourBotArmy component.
Discharge Bots: Users can permanently delete a bot by clicking a red "x" button. This action will remove the bot from both the frontend (YourBotArmy component) and the backend.

# Core Deliverables
As a user, you should be able to:

View All Bots: See profiles of all bots rendered in the BotCollection component.
Enlist a Bot: Add a bot to your army by clicking on it. The bot should render in the YourBotArmy component.
Release a Bot: Remove a bot from your army by clicking on it, which will remove it from the YourBotArmy component.
Discharge a Bot: Permanently delete a bot by clicking the red "x" button. This will remove the bot from the backend and the YourBotArmy component.

# Endpoints
GET /bots
Fetch the list of available bots.

Example Response:

json
Copy code
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
DELETE /bots/
Permanently delete a bot.

Example Response:

json
Copy code
{}

# License
This project is licensed under the MIT License.

