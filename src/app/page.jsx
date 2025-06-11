"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  Filler
);
import "../app/styles/globals.css";
import { DatePicker } from "antd";
import dayjs from "dayjs";

function Dashboard() {
  const [year, setYear] = useState("2024");
  const [day, setDay] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const stats = [
    { label: "Tashriflar soni", value: 24113, color: "#00D6C6" },
    { label: "Aktiv foydalanuvchilar", value: 2318, color: "#3D7BFF" },
    { label: "Yangi foydalanuvchilar", value: 21795, color: "#1E1E2D" },
  ];

  const lineData = {
    labels: [
      "Yan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "Iyun",
      "Iyul",
      "Avg",
      "Sen",
      "Okt",
      "Noy",
      "Dek",
    ],
    datasets: [
      {
        label: "Aktiv",
        data: [50, 80, 60, 90, 120, 100, 130, 150, 140, 110, 100, 70],
        borderColor: "#1E1E2D",
        backgroundColor: "rgba(30, 30, 45, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Yangi",
        data: [40, 70, 50, 85, 110, 95, 120, 140, 130, 105, 90, 60],
        borderColor: "#3D7BFF",
        backgroundColor: "rgba(61, 123, 255, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: [
      "Yan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "Iyun",
      "Iyul",
      "Avg",
      "Sen",
      "Okt",
      "Noy",
      "Dek",
    ],
    datasets: [
      {
        label: "Yangi",
        backgroundColor: "#3D7BFF",
        data: [
          1700, 1600, 1800, 1900, 2000, 1850, 1750, 1650, 1600, 1700, 1800,
          1900,
        ],
      },
      {
        label: "Aktiv",
        backgroundColor: "#C4C4C4",
        data: [900, 950, 1000, 1050, 1100, 1000, 950, 900, 880, 890, 920, 940],
      },
    ],
  };

  const doughnutData = {
    labels: ["Aktiv foydalanuvchilar", "Yangi foydalanuvchilar"],
    datasets: [
      {
        data: [2318, 21795],
        backgroundColor: ["#3D7BFF", "#1E1E2D"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div
      className=" overflow-y-auto h-[650px] scroll-hidden"
      style={{
        fontFamily: "sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <h2 style={{ fontWeight: "600", fontSize: "1.5rem", color: "#333" }}>
        Dashboard
      </h2>
      <div className="flex gap-4 mb-6">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Year</label>
          <DatePicker
            picker="year"
            className="w-40"
            defaultValue={dayjs()} // endi bu muammo bermaydi
            allowClear={false}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Day</label>
          <DatePicker
            className="w-40"
            defaultValue={dayjs()}
            allowClear={false}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", flex: 1 }}>
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "10px",
                textAlign: "center",
                width: "100%",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <svg width="100%" height="100" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#eee"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={item.color}
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${(item.value / 25000) * 283}, 283`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: item.color,
                }}
              >
                {item.value.toLocaleString("uz-UZ")}
              </div>
              <div style={{ color: "#888", marginTop: "0.3rem" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: { legend: { display: true, position: "top" } },
              maintainAspectRatio: false,
            }}
            height={200}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: { legend: { position: "bottom" } },
              maintainAspectRatio: false,
            }}
            height={250}
          />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "70%" }}>
            <Doughnut
              data={doughnutData}
              options={{
                responsive: true,
                plugins: { legend: { position: "right" } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
