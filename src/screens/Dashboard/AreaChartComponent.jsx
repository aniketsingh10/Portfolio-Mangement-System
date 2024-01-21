import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    Portfolio: 2890,
    Nifty: 2338,
  },
  {
    date: "Feb 22",
    Portfolio: 2756,
    Nifty: 2103,
  },
  {
    date: "Mar 22",
    Portfolio: 3322,
    Nifty: 2194,
  },
  {
    date: "Apr 22",
    Portfolio: 3470,
    Nifty: 2108,
  },
  {
    date: "May 22",
    Portfolio: 3475,
    Nifty: 1812,
  },
  {
    date: "Jun 22",
    Portfolio: 3129,
    Nifty: 1726,
  },
];

const dataFormatter = (number) => {
  return "₹ " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartComponent = () => {
  return (
    <Card className="mt-4 shadow-lg">
      <Title>Portfolio vs Nifty Comparison</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["Portfolio", "Nifty"]}
        colors={["indigo", "green"]}
        valueFormatter={dataFormatter}
        showLegend={false}
        showAnimation={true}
      />
    </Card>
  );
};

export default AreaChartComponent;
