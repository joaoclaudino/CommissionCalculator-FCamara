# Commission Calculator - Frontend (React)

This is the **React frontend** for the Commission Calculator challenge.  
It communicates with the **.NET 6 API backend** to calculate commissions paid by **FCamara** vs. **Competitors**, based on sales inputs.

---

## 🚀 Technologies

- React (Create React App)  
- Axios (API integration)  
- CSS (basic styling)  

---

## 📦 Features

- Form to input:
  - Local Sales Count
  - Foreign Sales Count
  - Average Sale Amount (GBP)  
- Calls the backend API to perform calculations  
- Displays results for:
  - **FCamara Commission**
  - **Competitor Commission**
- Currency formatted in **GBP (£)**  

---

## ▶️ How to Run

1. Make sure the backend API is running at `https://localhost:5000`  
   (see main [README](../README.md) for backend setup).

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm start
   ```

4. Access in the browser:  
   [http://localhost:3000](http://localhost:3000)

---

## 📊 Example

Input:  
- Local Sales: 5  
- Foreign Sales: 3  
- Average Sale Amount: £200  

Output:  
- **FCamara Commission**: £1,250.00  
- **Competitor Commission**: £289.30  

---

## 📌 Notes

- The backend URL is configured in `.env` (`REACT_APP_API_URL`).  
- Make sure it matches your API port and protocol.  

---

## 📌 Author

Fork maintained by **João Claudino**
