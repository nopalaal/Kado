import React, { useEffect, useState } from 'react'

const Waktu = () => {
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
      }, []);
    
      const tanggalWaktu = now.toLocaleString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    
  return (
    <div>{tanggalWaktu}</div>
  )
}

export default Waktu