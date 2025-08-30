# 📊 CoinGecko Crypto Table (React + API)

This project is a simple React app that fetches cryptocurrency data from the **CoinGecko API** and displays it in a table format. It demonstrates how to use React hooks (`useEffect`, `useState`) for API calls, state management, and component-based UI rendering.

---

## 🚀 Project Overview

- Fetches **live crypto data** from the CoinGecko API.  
- Stores the data in **React state** using `useState`.  
- Uses `useEffect` to fetch data **on page load**.  
- Displays the data in a **table** with each row rendered by a **separate component**.  
- Optimized with **unique keys** for each row.  
- Styled for a clean and minimal UI.

---

## 🛠️ Tech Stack

- **React** (Frontend Framework)  
- **JavaScript (ES6+)**  
- **CoinGecko API** (for crypto data)  
- **CSS / Tailwind** (for styling)


---

## ⚡ How It Works

1. On page load, the `useEffect` hook triggers an API call to fetch cryptocurrency data.  
2. The response data (array of objects) is stored in a state variable using `useState`.  
3. The `map()` function iterates over the array and renders a `TableRow` component for each item.  
4. Each row displays details such as:
   - Coin name  
   - Symbol  
   - Current price  
   - Market cap  
   - Price change (24h)  

🔗 **API Endpoint used:**  

https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

----

📋 Evaluation 

✔ API Data Fetching → Data is fetched correctly using fetch / axios.
✔ State Management → useState & useEffect used properly.
✔ Component Reusability → Separate TableRow component for rows.
✔ Mapping & Keys → Unique keys used for each row.
✔ Deployment → Hosted on GitHub Pages.

▶️ Run Locally

Clone the project:

git clone https://github.com/khedkar2001/CoinGecko-API.git
cd CoinGecko-API


Install dependencies:

npm install


Start the app:

npm run dev

