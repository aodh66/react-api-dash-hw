import { useState } from "react";

function DateModule() {
    const [date, setDate] = useState(null);
    
    function dateClick() {
        const dateClass = new Date();
        const dateObj = {
            day: dateClass.getDate(),
            month: dateClass.getMonth() + 1,
            year: dateClass.getFullYear()
        }
        setDate(dateObj)
    }

    if(date) {
return (
    <div className="date-section top-section">
    <div className="section-title">Date</div>
    <p className="date">{date.day}/{date.month}/{date.year}</p>
    <button onClick={dateClick}>Update Date</button>
</div>
)
    } else {
        return (
            <div className="date-section top-section">
            <div className="section-title">Date</div>
            <p className="date">Click below to get the current date.</p>
            <button onClick={dateClick}>Update Date</button>
        </div>
        )
    }
}

export default DateModule