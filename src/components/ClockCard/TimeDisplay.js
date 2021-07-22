import React, { useEffect, useState } from 'react';
import { useGetTime } from '../../hooks/useGetTime';

function TimeDisplay(props) {
  let currentTime1 = useGetTime(props.timezone);

  let [currentTime, setCurrentTime] = useState(
    `${currentTime1.hour() < 10 ? "0" + currentTime1.hour() : currentTime1.hour()} : 
    ${currentTime1.min() < 10 ? "0" + currentTime1.min() : currentTime1.min()} : 
    ${currentTime1.sec() < 10 ? "0" + currentTime1.sec() : currentTime1.sec()}`);

  const updateTime = () => {
    return (
      `${currentTime1.hour() < 10 ? "0" + currentTime1.hour() : currentTime1.hour()} : 
        ${currentTime1.min() < 10 ? ("0" + currentTime1.min()) : currentTime1.min()} : 
        ${currentTime1.sec() < 10 ? ("0" + currentTime1.sec()) : currentTime1.sec()}`);
  }

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setCurrentTime(updateTime())
    }, 10)

    return () => clearInterval(interval)
  }, [currentTime])


  return (
    <>
      {currentTime}
    </>
  )
}

export default TimeDisplay;
