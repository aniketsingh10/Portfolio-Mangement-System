import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Card, Text, Flex, Metric } from "@tremor/react";
import Logo from "./../../assets/images/logo.svg";

export function CuratedPortfolio() {
  const [isHiddenVisibleOne, setIsHiddenVisibleOne] = useState(false);
  const [isHiddenVisibleTwo, setIsHiddenVisibleTwo] = useState(false);
  const [isHiddenVisibleThree, setIsHiddenVisibleThree] = useState(false);
  const [isHiddenVisibleFourth, setIsHiddenVisibleFourth] = useState(false);

  const handleCardClickOne = () => {
    setIsHiddenVisibleOne(!isHiddenVisibleOne);
  };
  const handleCardClickTwo = () => {
    setIsHiddenVisibleTwo(!isHiddenVisibleTwo);
  };
  const handleCardClickThree = () => {
    setIsHiddenVisibleThree(!isHiddenVisibleThree);
  };
  const handleCardClickFourth = () => {
    setIsHiddenVisibleFourth(!isHiddenVisibleFourth);
  };
  return (
    <div>
      <Header />

      <div className="max-w-[90%] w-full mx-auto text-center flex flex-col justify-center pt-10 mb-20 cursor-pointer">
        <div className="flex text-center mx-auto">
          <div
            className="font-bold p-2 text-xl"
            style={{
              color: "rgb(59 130 246)",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            perspiciatis. Cumque eaque velit in voluptate.
          </div>
        </div>

        <div className="mt-4">
          {/* First Portfolio */}
          <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">
            <Card
              className="w-xs shadow-lg rounded-lg"
              decoration="top"
              decorationColor="indigo"
              onClick={handleCardClickOne}
            >
              <div
                className=" mb-2 flex h-[65px] w-[65px]  items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "rgb(59 130 246)",
                }}
              >
                <img src={Logo} alt="Logo" />
              </div>
              <Flex justifyContent="between" alignItems="center">
                <Text className="font-bold text-xl">
                  The Great Indian Middle Class
                </Text>

                <div className="bg-orange-100 px-6 py-1 rounded-lg text-orange-900 font-bold">
                  Medium Volatility
                </div>
              </Flex>
              <Metric className="text-base mt-3">
                Companies focused on the growing middle class. Running India's
                consumption engine.
              </Metric>

              <div className="flex justify-between w-[50%] mt-3">
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    Min Amount
                  </p>
                  <p className="  rounded-lg  font-bold mx-3 ">Rs. 48,951</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    8Y CAGR
                  </p>
                  <p className=" text-green-900 font-bold mx-5">16.35 %</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    No. of Stocks
                  </p>
                  <p className="  rounded-lg  font-bold mx-10 ">9</p>
                </div>
              </div>

              <div
                style={{
                  display: isHiddenVisibleOne ? "block" : "none",
                }}
                className="mt-4 ease-in-out duration-500 transition delay-500"
              >
                <div className="border mt-4"></div>
                <div className="flex flex-col w-[80%]">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-base">
                          <thead className="border-b font-lg dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-1">
                                Stock
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Segment
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Weightage (%)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-medium text-black">
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Varun Beverages Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Beverages
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                8.36%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Titan Company Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Precious Metals, Jewellery
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                12.50%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Tata Consumer Products Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Household products
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                11.69%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Hindustan Unilever Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Household products
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                14.86%
                              </td>
                            </tr>

                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Vedant Fashions Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Fashion Retail
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                11.09%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Jubilant Foodworks Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Restaurants
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                9.71%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Interglobe Aviation Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Airlines
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                9.61%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Hero MotoCorp Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Two Wheelers
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                9%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Asian Paints Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Paints
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                13.17%
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Second Portfolio */}
          <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">
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
                <Text className="font-bold text-xl">Rising Rural Demand</Text>

                <div className="bg-orange-100 px-6 py-1 rounded-lg text-orange-900 font-bold">
                  Medium Volatility
                </div>
              </Flex>
              <Metric className="text-base mt-3">
                Companies that stand to benefit from increasing rural
                consumption.
              </Metric>

              <div className="flex justify-between w-[50%] mt-3">
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    Min Amount
                  </p>
                  <p className="  rounded-lg  font-bold mx-3 ">Rs. 69415</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    8Y CAGR
                  </p>
                  <p className=" text-green-900 font-bold mx-5">54.58 %</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    No. of Stocks
                  </p>
                  <p className="  rounded-lg  font-bold mx-10 ">16</p>
                </div>
              </div>

              <div
                style={{
                  display: isHiddenVisibleTwo ? "block" : "none",
                }}
                className="mt-4 ease-in-out duration-500 transition delay-500"
              >
                <div className="border mt-4"></div>
                <div className="flex flex-col w-[80%]">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-base">
                          <thead className="border-b font-lg dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-1">
                                Stock
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Segment
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Weightage (%)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-medium text-black">
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Varun Beverages Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Beverages
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                5.83%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                SBI Life Insurance Company Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Insurance
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                7.59%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Prince Pipes and Fittings Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Building Products
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                5.91%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Mahindra and Mahindra Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Tractors
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.09%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                ITC Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Tobacco
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                9.27%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Hindustan Uniliver Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                FMCG
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                9.91%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Hero MotoCorp Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Two Wheelers
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.42%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Five-Star Business Finance Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Consumer Finance
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                4.50%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                CreditAccess Grameen Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Consumer Finance
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.17%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Cholamandalam Investment and Finance Company Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Consumer Finance
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.12%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Dhanuka Agritech Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Seed & Fertilizers
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.98%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Coromandel International Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Seed & Fertilizers
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.62%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Dalmia Bharat Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Cement
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                4.71%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Birla Corporation Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Cement
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                4.77%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Bajaj Electricals Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Home Electronics
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                8.20%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Bajaj Projects Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Infrastructure Developers & Operators
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                0.85%
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* Third Portfolio */}
          <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">
            <Card
              className="w-xs shadow-lg rounded-lg"
              decoration="top"
              decorationColor="indigo"
              onClick={handleCardClickThree}
            >
              <div
                className=" mb-2 flex h-[65px] w-[65px]  items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "rgb(59 130 246)",
                }}
              >
                <img src={Logo} alt="Logo" />
              </div>
              <Flex justifyContent="between" alignItems="center">
                <Text className="font-bold text-xl">IT Tracker</Text>

                <div className="bg-red-100 px-6 py-1 rounded-lg text-red-900 font-bold">
                  High Volatility
                </div>
              </Flex>
              <Metric className="text-base mt-3">
                Companies to efficiently track and invest in the IT sector.
              </Metric>

              <div className="flex justify-between w-[50%] mt-3">
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    Min Amount
                  </p>
                  <p className="  rounded-lg  font-bold mx-3 ">Rs. 1,02,156</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    8Y CAGR
                  </p>
                  <p className=" text-green-900 font-bold mx-5">25.09 %</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    No. of Stocks
                  </p>
                  <p className="  rounded-lg  font-bold mx-10 ">9</p>
                </div>
              </div>

              <div
                style={{
                  display: isHiddenVisibleThree ? "block" : "none",
                }}
                className="mt-4 ease-in-out duration-500 transition delay-500"
              >
                <div className="border mt-4"></div>
                <div className="flex flex-col w-[80%]">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-base">
                          <thead className="border-b font-lg dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-1">
                                Stock
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Segment
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Weightage (%)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-medium text-black">
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Tata Consultancy Services Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                IT Consulting & Other Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                14.06%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Persistent Systems Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                IT Consulting & Other Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                8.13%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Mphasis Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                IT Consulting & Other Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                9.63%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                LTIMindtree Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                IT Consulting & Other Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                9.38%
                              </td>
                            </tr>

                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Infosys Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                IT Consulting & Other Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                10.03%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                HCL Technologies Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                IT Consulting & Other Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                12.78%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Coforge Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                IT Consulting & Other Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                8.44%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Oracle Financial Services Software Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Software Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                16.37%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                KPIT Technologies Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Software Services
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                11.16%
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* Fourth Portfolio */}
          <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">
            <Card
              className="w-xs shadow-lg rounded-lg"
              decoration="top"
              decorationColor="indigo"
              onClick={handleCardClickFourth}
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
                <Text className="font-bold text-xl">Growth & Income</Text>

                <div className="bg-orange-100 px-6 py-1 rounded-lg text-orange-900 font-bold">
                  Medium Volatility
                </div>
              </Flex>
              <Metric className="text-base mt-3">
                Efficiently managed dividend paying companies screened using
                Kevin Matras' criteria.
              </Metric>

              <div className="flex justify-between w-[50%] mt-3">
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    Min Amount
                  </p>
                  <p className="  rounded-lg  font-bold mx-3 ">Rs. 90716</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    7Y CAGR
                  </p>
                  <p className=" text-green-900 font-bold mx-5">24.86 %</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    No. of Stocks
                  </p>
                  <p className="  rounded-lg  font-bold mx-10 ">15</p>
                </div>
              </div>

              <div
                style={{
                  display: isHiddenVisibleFourth ? "block" : "none",
                }}
                className="mt-4 ease-in-out duration-500 transition delay-500"
              >
                <div className="border mt-4"></div>
                <div className="flex flex-col w-[80%]">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-base">
                          <thead className="border-b font-lg dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-1">
                                Stock
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Segment
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Weightage (%)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-medium text-black">
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                West Coast Paper Mills Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Paper Products
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Wonderla Holidays Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Theme Parks & Gaming
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Torrent Power Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                ower Transmission & Distribution
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Ramkrishna Forgings Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Rail
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Narayana Hrudayalaya Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Hospitals & Diagnostic Centres
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Maharashtra Seamless Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Building Products - Pipes
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                LT Foods Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Packaged Foods & Meats
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Laurus Labs Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Pharmaceuticals
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Granules India Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Pharmaceuticals
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Kirloskar Brothers Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Industrial Machinery
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Craftsman Automation Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Industrial Machinery
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                JK Lakshmi Cement Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Cement
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Gujarat State Petronet Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Gas Distribution
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                GHCL Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Commodity Chemicals
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Apar Industries Ltd
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Electrical Components & Equipments
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                6.67%
                              </td>
                            </tr>
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
      </div>
    </div>
  );
}
