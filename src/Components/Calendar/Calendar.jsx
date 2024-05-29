import React, { useEffect, useState } from "react";

function Calendar ({amountOfDays}) {
    useEffect(() => {
    // Function to generate an array of days
    const generateDays = () => {
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const gridDays = [];
      
      const sortedWeekdays = [...weekdays, ...gridDays]
      return sortedWeekdays;
    }}, []);

    const [days, setDays] = useState([]);

    return (
        <div>
            <h1>Calendar</h1>
        </div>
    )
}

export default Calendar;