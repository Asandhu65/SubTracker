import PropTypes from "prop-types";

function TotalSubs({ totalMonthlyPrice, totalAnnualPrice, currency }) {
  const formatPriceYen = price => {
    if (currency === "¥") {
      return price.toFixed(0);
    }
    return price.toFixed(2);
  };

  return (
    <div>
      <h2>
        Total Monthly: {currency}
        {formatPriceYen(totalMonthlyPrice)}
      </h2>
      <h2>
        Total Annual: {currency}
        {formatPriceYen(totalAnnualPrice)}
      </h2>
    </div>
  );
}

export default TotalSubs;

TotalSubs.propTypes = {
  totalMonthlyPrice: PropTypes.number.isRequired,
  totalAnnualPrice: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
