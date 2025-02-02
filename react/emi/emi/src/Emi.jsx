import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmiCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEmi = () => {
    const p = parseFloat(amount); // Principal amount
    const r = parseFloat(rate) / 12 / 100; // Monthly interest rate
    const n = parseFloat(time) * 12; // Loan tenure in months

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h1 className="text-center">EMI Calculator</h1>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Loan Amount (₹):</label>
            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter loan amount"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Interest Rate (%):</label>
            <input
              type="number"
              className="form-control"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter interest rate"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Loan Tenure (Years):</label>
            <input
              type="number"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter loan tenure"
            />
          </div>
          <button
            className="btn btn-primary w-100"
            onClick={calculateEmi}
          >
            Calculate EMI
          </button>
          {emi && (
            <div className="mt-4 text-center">
              <h2>Your Monthly EMI: ₹{emi}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmiCalculator;