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
import { Header } from "../../components/Header/Header";

var data = require("../../assets/data/indices.json");

export function Indices() {
  console.log(data);
  return (
    <div>
      <Header />
      <Card className="mt-4 shadow-lg">
        <Title>List of Major Global Indices</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Open</TableHeaderCell>
              <TableHeaderCell>High</TableHeaderCell>
              <TableHeaderCell>Low</TableHeaderCell>
              <TableHeaderCell>Percent Change</TableHeaderCell>
              <TableHeaderCell>Change</TableHeaderCell>
              <TableHeaderCell>Time</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.indices.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Text>{item.open}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.high}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.low}</Text>
                </TableCell>
                <TableCell>
                  <Badge
                    className="py-1 px-2 rounded-lg mx-3"
                    style={{
                      backgroundColor:
                        item.percentChange < 0
                          ? "rgba(255, 0, 0, 0.2)"
                          : "rgba(0, 255, 0, 0.2)",
                    }}
                  >
                    <Text>{item.percentChange} %</Text>
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className="py-1 px-2 rounded-lg mx-3"
                    style={{
                      backgroundColor:
                        item.percentChange < 0
                          ? "rgba(255, 0, 0, 0.2)"
                          : "rgba(0, 255, 0, 0.2)",
                    }}
                  >
                    <Text>{item.change}</Text>
                  </Badge>
                </TableCell>
                <TableCell>
                  <Text>{item.time}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
