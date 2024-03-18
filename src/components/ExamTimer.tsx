import React, { useEffect, useState } from 'react';

interface CounterProps {
  seconds: number;
}

const Counter: React.FC<CounterProps> = ({ seconds }) => {
  const [time, setTime] = useState({ minutes: Math.floor(seconds / 60), seconds: seconds % 60 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(timer);
      } else {
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            clearInterval(timer);
          } else {
            setTime({ minutes: time.minutes - 1, seconds: 59 });
          }
        } else {
          setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="fixed top-[80px]">
      <div className="w-[auto] h-[auto] bg-[#667085] flex-col px-2 py-2 drop-shadow-lg">
        <div className="flex justify-around">
          <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-white rounded-full p-2 text-white text-2xl">{time.minutes}</div>
          <div className="flex items-center text-2xl text-white mx-2">:</div>
          <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-white rounded-full p-2 text-white text-2xl">{time.seconds}</div>
        </div>
        <div className="flex justify-between">
          <p className="text-white">Minutes</p>
          <p className="text-white">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
