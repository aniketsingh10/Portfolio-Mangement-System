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

const data = [
  {
    name: "Reliance Ltd.",
    Role: "Federal Councillor",
    departement: "The Federal Department ",
    status: "active",
  },
  {
    name: "Reliance Ltd.",
    Role: "Federal Councillor",
    departement: "The Federal Department ",
    status: "active",
  },
  {
    name: "Reliance Ltd.",
    Role: "Federal Councillor",
    departement: "The Federal Department ",
    status: "active",
  },
  {
    name: "Reliance Ltd.",
    Role: "Federal Councillor",
    departement: "The Federal Department ",
    status: "active",
  },
  {
    name: "Reliance Ltd.",
    Role: "Federal Councillor",
    departement: "The Federal Department ",
    status: "active",
  },
  {
    name: "Reliance Ltd.",
    Role: "Federal Councillor",
    departement: "The Federal Department of Economic ",
    status: "active",
  },
  {
    name: "Reliance Ltd.",
    Role: "Federal Councillor",
    departement: "The Federal Department ",
    status: "active",
  },
];

const TableComponent = () => {
  return (
    <Card className="mt-4 shadow-lg">
      <Title>List of Stocks Holding in Portfolio</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Shares</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Profit/Loss</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.departement}</Text>
              </TableCell>
              <TableCell>
                <Badge className="bg-green-100 py-1 px-2 rounded-lg mx-3">
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
