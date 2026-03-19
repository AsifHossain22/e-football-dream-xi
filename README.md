# E-Football Dream XI — Ultimate Team Builder

E-Football Dream XI is a feature-rich React application that brings the excitement of football management to the web. Users can manage a virtual coin balance, browse a marketplace of elite players and strategically build a 6-player "Dream XI" while staying within budget.

**Live Demo: https://e-football-dream-xi.netlify.app/**

---

## Features

* **Virtual Economy System:** Claim "Free Credits" to increase your coin balance and spend them on players.
* **Player Marketplace:** Browse a wide selection of international players with detailed stats (Nationality, Role, Price).
* **Smart Selection Logic:**
    * **Budget Validation:** Prevents buying players if the balance is insufficient.
    * **Duplicate Prevention:** Users cannot select the same player twice.
    * **Squad Limit:** Strictly enforces a maximum of 6 players per team.
* **Toggle View Interface:** Easily switch between the "Available" player shop and the "Selected" squad list.
* **Interactive Feedback:** Integrated toast notifications for successful purchases, warnings (insufficient funds) and removals.
* **Dynamic Team Management:** Remove players from your squad to refund coins and free up spots.
* **Modern UI:** Styled with high-energy colors, gradients and a mobile-responsive layout.

---

## Technologies

| Technology | Purpose |
| :--- | :--- |
| **React** | Building the modular player cards and state-driven UI |
| **Tailwind CSS** | Styling the professional gaming interface and glassmorphism effects |
| **DaisyUI** | Providing clean layouts for buttons, badges and avatars |
| **React Hot Toast** | Real-time alerts for player selection and budget errors |
| **React Icons** | Using sports-themed iconography (Flags, User roles, Coins) |
| **Vite** | Lightning-fast development and build environment |
| **Netlify** | Automated deployment and hosting |

---

## Project Structure

```text
src/
├── assets/               # Banner images, logos and coin icons
├── components/           # Reusable UI components
│   ├── Header/           # Sticky navbar with live Coin Balance display
│   ├── Hero/             # Main banner with the "Claim Free Credit" button
│   ├── PlayerContainer/  # Logic for switching between Available & Selected
│   ├── AvailablePlayers/ # Grid of player cards available for purchase
│   ├── SelectedPlayers/  # List of players currently in the squad
│   └── Footer/           # Footer with newsletter subscription
├── App.jsx               # Core state (balance, selectedPlayers) and logic
└── main.jsx              # Application entry point
