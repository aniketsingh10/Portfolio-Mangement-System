import React from "react";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const TableComponent = ({ data }) => {
  return (
    <Card className="mt-4 shadow-lg">
      <Title>List of Stocks Holding in Portfolio</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Shares</TableHeaderCell>
            <TableHeaderCell>Average Price</TableHeaderCell>
            <TableHeaderCell>Profit/Loss</TableHeaderCell>
            <TableHeaderCell>Rating</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.portfolio.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.quantity}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.buy_price}</Text>
              </TableCell>
              <TableCell>
                {item.profit_loss_percentage > 0 ? (
                  <Badge className="bg-green-100  rounded-lg py-1 px-4">
                    {item.profit_loss_percentage} %
                  </Badge>
                ) : (
                  <Badge className="bg-red-100  rounded-lg py-1 px-4">
                    {item.profit_loss_percentage} %
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                {item.profit_loss_percentage >= -15 &&
                item.profit_loss_percentage <= 15 ? (
                  <Badge className="bg-orange-100 py-1 px-5 rounded-lg ">
                    Hold
                  </Badge>
                ) : item.profit_loss_percentage > 50 ||
                  item.profit_loss_percentage < -30 ? (
                  <Badge className="bg-red-100 py-1 px-5 rounded-lg ">
                    Sell
                  </Badge>
                ) : (
                  <Badge className="bg-green-100 py-1 px-5 rounded-lg ">
                    Buy
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
