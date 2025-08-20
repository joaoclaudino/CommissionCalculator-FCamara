# Commission Calculator

This project is a **technical challenge** originally provided by FCamara.  
It implements a Commission Calculator using a **.NET 6 API** (backend) and a **React application** (frontend).  

The goal is to compare commissions paid by **FCamara** vs. **Competitors**, based on sales counts and average sale amount.  

---

## 🚀 Technologies

- **Backend**: .NET 6, C#, ASP.NET Web API, CORS  
- **Frontend**: React, Axios, CSS  
- **Other**: Git, GitHub  

---

## 🔧 Business Rules

- **FCamara**  
  - Local Sales: 20% commission  
  - Foreign Sales: 35% commission  

- **Competitors**  
  - Local Sales: 2% commission  
  - Foreign Sales: 7.55% commission  

---

## 📦 Improvements in this fork

- Configured **CORS** in backend to allow frontend communication  
- Implemented calculation logic in C# Controller  
- Integrated frontend React with backend API via Axios  
- Improved UI with better formatting and error handling  
- Fixed currency display (GBP formatting)  

---

## ▶️ How to Run

### 1. Backend (.NET API)
```bash
cd CommissionCalculator.Api
dotnet restore
dotnet run
```
Backend runs at: `https://localhost:5000`

### 2. Frontend (React)
```bash
cd commission-calculator-frontend
npm install
npm start
```
Frontend runs at: `http://localhost:3000`

---

## 📊 Example

Input:  
- Local Sales: 10  
- Foreign Sales: 10  
- Average Sale Amount: £100  

Output:  
- **FCamara Commission**: £550.00  
- **Competitor Commission**: £95.50  

---

## 📌 Author

Fork maintained by **João Claudino**  
