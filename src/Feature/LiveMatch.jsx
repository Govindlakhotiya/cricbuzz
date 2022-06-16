import React from "react";
import styles from "../Feature/livematch.module.css";

const LiveMatch = () => {
  return (
    <div className="bg-white p-3 mb-2">
      <h5 className={styles.match}>FEATURED MATCHES</h5><br></br>
      <div className={styles.container}>
        <div>
          <div
            style={{ display: "flex", gap: "45px", backgroundColor: "white" }}
          >
            <h6 style={{ textAlign: "left" }}>NZ</h6>
            <h6 style={{ textAlign: "left" }}>337-4</h6>
          </div>
          <h6 style={{ textAlign: "left" }}>ENG</h6>
          <h6 style={{ textAlign: "left" }}>Day 2: 1st Session</h6>
        </div>
        <div style={{ textAlign: "left" }}>
          <h6>Zimbabwe</h6>
          <h6>Afghanistan</h6>
          <h6>Zimbabwe opt to bat</h6>
        </div>
        <div style={{ textAlign: "left" }}>
          <h6>India</h6>
          <h6>South Africa</h6>
          <h6>Today, 07:00 PM</h6>
        </div>
        <div style={{ textAlign: "left" }}>
          <div style={{ display: "flex", gap: "45px" }}>
            <h6>IREW</h6>
            <h6>14-4(11.1) </h6>
          </div>
          <h6>RSAW</h6>
          <h6>Today, 07:00 PM</h6>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
