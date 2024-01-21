import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import CardItem from "./CardItem";
import TableComponent from "./TableComponent";
// import AreaChartComponent from "./AreaChartComponent";
// import TableComponent from "./TableComponent";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div>
        <CardItem />
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent />
        <TableComponent />
      </div>
    </div>
  );
};

export default LeftColumn;
