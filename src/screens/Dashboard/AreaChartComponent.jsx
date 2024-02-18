import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

const dataFormatter = (number) => {
  return "% " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartComponent = ({data}) => {
  console.log("Data from AreaChart",data);
  return (
    <Card className="mt-4 shadow-lg">
      <Title>Portfolio vs Nifty Comparison</Title>
      <AreaChart
        className="h-72 mt-4"
        data={data?.data?.portfolio_nifty}
        index="date"
        categories={["portfolio", "nifty"]}
        colors={["indigo", "green"]}
        valueFormatter={dataFormatter}
        showLegend={false}
        showAnimation={true}
      />
    </Card>
  );
};

export default AreaChartComponent;
