import React, { useRef, useEffect, useState } from 'react';
import Clock from '../../clockCanvas/renderClock';
import { useGetTime } from '../../hooks/useGetTime';

function PointerClock(props) {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const canvasRef3 = useRef(null);
  const canvasRef4 = useRef(null);

  let createTime = useGetTime(props.timezone);
  let [currentTime, setCurrentTime] = useState({ sec: createTime.sec(), min: createTime.min(), hour: createTime.hour() })


  const styleCanvas = {
    "display": "block",
    "position": "absolute",
    "top": "0",
    "left": "0"
  }

  const updateTime = () => {
    return { sec: createTime.sec(), min: createTime.min(), hour: createTime.hour() }
  }

  useEffect(() => {
    const canvas1 = canvasRef1.current;
    const canvas2 = canvasRef2.current;
    const canvas3 = canvasRef3.current;
    const canvas4 = canvasRef4.current;

    let mainClock = new Clock({ canvas1, canvas2, canvas3, canvas4 });
    mainClock.render(currentTime);

    let interval = null;
    interval = setInterval(() => {
      setCurrentTime(updateTime());
    }, 10)

    return () => clearInterval(interval)
  }, [currentTime])

  return (
    <div>
      <canvas ref={canvasRef1} height={props.height} width={props.width}></canvas>
      <canvas ref={canvasRef2} height={props.height} width={props.width} style={styleCanvas}></canvas>
      <canvas ref={canvasRef3} height={props.height} width={props.width} style={styleCanvas}></canvas>
      <canvas ref={canvasRef4} height={props.height} width={props.width} style={styleCanvas}></canvas>
    </div>
  )
}

export default PointerClock
