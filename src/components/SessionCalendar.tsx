import React, { useState } from 'react';

const SessionCalendar = () => {
  const [selectedYear, setSelectedYear] = useState('');

  // Function to handle year selection
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    // You can perform additional actions based on the selected year if needed
  };

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Generate options for the previous and current years
  const options = Array.from({ length: currentYear - 1960 + 1 }, (_, index) => {
    const year = currentYear - index;
    return { value: `${year - 1}/${year}`, label: `${year - 1}/${year}` };
  });

  return (
    <div className='w-295 h-44'>
  <label htmlFor="session" className="w-101 h-34 font-inter text-24 font-bold leading-34" style={{ color: "#667085" }}>
    Session:
  </label>
  <select
    name="session"
    id="session"
    className="w-101 h-34 font-bold text-24 p-2 font-inter leading-34 tracking-0 text-left" style={{ color: "#667085" }}
    onChange={handleYearChange}
    value={selectedYear}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value} className="">
        {option.label}
      </option>
    ))}
  </select>
</div>

  );
};

export default SessionCalendar;
