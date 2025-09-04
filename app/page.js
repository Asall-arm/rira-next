"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Home() {
  const [dollarAmount, setDollarAmount] = useState("");
  const [tomanAmount, setTomanAmount] = useState("");
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/rate")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch exchange rate");
        }
        return res.json();
      })
      .then((data) => {
        setRate(data.rate); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const cleanAndParse = (value) => {
    if (!value) return NaN;

    const cleaned = value.toString().replace(/,/g, "").replace(/\./g, "");

    return parseFloat(cleaned);
  };

  const formatWithCommas = (num) => {
    if (num === null || num === undefined || num === "" || isNaN(num)) return "";
    return parseFloat(num).toLocaleString("en-US");
  };

  const handleDollarChange = (e) => {
    const value = e.target.value;
    const numericValue = cleanAndParse(value);

    setDollarAmount(value);

    if (!isNaN(numericValue) && rate) {
      const calculatedToman = numericValue * rate;
      setTomanAmount(formatWithCommas(calculatedToman.toFixed(0)));
    } else {
      setTomanAmount("");
    }
  };

  const handleTomanChange = (e) => {
    const value = e.target.value;
    const numericValue = cleanAndParse(value);

    setTomanAmount(value);

    if (!isNaN(numericValue) && rate && rate !== 0) {
      const calculatedDollar = numericValue / rate;
      setDollarAmount(formatWithCommas(calculatedDollar.toFixed(2)));
    } else {
      setDollarAmount("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>💵 تبدیل دلار به ريال</h2>

        {loading && (
          <p className={`${styles.statusMessage} ${styles.loading}`}>
            ⏳ در حال دریافت نرخ...
          </p>
        )}
        {error && (
          <p className={`${styles.statusMessage} ${styles.error}`}>
            ❌ خطا: {error}
          </p>
        )}
        {rate && !loading && !error && (
          <p className={styles.rateDisplay}>
            نرخ فعلی دلار: <b>{formatWithCommas(rate)}</b> ريال
          </p>
        )}

        <div className={styles.inputGroup}>
          <label className={styles.label}>مقدار دلار: </label>
          <input
            type="text"
            className={styles.input}
            value={dollarAmount}
            onChange={handleDollarChange}
            placeholder="مقدار به دلار"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>مقدار ريال: </label>
          <input
            type="text"
            className={styles.input}
            value={tomanAmount}
            onChange={handleTomanChange}
            placeholder="مقدار به ريال"
          />
        </div>
      </div>
    </div>
  );
}