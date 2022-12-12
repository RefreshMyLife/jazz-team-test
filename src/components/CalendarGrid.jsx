import React from 'react';

const CalendarGrid = ({ startDay }) => {
  return (
    <div className="gridWrapper">
      {startDay.map((dayItem, i) => (
        <div className="cellWrapper">
          <div className="rowInCell">
            <div className="dayWrapper">
              {i < 7 ? dayItem.day + ',' : ''}
              {dayItem.dayNumber}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
