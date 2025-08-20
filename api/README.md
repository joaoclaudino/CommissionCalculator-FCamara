# Commission Calculator - Backend (API)

This is the **.NET 6 API backend** for the Commission Calculator challenge.  
It provides endpoints to calculate commissions paid by **FCamara** vs. **Competitors**, based on sales counts and average sale amount.

---

## 🚀 Technologies

- .NET 6  
- C#  
- ASP.NET Web API  
- CORS  

---

## 📦 Features

- REST API endpoint to calculate commissions  
- Business rules implemented in C#:  
  - **FCamara**  
    - Local Sales: 20% commission  
    - Foreign Sales: 35% commission  
  - **Competitors**  
    - Local Sales: 2% commission  
    - Foreign Sales: 7.55% commission  

---

## ▶️ How to Run

1. Restore dependencies:
   ```bash
   dotnet restore
   ```

2. Run the project:
   ```bash
   dotnet run
   ```

3. API will be available at:
   - `https://localhost:5000`

---

## 📊 Example Request

**POST** `/api/commission/calculate`

Request body:
```json
{
  "localSalesCount": 10,
  "foreignSalesCount": 5,
  "averageSaleAmount": 100
}
```

Response:
```json
{
  "fcamaraCommission": 475.0,
  "competitorCommission": 77.75
}
```

---

## 📌 Author

Fork maintained by **João Claudino**
