import React from "react";

export default ({euroBuyRate, euroSellRate}) => {
  return (
    <>
      <h1>EUR rate at currency exchange</h1>
      <h3> - buy: {euroBuyRate} PLN</h3>
      <h3> - sell: {euroSellRate} PLN</h3>
    </>
  );
};
