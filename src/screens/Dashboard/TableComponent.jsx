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
    Role: "20",
    departement: "2432",
    status: "15.36 %",
  },
  {
    name: "Reliance Ltd.",
    Role: "20",
    departement: "2451",
    status: "15.36 %",
  },
  {
    name: "Reliance Ltd.",
    Role: "20",
    departement: "2290",
    status: "15.36 %",
  },
  {
    name: "Reliance Ltd.",
    Role: "20",
    departement: "2010",
    status: "15.36 %",
  },
  {
    name: "Reliance Ltd.",
    Role: "20",
    departement: "2340",
    status: "15.36 %",
  },
  {
    name: "Reliance Ltd.",
    Role: "20",
    departement: "2618",
    status: "15.36 %",
  },
  {
    name: "Reliance Ltd.",
    Role: "20",
    departement: "1200",
    status: "15.36 %",
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
            <TableHeaderCell>Average Price</TableHeaderCell>
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
