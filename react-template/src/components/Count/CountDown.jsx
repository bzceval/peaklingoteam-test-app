import React, {useState, useEffect, useRef} from 'react';
import moment from "moment"  
import { Box, Timer, CountTimer, CountDescription } from './CountDownStyles';

const GeriSayim = () => {

  const [date] = useState(() => {
    return moment().add(1, "hours")
  })
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  useEffect(() => {
    startedCountdown();
    return clearInterval(interval.current)
  }, [date] )

  const startedCountdown = () => {
    interval = setInterval(() => {
      const now = moment();
      const distance = date - now;

      const hours = moment.duration(distance).hours();
      const minutes = moment.duration(distance).minutes();
      const seconds = moment.duration(distance).seconds();

      if(distance < 0) {
        clearInterval(interval.current)
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds)
      }
    }, 1000)
  }
  return (
    <Box>
      <Timer>
      <CountTimer>{hours}</CountTimer>
      <CountDescription>Saat</CountDescription>
    </Timer>
    <Timer>
      <CountTimer>{minutes}</CountTimer>
      <CountDescription>Dakika</CountDescription>
    </Timer>
    <Timer>
      <CountTimer>{seconds}</CountTimer>
      <CountDescription>Saniye</CountDescription>
    </Timer>
    </Box>
  )
}
export default GeriSayim;