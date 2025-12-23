import { useMemo, useState } from "react";
import "../StrategyDashboard/strategyDashboard.scss";

import { dateArray, strategyArray } from "../../data/strategyData";
import { getStrategyCount } from "../../utils/strategyUtils";

import ViewToggle from "../../components/ViewToggle/viewToggle";
import DateDropdown from "../../components/DateDropdown/dateDropdown";
import StrategyCard from "../../components/StrategyCard/strategyCard";
import EmptyState from "../../components/EmptyState/emptyState";

const StrategyDashboard = () => {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategyCounts = useMemo(() => {
    const viewData = strategyArray.find((item) => item.View === selectedView);

    if (!viewData) return {};

    const strategies = viewData.Value[selectedDate] || [];
    return getStrategyCount(strategies);
  }, [selectedView, selectedDate]);

  const hasStrategies = Object.keys(strategyCounts).length > 0;

  return (
    <div className="container">
      <header className="container__appbar">
        <h2>Strategy Dashboard</h2>
      </header>

      <ViewToggle selectedView={selectedView} handleChange={setSelectedView} />

      <DateDropdown
        dates={dateArray}
        selectedDate={selectedDate}
        onChangeHandler={setSelectedDate}
      />

      <div className="cards">
        {hasStrategies ? (
          Object.entries(strategyCounts).map(([name, count]) => (
            <StrategyCard key={name} name={name} count={count} />
          ))
        ) : (
          <EmptyState date={selectedDate} />
        )}
      </div>
    </div>
  );
};

export default StrategyDashboard;
