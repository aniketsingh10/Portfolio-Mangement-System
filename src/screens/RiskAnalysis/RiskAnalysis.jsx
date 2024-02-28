import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import ReactSpeedometer from "react-d3-speedometer";
import { Card, Text, Flex, Metric } from "@tremor/react";
import Logo from "./../../assets/images/logo.svg";

export function RiskAnalysis() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isHiddenVisibleOne, setIsHiddenVisibleOne] = useState(false);
  const [isHiddenVisibleTwo, setIsHiddenVisibleTwo] = useState(false);
  const [isHiddenVisibleThree, setIsHiddenVisibleThree] = useState(false);
  const [isHiddenVisibleFour, setIsHiddenVisibleFour] = useState(false);
  const [isHiddenVisibleFive, setIsHiddenVisibleFive] = useState(false);

  const handleCardClickOne = () => {
    setIsHiddenVisibleOne(!isHiddenVisibleOne);
  };
  const handleCardClickTwo = () => {
    setIsHiddenVisibleTwo(!isHiddenVisibleTwo);
  };
  const handleCardClickThree = () => {
    setIsHiddenVisibleThree(!isHiddenVisibleThree);
  };
  const handleCardClickFour = () => {
    setIsHiddenVisibleFour(!isHiddenVisibleFour);
  };
  const handleCardClickFive = () => {
    setIsHiddenVisibleFive(!isHiddenVisibleFive);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setPortfolioData(parsedData.data.risk_analysis);
      } catch (error) {
        console.error("Error parsing storedData:", error);
      }
    }
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-[90%] w-full mx-auto text-center flex flex-col justify-center pt-10 mb-20">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          PMS Risk Analysis
        </p>

        <div className="flex text-center mx-auto">
          <div
            className="font-bold p-2 text-xl"
            style={{
              color: "rgb(59 130 246)",
            }}
          >
            Analyze your risk with our proven strategic model over various
            aspects.
          </div>
        </div>
        <div className="flex text-center mx-auto mt-4  rounded-lg">
          <ReactSpeedometer
            width={500}
            needleHeightRatio={0.7}
            value={777}
            currentValueText="Portfolio Performance"
            customSegmentLabels={[
              {
                text: "Very Bad",
                position: "INSIDE",
                color: "#555",
              },
              {
                text: "Bad",
                position: "INSIDE",
                color: "#555",
              },
              {
                text: "Ok",
                position: "INSIDE",
                color: "#555",
                fontSize: "19px",
              },
              {
                text: "Good",
                position: "INSIDE",
                color: "#555",
              },
              {
                text: "Very Good",
                position: "INSIDE",
                color: "#555",
              },
            ]}
            ringWidth={47}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            needleColor={"#90f2ff"}
            textColor={"rgba(0,0,0,1)"}
          />
        </div>
        {portfolioData ? (
          <div className="mt-4">
            <div className="flex flex-col lg:flex-row gap-8 mt-4">
              <div className="w-[50%]">
                <Card
                  className="w-xs shadow-lg rounded-lg"
                  decoration="top"
                  decorationColor="indigo"
                  onClick={handleCardClickOne}
                >
                  <div
                    className=" mb-2 flex h-[65px] w-[65px] items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: "rgb(59 130 246)",
                    }}
                  >
                    <img src={Logo} alt="Logo" />
                  </div>
                  <Flex justifyContent="between" alignItems="center">
                    <Text className="font-bold text-xl">PE Analysis</Text>

                    <div
                      className={`px-6 py-1 rounded-lg font-bold capitalize 
                      ${
                        portfolioData[0].level === "low"
                          ? "bg-green-100"
                          : portfolioData[0].level === "mid"
                          ? "bg-orange-100"
                          : "bg-red-100"
                      }
                      ${
                        portfolioData[0].level === "low"
                          ? "text-green-900"
                          : portfolioData[0].level === "mid"
                          ? "text-orange-900"
                          : "text-red-900"
                      }
                      
                      `}
                    >
                      {portfolioData[0].level}
                    </div>
                  </Flex>
                  <Metric className="text-base mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet nostrum odit, quidem tenetur sunt iusto eveniet
                    doloribus perferendis assumenda voluptates?
                  </Metric>
                  <div
                    style={{
                      display: isHiddenVisibleOne ? "block" : "none",
                    }}
                    className="mt-4 ease-in-out duration-500 transition delay-500"
                  >
                    <div className="border mt-4"></div>
                    <div className="flex flex-col w-[100%]">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-left text-base">
                              <thead className="border-b font-lg dark:border-neutral-500">
                                <tr>
                                  <th scope="col" className="px-6 py-1">
                                    Name
                                  </th>
                                  <th scope="col" className="px-6 py-1">
                                    PE Value
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-medium text-black">
                                {portfolioData[0]?.stock.map((item) => (
                                  <tr className=" text-base">
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.name}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.value}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-[50%]">
                <Card
                  className="w-xs shadow-lg rounded-lg"
                  decoration="top"
                  decorationColor="indigo"
                  onClick={handleCardClickTwo}
                >
                  <div
                    className=" mb-2 flex h-[65px] w-[65px] items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: "rgb(59 130 246)",
                    }}
                  >
                    <img src={Logo} alt="Logo" />
                  </div>
                  <Flex justifyContent="between" alignItems="center">
                    <Text className="font-bold text-xl">
                      Debt to Equity Analysis
                    </Text>
                    <div
                      className={`px-6 py-1 rounded-lg font-bold capitalize 
                 ${
                   portfolioData[1].level === "low"
                     ? "bg-green-100"
                     : portfolioData[1].level === "mid"
                     ? "bg-orange-100"
                     : "bg-red-100"
                 }
                 ${
                   portfolioData[1].level === "low"
                     ? "text-green-900"
                     : portfolioData[1].level === "mid"
                     ? "text-orange-900"
                     : "text-red-900"
                 }
                 
                 `}
                    >
                      {portfolioData[1].level}
                    </div>
                  </Flex>
                  <Metric className="text-base mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet nostrum odit, quidem tenetur sunt iusto eveniet
                    doloribus perferendis assumenda voluptates?
                  </Metric>
                  <div
                    style={{
                      display: isHiddenVisibleTwo ? "block" : "none",
                    }}
                    className="mt-4 ease-in-out duration-500 transition delay-500"
                  >
                    <div className="border mt-4"></div>
                    <div className="flex flex-col w-[100%]">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-left text-base">
                              <thead className="border-b font-lg dark:border-neutral-500">
                                <tr>
                                  <th scope="col" className="px-6 py-1">
                                    Name
                                  </th>
                                  <th scope="col" className="px-6 py-1">
                                    Debt to Equity
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-medium text-black">
                                {portfolioData[1]?.stock.map((item) => (
                                  <tr className=" text-base">
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.name}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.value}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full mt-8">
              <div className="w-[50%]">
                <Card
                  className="w-xs shadow-lg rounded-lg"
                  decoration="top"
                  decorationColor="indigo"
                  onClick={handleCardClickThree}
                >
                  <div
                    className=" mb-2 flex h-[65px] w-[65px] items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: "rgb(59 130 246)",
                    }}
                  >
                    <img src={Logo} alt="Logo" />
                  </div>
                  <Flex justifyContent="between" alignItems="center">
                    <Text className="font-bold text-xl">
                      Profit Growth Analysis
                    </Text>

                    <div
                      className={`px-6 py-1 rounded-lg font-bold capitalize 
                      ${
                        portfolioData[3].level === "low"
                          ? "bg-red-100"
                          : portfolioData[3].level === "mid"
                          ? "bg-orange-100"
                          : "bg-green-100"
                      }
                      ${
                        portfolioData[3].level === "low"
                          ? "text-red-900"
                          : portfolioData[3].level === "mid"
                          ? "text-orange-900"
                          : "text-green-900"
                      }
                      
                      `}
                    >
                      {portfolioData[3].level}
                    </div>
                  </Flex>
                  <Metric className="text-base mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet nostrum odit, quidem tenetur sunt iusto eveniet
                    doloribus perferendis assumenda voluptates?
                  </Metric>
                  <div
                    style={{
                      display: isHiddenVisibleThree ? "block" : "none",
                    }}
                    className="mt-4 ease-in-out duration-500 transition delay-500"
                  >
                    <div className="border mt-4"></div>
                    <div className="flex flex-col w-[100%]">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-left text-base">
                              <thead className="border-b font-lg dark:border-neutral-500">
                                <tr>
                                  <th scope="col" className="px-6 py-1">
                                    Name
                                  </th>
                                  <th scope="col" className="px-6 py-1">
                                    Profit Growth
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-medium text-black">
                                {portfolioData[3]?.stock.map((item) => (
                                  <tr className=" text-base">
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.name}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.value} %
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="w-[50%]">
                <Card
                  className="w-xs shadow-lg rounded-lg"
                  decoration="top"
                  decorationColor="indigo"
                  onClick={handleCardClickFour}
                >
                  <div
                    className=" mb-2 flex h-[65px] w-[65px] items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: "rgb(59 130 246)",
                    }}
                  >
                    <img src={Logo} alt="Logo" />
                  </div>
                  <Flex justifyContent="between" alignItems="center">
                    <Text className="font-bold text-xl">
                      Sales Growth Analysis
                    </Text>

                    <div
                      className={`px-6 py-1 rounded-lg font-bold capitalize 
                      ${
                        portfolioData[4].level === "low"
                          ? "bg-red-100"
                          : portfolioData[4].level === "mid"
                          ? "bg-orange-100"
                          : "bg-green-100"
                      }
                      ${
                        portfolioData[4].level === "low"
                          ? "text-red-900"
                          : portfolioData[4].level === "mid"
                          ? "text-orange-900"
                          : "text-green-900"
                      }
                      
                      `}
                    >
                      {portfolioData[4].level}
                    </div>
                  </Flex>
                  <Metric className="text-base mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet nostrum odit, quidem tenetur sunt iusto eveniet
                    doloribus perferendis assumenda voluptates?
                  </Metric>
                  <div
                    style={{
                      display: isHiddenVisibleFour ? "block" : "none",
                    }}
                    className="mt-4 ease-in-out duration-500 transition delay-500"
                  >
                    <div className="border mt-4"></div>
                    <div className="flex flex-col w-[100%]">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-left text-base ">
                              <thead className="border-b font-lg dark:border-neutral-500">
                                <tr>
                                  <th scope="col" className="px-6 py-1">
                                    Name
                                  </th>
                                  <th scope="col" className="px-6 py-1">
                                    Sales Growth
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-medium text-black">
                                {portfolioData[4]?.stock.map((item) => (
                                  <tr className=" text-base">
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.name}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-1">
                                      {item.value} %
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full mt-8">
              <Card
                className="w-xs shadow-lg rounded-lg"
                decoration="top"
                decorationColor="indigo"
                onClick={handleCardClickFive}
              >
                <div
                  className=" mb-2 flex h-[65px] w-[65px] items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "rgb(59 130 246)",
                  }}
                >
                  <img src={Logo} alt="Logo" />
                </div>
                <Flex justifyContent="between" alignItems="center">
                  <Text className="font-bold text-xl">Beta Analysis</Text>

                  <div
                    className={`px-6 py-1 rounded-lg font-bold capitalize 
                      ${
                        portfolioData[2].level === "low"
                          ? "bg-green-100"
                          : portfolioData[2].level === "mid"
                          ? "bg-orange-100"
                          : "bg-red-100"
                      }
                      ${
                        portfolioData[2].level === "low"
                          ? "text-green-900"
                          : portfolioData[2].level === "mid"
                          ? "text-orange-900"
                          : "text-red-900"
                      }
                      
                      `}
                  >
                    {portfolioData[2].level}
                  </div>
                </Flex>
                <Metric className="text-base mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  nostrum odit, quidem tenetur sunt iusto eveniet doloribus
                  perferendis assumenda voluptates?
                </Metric>
                <div
                  style={{
                    display: isHiddenVisibleFive ? "block" : "none",
                  }}
                  className="mt-4 ease-in-out duration-500 transition delay-500"
                >
                  <div className="border mt-4"></div>
                  <div className="flex flex-col w-[50%]">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full text-left text-base">
                            <thead className="border-b font-lg dark:border-neutral-500">
                              <tr>
                                <th scope="col" className="px-6 py-1">
                                  Name
                                </th>
                                <th scope="col" className="px-6 py-1">
                                  Beta Value
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-medium text-black">
                              {portfolioData[2]?.stock.map((item) => (
                                <tr className=" text-base">
                                  <td className="whitespace-nowrap px-6 py-1">
                                    {item.name}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-1">
                                    {item.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
