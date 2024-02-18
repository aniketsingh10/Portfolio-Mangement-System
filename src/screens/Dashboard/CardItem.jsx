import React, { useState } from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = ({data}) => {
  // const [profitData, setProfitData] = useState(null);
  // const [invetedData, setInvestedData] = useState(null);
  console.log("Portfolio Data",data);
  console.log("profit_loss",data?.data?.profit_loss);
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full">
      <Card
        className="w-xs shadow-lg rounded-lg"
        decoration="top"
        decorationColor="indigo"
      >
        <Flex justifyContent="between" alignItems="center">
          <Text className="">Current</Text>
          <BadgeDelta
            deltaType="moderateIncrease"
            className="bg-green-100 p-1 rounded-lg px-2"
          >
            +12.5%
          </BadgeDelta>
        </Flex>
        <Metric className="text-lg">₹ {data?.data?.total_invested + data?.data?.profit_loss}</Metric>
      </Card>
      <Card
        className="w-xs shadow-lg rounded-lg"
        decoration="top"
        decorationColor="indigo"
      >
        <Flex justifyContent="between" alignItems="center">
          <Text className="">Invested</Text>
          <BadgeDelta
            deltaType="moderateIncrease"
            className="bg-green-100 p-1 rounded-lg px-2"
          >
            +12.5%
          </BadgeDelta>
        </Flex>
        <Metric className="text-lg">{data?.data?.total_invested}</Metric>
      </Card>
      <Card
        className="w-xs shadow-lg rounded-lg"
        decoration="top"
        decorationColor="indigo"
      >
        <Flex justifyContent="between" alignItems="center">
          <Text className="">Total returns</Text>
          <BadgeDelta
            deltaType="moderateIncrease"
            className="bg-green-100 p-1 rounded-lg px-2"
          >
            +12.5%
          </BadgeDelta>
        </Flex>
        <Metric className="text-lg">{data?.data?.profit_loss}</Metric>
      </Card>
    </div>
  );
};

export default CardItem;
