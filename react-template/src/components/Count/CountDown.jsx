import React, {useState, useEffect, useRef} from 'react';
import moment from "moment"  
import { Box, Timer, CountTimer, CountDescription } from './CountDownStyles';

const CountDown = () => {

  const [date] = useState(() => {
    return moment().add(5, "hours")
  })
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  useEffect(() => {
    startedCountdown();
    return clearInterval(interval.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date] )

  function startedCountdown() {
    interval = setInterval(() => {
      const now = moment();
      const distance = date - now;

      const hours = moment.duration(distance).hours();
      const minutes = moment.duration(distance).minutes();
      const seconds = moment.duration(distance).seconds();

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  }
  return (
    <Box>
      <Timer>
      <CountTimer>{hours}</CountTimer>
      <CountDescription>Hours</CountDescription>
    </Timer>
    <Timer>
      <CountTimer>{minutes}</CountTimer>
      <CountDescription>Minutes</CountDescription>
    </Timer>
    <Timer>
      <CountTimer>{seconds}</CountTimer>
      <CountDescription>Seconds</CountDescription>
    </Timer>
    </Box>
  )
}
export default CountDown;