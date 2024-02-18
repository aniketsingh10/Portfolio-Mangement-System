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

export function Indices() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ipoData, setIpoData] = useState(null);
  const [gainerData, setGainerData] = useState(null);
  const [losersData, setLosersData] = useState(null);
  const [indicesData, setIndicesData] = useState(null);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
    // Additional logic if needed based on the selected index
  };

  // For IPO Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/scrapper/ipodata");

        if (response.ok) {
          const data = await response.json();
          // console.log("Fetched Data:", data);
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
  //console.log("Api data ipo", ipoData);

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
  //console.log("Api data", gainerData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/scrapper/losers");

        if (response.ok) {
          const data = await response.json();
          // console.log("Fetched Data:", data);
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
  //console.log("losers", losersData);

  // Indices api call

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request
        const response = await fetch("http://127.0.0.1:8000/scrapper/indices");
        const data = await response.json();

        // Set the fetched data in the state
        setIndicesData(data.indices);
        //setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        //setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // The empty dependency array ensures that the useEffect runs only once when the component mounts
  console.log(indicesData);

  return (
    <div>
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
