import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Card, Text, Flex, Metric } from "@tremor/react";
import Logo from "./../../assets/images/logo.svg";

export function CuratedPortfolio() {
  const [isHiddenVisibleOne, setIsHiddenVisibleOne] = useState(false);
  const [isHiddenVisibleTwo, setIsHiddenVisibleTwo] = useState(false);

  const handleCardClickOne = () => {
    setIsHiddenVisibleOne(!isHiddenVisibleOne);
  };
  const handleCardClickTwo = () => {
    setIsHiddenVisibleTwo(!isHiddenVisibleTwo);
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
                <div className="flex flex-col w-[60%]">
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
                <Text className="font-bold text-xl">
                  Alpha Blend - Market Leaders
                </Text>

                <div className="bg-red-100 px-6 py-1 rounded-lg text-red-900 font-bold">
                  High Volatility
                </div>
              </Flex>
              <Metric className="text-base mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum eius cumque dolore voluptates dolorum repellendus
                aspernatur magni sapiente voluptate nam.
              </Metric>

              <div className="flex justify-between w-[50%] mt-3">
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    Min Amount
                  </p>
                  <p className="  rounded-lg  font-bold mx-3 ">Rs. 12000</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    4M Returns
                  </p>
                  <p className=" text-green-900 font-bold mx-5">54.58 %</p>
                </div>
                <div>
                  <p className="  rounded-lg text-primary font-bold mx-2 ">
                    No. of Stocks
                  </p>
                  <p className="  rounded-lg  font-bold mx-10 ">12</p>
                </div>
              </div>

              <div
                style={{
                  display: isHiddenVisibleTwo ? "block" : "none",
                }}
                className="mt-4 ease-in-out duration-500 transition delay-500"
              >
                <div className="border mt-4"></div>
                <div className="flex flex-col w-[60%]">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-1 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-base">
                          <thead className="border-b font-lg dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-1">
                                First
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Last
                              </th>
                              <th scope="col" className="px-6 py-1">
                                Handle
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-medium text-black">
                            <tr className=" text-base">
                              <td className="whitespace-nowrap px-6 py-1">
                                Mark
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Otto
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                @mdo
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Jacob
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Thornton
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                @fat
                              </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-1">
                                Larry
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                Wild
                              </td>
                              <td className="whitespace-nowrap px-6 py-1">
                                @twitter
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
