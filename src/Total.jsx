import PropTypes from "prop-types";

function TotalSubs({ totalMonthlyPrice, totalAnnualPrice }) {
  return (
    <div>
      <h2>Total Monthly: ${totalMonthlyPrice.toFixed(2)}</h2>
      <h2>Total Annual: ${totalAnnualPrice.toFixed(2)}</h2>
    </div>
  );
}

export default TotalSubs;

TotalSubs.propTypes = {
  totalMonthlyPrice: PropTypes.number.isRequired,
  totalAnnualPrice: PropTypes.number.isRequired,
};
