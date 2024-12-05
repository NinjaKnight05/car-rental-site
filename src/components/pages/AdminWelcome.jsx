import { Link } from "react-router-dom";
import React, { useState } from "react";
import Clock from "react-live-clock";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Home() {
  const [lineChartData, setLineChartData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales Over Time",
        data: [150, 200, 250, 300, 400],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "red",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });

  const [barChartData, setBarChartData] = useState({
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Revenue",
        data: [200, 300, 400, 500],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
      {
        label: "Loss",
        data: [100, 80, 60, 90],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  });

  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Rented ", "Availaible", "Maintenance "],
    datasets: [
      {
        data: [300, 500, 200],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="main">
      <div className="main-pica">
        <h1 className="about-taitalad">
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"en-US"} className="clock" />
        </h1>
      </div>

      <div className="secand-area-start">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span> <h1 className="current-status">current statics</h1></span>
            </div>
          </div>
          <div className="admin-page">
            <div className="row">
              <div className="col-md-6">
                <div className="data-card">
                  <Line
                    data={lineChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Customer Growth",
                        },
                      },
                      animations: {
                        x: {
                          duration: 1000, // Duration of 1 second for X-axis
                          from: 0,        // Animation starts from 0
                        },
                        y: {
                          duration: 1500, // Duration of 1.5 seconds for Y-axis
                          delay: 900,     // 0.5-second delay before starting
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-card2">
                  <Bar
                    data={barChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Revenue Data",
                        },
                      },
                      animations: {
                        x: {
                          duration: 1000, // 1-second duration for X-axis animation
                          from: 0,        // Animation starts from 0
                        },
                        y: {
                          duration: 1500, // 1.5-second duration for Y-axis animation
                          delay: 900,     // 0.5-second delay
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-card3">
                  <Doughnut
                    data={doughnutChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Car Status",
                        },
                      },
                      animations: {
                        x: {
                          duration: 1000, // 1-second duration for X-axis animation
                        },
                        y: {
                          duration: 1500, // 1.5-second duration for Y-axis animation
                          delay: 1500,     // 0.5-second delay
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-card4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="box">
                        <h5>Total Cars</h5>
                        <p>120</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="box">
                        <h5>Pending Bookings</h5>
                        <p>10</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="box">
                        <h5>Customer Count</h5>
                        <p>853</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="box">
                        <h5>Total Revenue</h5>
                        <p>925,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
