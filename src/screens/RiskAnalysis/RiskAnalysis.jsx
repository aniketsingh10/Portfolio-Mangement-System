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
  const [rating, setRating] = useState(null);

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
        setRating(parsedData.data.risk_rating);
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
          PMS Health Analysis
        </p>

        <div className="flex text-center mx-auto">
          <div
            className="font-bold p-2 text-xl"
            style={{
              color: "rgb(59 130 246)",
            }}
          >
            Analyze your health with our proven strategic model over various
            aspects.
          </div>
        </div>
        {rating?
        <div className="flex text-center mx-auto mt-4  rounded-lg">
          <ReactSpeedometer
            width={500}
            needleHeightRatio={0.7}
            value={1000-rating}
            currentValueText="Portfolio Health"
            customSegmentLabels={[
              {
                text: "Very Bad",
                position: "INSIDE",
                color: "rgb(0,0,0)",
              },
              {
                text: "Bad",
                position: "INSIDE",
                color: "rgb(0,0,0)",
              },
              {
                text: "Ok",
                position: "INSIDE",
                color: "rgb(0,0,0)",
                font:"17"
              },
              {
                text: "Good",
                position: "INSIDE",
                color: "rgb(0,0,0)",
              },
              {
                text: "Very Good",
                position: "INSIDE",
                color: "rgb(0,0,0)",
              },
            ]}
            ringWidth={47}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            needleColor={"#90f2ff"}
            textColor={"rgba(0,0,0,1)"}
          />
        </div>:(null)}
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
                    {portfolioData[0].level === "low" && (
                      <>
                        Low PE ratios indicate undervaluation or stable
                        earnings, presenting lower investment risk.
                      </>
                    )}
                    {portfolioData[0].level === "mid" && (
                      <>
                        Moderate PE ratios reflect average market valuation and
                        moderate investment risk.
                      </>
                    )}
                    {portfolioData[0].level === "high" && (
                      <>
                        High PE ratios could indicate overvaluation or high
                        growth expectations, leading to increased investment
                        risk.
                      </>
                    )}

                    <p>
                      There are {portfolioData[0].percentage}% stocks in your
                      portfolio with a {portfolioData[0].level} PE score.
                      <p className="underline text-primary italic">know more</p>
                    </p>
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
                    {portfolioData[1].level === "low" && (
                      <>Low debt-to-equity indicates financial stability.</>
                    )}
                    {portfolioData[1].level === "mid" && (
                      <>
                        Moderate debt-to-equity signifies balanced leverage and
                        manageable risk.
                      </>
                    )}
                    {portfolioData[1].level === "high" && (
                      <>
                        High debt-to-equity suggests high financial leverage and
                        increased risk to buy stocks.
                      </>
                    )}

                    <p>
                      There are {portfolioData[1].percentage}% stocks in your
                      portfolio with a {portfolioData[1].level} Debt to Equity
                      score.
                      <p className="underline text-primary italic">know more</p>
                    </p>
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
                          ? "bg-green-100"
                          : portfolioData[3].level === "mid"
                          ? "bg-orange-100"
                          : "bg-red-100"
                      }
                      ${
                        portfolioData[3].level === "low"
                          ? "text-green-900"
                          : portfolioData[3].level === "mid"
                          ? "text-orange-900"
                          : "text-red-900"
                      }
                      
                      `}
                    >
                      {portfolioData[3].level}
                    </div>
                  </Flex>
                  <Metric className="text-base mt-3">
                    {portfolioData[3].level === "low" && (
                      <>
                        Steady, moderate profit growth signifies stable business
                        performance and lower risk.
                      </>
                    )}
                    {portfolioData[3].level === "mid" && (
                      <>
                        Moderate profit growth reflects average market
                        conditions and moderate business risk.
                      </>
                    )}
                    {portfolioData[3].level === "high" && (
                      <>
                        Volatile or declining profit growth indicates market
                        uncertainty or operational challenges, presenting higher
                        risk.
                      </>
                    )}

                    <p>
                      There are {portfolioData[3].percentage}% stocks in your
                      portfolio with a {portfolioData[3].level} risk in Profit Growth.
                      <p className="underline text-primary italic">know more</p>
                    </p>
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
                    {portfolioData[4].level === "low" && (
                      <>
                        Consistent, moderate sales growth suggests stable
                        business performance and lower risk.
                      </>
                    )}
                    {portfolioData[4].level === "mid" && (
                      <>
                        Moderate sales growth indicates average market demand
                        and moderate business risk.
                      </>
                    )}
                    {portfolioData[4].level === "high" && (
                      <>
                        Rapid or erratic sales growth may indicate market
                        volatility or unsustainable business practices, posing
                        higher risk.
                      </>
                    )}

                    <p>
                      There are {portfolioData[4].percentage}% stocks in your
                      portfolio with a {portfolioData[4].level} Sales Growth.
                      <p className="underline text-primary italic">know more</p>
                    </p>
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
                  {portfolioData[2].level === "low" && (
                    <>
                      Low beta stocks tend to be less volatile and are perceived
                      as lower risk investments.
                    </>
                  )}
                  {portfolioData[2].level === "mid" && (
                    <>
                      Moderate beta indicates average market volatility and
                      moderate investment risk.
                    </>
                  )}
                  {portfolioData[2].level === "high" && (
                    <>
                      High beta stocks are more volatile, presenting higher
                      investment risk but potentially higher returns
                    </>
                  )}

                  <p>
                    There are {portfolioData[2].percentage}% stocks in your
                    portfolio with a {portfolioData[2].level} Beta score.
                    <p className="underline text-primary italic">know more</p>
                  </p>
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
