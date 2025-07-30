import React from 'react'
import './Preloader.css'
import { useEffect } from 'react'


const Preloader = () => {
      useEffect(() => {
    const text = document.getElementById("progressText");
    let counter = 0;

    const interval = setInterval(() => {
      if (counter <= 100) {
        text.textContent = `${counter}%`;
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 40); // 100% in ~4s

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loading-window">
      <div className="car-wrapper">
        <div className="car">
          <div className="strike"></div>
          <div className="strike strike2"></div>
          <div className="strike strike3"></div>
          <div className="strike strike4"></div>
          <div className="strike strike5"></div>
          <div className="car-detail spoiler"></div>
          <div className="car-detail back"></div>
          <div className="car-detail center"></div>
          <div className="car-detail center1"></div>
          <div className="car-detail front"></div>
          <div className="car-detail wheel"></div>
          <div className="car-detail wheel wheel2"></div>
        </div>
      </div>

  <div className="progress-container">
    <div className="progress-text" id="progressText">0%</div>
    <div className="progress-bar">
      <div className="fill"></div>
    </div>
  </div>
    </div>
  )
}

export default Preloader
