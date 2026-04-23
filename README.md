🚀 How to Open & Run This Project Locally
Follow these steps to run the project on your machine.

✅ Prerequisites

Make sure you have the following installed:

Node.js (v18 or later recommended)
👉 https://nodejs.org/
npm (comes with Node.js)
Git

Check versions:
Copy code

node -v
npm -v
git --version

📥 1. Clone the Repository
Copy code

git clone https://github.com/normantitus123/riead-portfolio.git
Copy code

cd riead-portfolio

📦 2. Install Dependencies
Copy code

npm install

This will install all required packages from package.json.

▶️ 3. Start the Development Server

Copy code

npm run dev

You should see output like:
Copy code

VITE v7.x.x ready in xxx ms
Local: http://localhost:5173/

🌐 4. Open in Browser
Open your browser and go to:
👉 http://localhost:5173/

The site will reload automatically when you edit files (Hot Module Reload).

🛠️ Project Structure (Quick Overview)
Copy code

src/
├── components/ # Reusable UI components
├── sections/ # Page sections (Home, About, Skills, etc.)
├── assets/ # Images & static files
├── index.css # Global styles (Tailwind)
├── main.jsx # App entry point

🧹 Optional Commands
Build for production:
Copy code

npm run build

Preview production build:
Copy code

npm run preview
