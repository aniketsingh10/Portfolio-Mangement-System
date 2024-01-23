import React from "react";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

const data = [
  {
    name: "Reliance",
    value: 45,
  },
  {
    name: "Reliance",
    value: 35,
  },
  {
    name: "Reliance",
    value: 27,
  },
  {
    name: "Reliance",
    value: 19,
  },
  {
    name: "Reliance",
    value: 9,
  },
];

const WebAnalytics = () => {
  return (
    <Card className="max-w-full my-4 shadow-lg">
      <Title>Top Performers in Portfolio</Title>
      <Flex className="mt-4">
        <Text>
          <Bold>Name</Bold>
        </Text>
        <Text>
          <Bold>% Returns</Bold>
        </Text>
      </Flex>
      <BarList data={data} className="mt-2" />
    </Card>
  );
};

export default WebAnalytics;
