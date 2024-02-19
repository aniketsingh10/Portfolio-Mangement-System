import React, { useEffect, useState } from "react";
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
  Flex,
} from "@tremor/react";
import { Header } from "../../components/Header/Header";
import { HorizontalScroller } from "../../components/HorizontalScroller";
import { ThreeDots } from "react-loader-spinner";


export function Indices() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ipoData, setIpoData] = useState(null);
  const [gainerData, setGainerData] = useState(null);
  const [losersData, setLosersData] = useState(null);
  const [indicesData, setIndicesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  // For IPO Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/scrapper/ipodata");

        if (response.ok) {
          const data = await response.json();
          setIpoData(data);
        } else {
          console.error(
            "Failed to fetch data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during data fetch:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/scrapper/gainers");

        if (response.ok) {
          const data = await response.json();
          // console.log("Fetched Data:", data);
          setGainerData(data);
        } else {
          console.error(
            "Failed to fetch data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during data fetch:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/scrapper/losers");

        if (response.ok) {
          const data = await response.json();
          setLosersData(data);
        } else {
          console.error(
            "Failed to fetch data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during data fetch:", error);
      }
    };

    fetchData();
  }, []);

  // Indices api call
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:8000/scrapper/indices");
        const data = await response.json();

        setIndicesData(data.indices);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center absolute inset-0 bg-gray-800 bg-opacity-50">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="rgb(59 130 246)"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <Header />
      <HorizontalScroller />
      <Card className="shadow-lg">
        <Title className="mx-4">Major Global Indices</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Open</TableHeaderCell>
              <TableHeaderCell>High</TableHeaderCell>
              <TableHeaderCell>Low</TableHeaderCell>
              <TableHeaderCell>Percent Change</TableHeaderCell>
              <TableHeaderCell>Change</TableHeaderCell>
              <TableHeaderCell>Tech Rating</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {indicesData?.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Text>{item.price}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.high}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.low}</Text>
                </TableCell>
                <TableCell>
                  <Badge
                    className="py-1 px-2 rounded-lg"
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
                    className="py-1 px-2 rounded-lg "
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
                  <Text>{item.tech_rating}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="flex mb-10">
        <Card className="mt-4 shadow-lg w-1/2">
          <Title className="mx-4">Latest IPOs and GMP</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>IPO Name</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>GMP</TableHeaderCell>
                <TableHeaderCell>Price</TableHeaderCell>
                <TableHeaderCell>Gain</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ipoData?.IPOs.map((item) => (
                <TableRow key={item.Name}>
                  <TableCell>{item.Name}</TableCell>
                  <TableCell>
                    <Text>{item.Date}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.IPOGMP}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.IPOPrice}</Text>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className="py-1 px-2 rounded-lg"
                      style={{
                        backgroundColor:
                          item.percentChange < 0
                            ? "rgba(255, 0, 0, 0.2)"
                            : "rgba(0, 255, 0, 0.2)",
                      }}
                    >
                      <Text>{item.Gain}</Text>
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="mt-4 shadow-lg w-1/2">
          <Flex className="">
            <Title className="flex mx-4">
              Market Movers
              <div className="ml-60 justify-around">
                <div className="flex">
                  <div
                    className={`"hover:scale-105 ease-in-out duration-300 ml-4 cursor-pointer ${
                      selectedIndex === 0 ? "font-bold" : ""
                    }`}
                    onClick={() => handleIndexChange(0)}
                  >
                    Gainers
                  </div>
                  <div
                    className={`hover:scale-105 ease-in-out duration-300 ml-6 cursor-pointer ${
                      selectedIndex === 1 ? "font-bold" : ""
                    }`}
                    onClick={() => handleIndexChange(1)}
                  >
                    Losers
                  </div>
                </div>
              </div>
            </Title>
          </Flex>
          {selectedIndex === 0 ? (
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Company</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Change</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gainerData?.gainers.map((item) => (
                  <TableRow key={item.Name}>
                    <TableCell>{item.Name}</TableCell>
                    <TableCell>
                      <Text>{item.Price}</Text>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className="py-1 px-2 rounded-lg"
                        style={{
                          backgroundColor:
                            item.percentChange < 0
                              ? "rgba(255, 0, 0, 0.2)"
                              : "rgba(0, 255, 0, 0.2)",
                        }}
                      >
                        <Text>{item.Change}</Text>
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Company</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Change</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {losersData?.losers.map((item) => (
                  <TableRow key={item.Name}>
                    <TableCell>{item.Name}</TableCell>
                    <TableCell>
                      <Text>{item.Price}</Text>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className="py-1 px-2 rounded-lg"
                        style={{
                          backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                      >
                        <Text>{item.Change}</Text>
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Card>
      </div>
    </div>
  );
}
