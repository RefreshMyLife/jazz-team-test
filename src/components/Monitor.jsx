import React from 'react';

const Monitor = ({ state, functions }) => {
  return (
    <div className="divWrapper_monitor">
      <div className="buttonsWrapper">
        <button className="buttonWrapper" onClick={() => functions.onClickArrow('left')}>
          {' '}
          &lt;{' '}
        </button>

        <div className="todayButton today-month">
          {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
        </div>
        <button className="buttonWrapper" onClick={() => functions.onClickArrow('right')}>
          {' '}
          &gt;{' '}
        </button>
      </div>
      <div className="buttonsWrapper">
        <input
          type="text"
          className="input-search"
          placeholder="Событие, дата или участник"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Monitor;
