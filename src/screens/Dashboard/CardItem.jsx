import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
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
        <Metric className="text-lg">₹ 34,743</Metric>
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
        <Metric className="text-lg">₹ 30,600</Metric>
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
        <Metric className="text-lg">₹ 4,143</Metric>
      </Card>
    </div>
  );
};

export default CardItem;
