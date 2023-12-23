import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const data = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
      });
      setTime(data);
    }, 1000);
  }, []);

  return <div>{time} PST.</div>;
}
