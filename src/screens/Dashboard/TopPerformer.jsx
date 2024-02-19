import React from "react";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

const WebAnalytics = ({data}) => {
  const sortedPortfolio = [data?.data?.portfolio].sort((a, b) => b.profit_loss_percentage - a.profit_loss_percentage);

  const top5Performers = sortedPortfolio.slice(0, 5);

 console.log("Top Performer",top5Performers)

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
      {/* <BarList data={performer} className="mt-2" /> */}
    </Card>
  );
};

export default WebAnalytics;
