import React from "react";
const calendarUrl = process.env.REACT_APP_SAKURA_CALENDAR_URL;

export default function LeftBar() {
  return (
    <div className="left-bar">
      Nav
      <ul>
        <li>first link</li>
        <li>second link</li>
        <li>third link</li>
      </ul>
      <iframe className="calendar" src={calendarUrl} scrolling="no">
        Unsupported browser!
      </iframe>
    </div>
  );
}
