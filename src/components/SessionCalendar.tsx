import React, { useState } from "react";

const SessionCalendar = () => {
  const [selectedYear] = useState("2022/2023");


  return (
    <div className="w-295 h-10 flex items-center">
      <label
        htmlFor="session"
        className="w-101 h-34 font-inter text-24 font-bold leading-34"
        style={{ color: "#667085" }}
      >
        Session:
      </label>
      <div
        className="w-101 h-34 font-bold text-24 p-2 font-inter leading-34 tracking-0 text-left bg-blue-50 bg-opacity-50 ml-4"
        style={{ color: "#667085" }}
      >
        {selectedYear}
      </div>
    </div>
  );
};

export default SessionCalendar;
