import React, { useState } from "react";
import { Card, Flex, TabGroup, Tab, TabList, Title } from "@tremor/react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = {
    labels: ["IT", "Pharma", "Automobile", "Banking"],
    datasets: [
      {
        label: " Allocation % ",
        data: [10, 20, 30, 40], // Add your data values here
        backgroundColor: [
          "rgb(191 219 254)",
          "rgb(147 197 253)",
          "rgb(96 165 250)",
          "rgb(59 130 246)",
        ], // Add your desired colors
        hoverBackgroundColor: [
          "rgb(191 219 254)",
          "rgb(147 197 253)",
          "rgb(96 165 250)",
          "rgb(59 130 246)",
        ],
      },
    ],
  };

  return (
    <Card className="max-w-full mx-auto shadow-lg">
      <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>Diversification</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab className="bg-blue-200 px-4  rounded-lg hover:scale-105">
              Sector
            </Tab>
            <Tab className="bg-blue-200 px-4  rounded-lg ml-1 hover:scale-105">
              Market Cap.
            </Tab>
          </TabList>
        </TabGroup>
      </Flex>
      {selectedIndex === 0 ? (
        <Doughnut data={data} className="m-5" />
      ) : (
        <Pie data={data} className="m-5" />
      )}
    </Card>
  );
};

export default SalesItem;
