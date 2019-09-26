import React, { useEffect, useState, useRef } from "react";
import { Badge, FormGroup, Label, Input, InputGroup } from "reactstrap";

function Calculator(props) {

  const [count, setCount] = useState();
  const [price, setPrice] = useState();

   const {currency} = props;

  const handleCountChange = e => {
    setCount(e.target.value);
    const price = (e.target.value * currency.priceUSD).toFixed(2);
    setPrice(price);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    const count = (e.target.value / currency.priceUSD).toFixed(2);
    setCount(count);
  }

  const ref = useRef();

  useEffect(() => {
    setPrice((ref.current.props.value * currency.priceUSD).toFixed(2));
  }, [currency]);

  return (
    <React.Fragment>
      <h5 className="mt-5">{currency.symbol} to USD Converter</h5>
      <FormGroup className="mt-4">
        <Label for="coin-count-input">{currency.symbol}</Label>
        <Badge className="ml-2" color="info">
          PRICE - ${currency.priceUSD}
        </Badge>
        <InputGroup>
          <Input
            ref={ref}
            value={count}
            onChange={handleCountChange}
            type="number"
            name="count"
            id="coin-count-input"
            placeholder="Amount"
          />
        </InputGroup>
      </FormGroup>
      <FormGroup className="mt-4">
        <Label for="usd-input">USD</Label>
        <InputGroup>
          <Input
            value={price}
            onChange={handlePriceChange}
            type="number"
            name="usd"
            id="usd-input"
            placeholder="Price"
          />
        </InputGroup>
      </FormGroup>
    </React.Fragment>
  );

}

export default Calculator;