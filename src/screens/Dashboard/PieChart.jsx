import React, { useState } from "react";
import { Card, Flex, TabGroup, Tab, TabList, Title } from "@tremor/react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const SalesItem = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectordata = {
    labels: data?.data?.sector_percentage.map((entry) => entry.sector),
    datasets: [
      {
        label: " Allocation % ",
        data: data?.data?.sector_percentage.map((entry) => entry.percentage), // Add your data values here
        backgroundColor: [
          "rgb(0, 128, 0)", // Green
          "rgb(173, 216, 230)", // Light Blue
          "rgb(148, 0, 211)", // Violet
          "rgb(0, 0, 139)", // Dark Blue
          "rgb(255, 255, 0)", // Yellow
          "rgb(255, 165, 0)", // Orange
          "rgb(128, 128, 128)", // Grey
          "rgb(191, 219, 254)", // Light Blue (Alternative)
        ],
        hoverBackgroundColor: [
          "rgb(0, 128, 0)", // Green
          "rgb(173, 216, 230)", // Light Blue
          "rgb(148, 0, 211)", // Violet
          "rgb(0, 0, 139)", // Dark Blue
          "rgb(255, 255, 0)", // Yellow
          "rgb(255, 165, 0)", // Orange
          "rgb(128, 128, 128)", // Grey
          "rgb(191, 219, 254)", // Light Blue (Alternative)
        ],
      },
    ],
  };

  const marketdata = {
    labels: data?.data?.market_cap_percentage.map((entry) => entry.market_cap),
    datasets: [
      {
        label: " Allocation % ",
        data: data?.data?.market_cap_percentage.map(
          (entry) => entry.percentage
        ), // Add your data values here
        backgroundColor: [
          "rgb(0, 128, 0)", // Green
          "rgb(173, 216, 230)", // Light Blue
          "rgb(148, 0, 211)", // Violet
          "rgb(0, 0, 139)", // Dark Blue
          "rgb(255, 255, 0)", // Yellow
          "rgb(255, 165, 0)", // Orange
          "rgb(128, 128, 128)", // Grey
          "rgb(191, 219, 254)", // Light Blue (Alternative)
        ],
        hoverBackgroundColor: [
          "rgb(0, 128, 0)", // Green
          "rgb(173, 216, 230)", // Light Blue
          "rgb(148, 0, 211)", // Violet
          "rgb(0, 0, 139)", // Dark Blue
          "rgb(255, 255, 0)", // Yellow
          "rgb(255, 165, 0)", // Orange
          "rgb(128, 128, 128)", // Grey
          "rgb(191, 219, 254)", // Light Blue (Alternative)
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
            <Tab className="bg-blue-100 px-4  rounded-lg hover:scale-105">
              Sector
            </Tab>
            <Tab className="bg-blue-100 px-4  rounded-lg ml-1 hover:scale-105">
              Market Cap.
            </Tab>
          </TabList>
        </TabGroup>
      </Flex>
      {selectedIndex === 0 ? (
        <Doughnut data={sectordata} className="m-5" />
      ) : (
        <Pie data={marketdata} className="m-5" />
      )}
    </Card>
  );
};

export default SalesItem;
