import "../DateDropdown/dateDropdown.scss";

const DateDropdown = ({ dates, selectedDate, onChangeHandler }) => {
  return (
    <div className="date__dropdown">
      <select
        value={selectedDate}
        onChange={(e) => onChangeHandler(e.target.value)}
      >
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <span className="date__dropdown--arrow">
        <i class="fa-solid fa-angle-down"></i>
      </span>
    </div>
  );
};

export default DateDropdown;
