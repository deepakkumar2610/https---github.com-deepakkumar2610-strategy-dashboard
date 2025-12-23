const views = ["Bullish", "Bearish", "RangeBound", "Volatile"];
import "../ViewToggle/viewToggle.scss";

const ViewToggle = ({ selectedView, handleChange }) => {
  return (
    <div className="view__toggle">
      {views.map((view) => (
        <button
          key={view}
          className={view === selectedView ? "active" : ""}
          onClick={() => handleChange(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;
