import React, { useEffect,useState } from 'react'

const Timer = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date(`2023-04-29T09:30:59-07:00`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
      return (
        <div>
          {timerComponents.length ? timerComponents : <span><video
    className="lg:w-[50vw] m-auto" poster='https://media.graphassets.com/ICeMaJTvTVuSr6M7qeRV' controls
    src="https://media.graphassets.com/aWpGOGRMTMe2RNz58k51"
 ></video></span>}
        </div>
      );
};

export default Timer;