# 🔍 Filter App

This is a responsive and performant **React-based Filterable Table App** that allows users to interactively filter a large dataset using multi-select dropdowns for each column. The dataset is loaded from a CSV and displayed with pagination and scroll.

### 🚀 Hosted on Render https://filter-app-8m3e.onrender.com

---

## 🧩 Features

- Multi-select dropdown filters for each column (like Amazon filters)
- Dynamic filtering: options update based on other selections
- Smooth slide-down filter panel
- Responsive table with:
  - Pagination (100 rows/page)
  - Scrollable display (~20 rows visible at a time)
- CSV-based data loading (`public/dataset_small.csv` or `public/dataset_large.csv`)
- Optimized dropdown performance using `react-window-select`

---

## 🛠 Tech Stack

- **Frontend:** React (Vite or CRA)
- **Dropdowns:** `react-select`
- **Data Table:** `react-data-table-component`
- **Styling:** Custom CSS
- **Dockerized Static Build**

---

## 📂 Project Structure
```
filter-app/
├── public/
│ └── dataset_small.csv # Preloaded CSV file
├── src/
│ ├── components/
│ │ ├── TopBar.js # Top navigation bar
│ │ ├── FilterPanel.js # Sliding filter panel with dropdowns
│ │ ├── FilterDropdown.js # Individual dropdown component
│ │ └── DataTable.js # Paginated and scrollable data table
│ ├── context/
│ │ └── DataContext.js # Shared global state (filters + data)
│ ├── App.js # Main component
│ ├── index.css # Global and layout styling
│ └── main.jsx # React entry point
├── Dockerfile # Docker setup for static hosting
└── README.md # Project overview and instructions
```
---

## 🛠️ Running Locally

### 1. Clone the repo
```bash
git clone https://github.com/shivam-sultania/Filter_app.git
cd Filter_app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### The app will run at http://localhost:3000



