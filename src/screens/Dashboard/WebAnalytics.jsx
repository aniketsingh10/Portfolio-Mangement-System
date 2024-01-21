import React from "react";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

const data = [
  {
    name: "Reliance",
    value: 456,
  },
  {
    name: "Google",
    value: 351,
  },
  {
    name: "GitHub",
    value: 271,
  },
  {
    name: "Reddit",
    value: 191,
  },
  {
    name: "Youtube",
    value: 91,
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
