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
                  <Badge className="bg-green-100 py-1 px-2 rounded-lg mx-3">
                    {item.profit_loss_percentage} %
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 py-1 px-2 rounded-lg mx-3">
                    {item.profit_loss_percentage} %
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
