import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCurrencies } from "../actions/currencies";
import { Row, Col, Badge } from "reactstrap";
import Select from "react-select";
import Calculator from "./Calculator";
import s from "./Calculator.module.scss";

function Currencies(props) {
  const { currencyList, isFetchingCurrencies } = props;

  const currencies = currencyList.map(currency => {
    return {
      value: currency.id,
      label: currency.name,
      priceUSD: currency.price_usd,
      currentChange24Hours: currency.percent_change_24h,
      symbol: currency.symbol
    };
  });

  const [currency, setCurrency] = useState(0);

  useEffect(() => {
    if (!currencyList.length) {
      props.getCurrencies();
    }
  });

  function handleChange(selectedOption) {
    setCurrency(selectedOption);
  }

  return (
    <div className={s.Container}>
      <h3 className="mt-2"> Crypto Currency Calculator</h3>
      <Row className="mt-3">
        <Col xl={4}>
          <Select
            className={s.SelectBox}
            value={currency}
            onChange={handleChange}
            isDisabled={isFetchingCurrencies}
            options={currencies}
            placeholder={
              isFetchingCurrencies ? "Loading, please wait" : "Select Currency"
            }
          />
        </Col>
        <Col>
          {currency.value && (
            <div>
              <span className="mr-1">Price</span>
              <Badge color="primary" pill>
                ${currency.priceUSD}
              </Badge>
              <span className="ml-4">Current Change(24 Hours)</span>
              <Badge className="ml-1" color="primary" pill>
                {currency.currentChange24Hours} %
              </Badge>
            </div>
          )}
        </Col>
      </Row>
      {currency.value && (
        <Row>
          <Col xl={4}>
            <Calculator currency={currency} />
          </Col>
        </Row>
      )}
    </div>
  );
}

const mapStateToProps = ({ currencies }) => {
  const { isFetchingCurrencies, currencyList, errorMessage } = currencies;

  return {
    isFetchingCurrencies,
    currencyList,
    errorMessage
  };
};

export default connect(
  mapStateToProps,
  { getCurrencies }
)(Currencies);
