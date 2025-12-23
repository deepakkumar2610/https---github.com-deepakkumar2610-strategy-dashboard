import "../StrategyCard/strategyCard.scss";

const EmptyState = ({ date }) => {
  return (
    <div className="empty-state">
      There are no strategies for
      <h2>{date}</h2>
    </div>
  );
};

export default EmptyState;
