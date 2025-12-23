import "../StrategyCard/strategyCard.scss";
const StrategyCard = ({ name, count }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>
        {count} {count === 1 ? "Strategy" : "Strategies"}
      </p>
    </div>
  );
};

export default StrategyCard;
