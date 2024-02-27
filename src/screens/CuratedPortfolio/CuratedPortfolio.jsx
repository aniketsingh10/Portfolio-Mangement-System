import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Card, Text, Flex, Metric } from "@tremor/react";

export function CuratedPortfolio() {
  const [isHiddenVisible, setIsHiddenVisible] = useState(false);

  const handleCardClick = () => {
    setIsHiddenVisible(!isHiddenVisible);
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
          <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">
            <Card
              className="w-xs shadow-lg rounded-lg"
              decoration="top"
              decorationColor="indigo"
              onClick={handleCardClick}
            >
              <div
                className=" mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "rgb(59 130 246)",
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.2625 10.6312C27.1688 7.36875 22.8375 5.34375 18 5.34375C8.60626 5.34375 1.01251 12.9937 1.01251 22.3875C1.01251 25.0312 1.63126 27.6187 2.75626 29.925C2.92501 30.2625 3.20626 30.4875 3.54376 30.6C3.65626 30.6 3.71251 30.6562 3.82501 30.6562C3.82501 30.6562 3.82501 30.6562 3.88126 30.6562C3.88126 30.6562 3.88126 30.6562 3.93751 30.6562C3.99376 30.6562 4.05001 30.6562 4.10626 30.6562C4.21876 30.6562 4.38751 30.6 4.50001 30.5437L6.80626 29.4187C7.42501 29.1375 7.70626 28.35 7.36876 27.7312C7.03126 27.1125 6.30001 26.8312 5.68126 27.1687L4.55626 27.7312C3.88126 26.1 3.60001 24.3562 3.54376 22.5562H5.90626C6.58126 22.5562 7.20001 21.9937 7.20001 21.2625C7.20001 20.5312 6.63751 19.9687 5.90626 19.9687H3.71251C4.10626 17.4937 5.17501 15.2437 6.69376 13.3875L8.71876 15.4125C8.94376 15.6375 9.28126 15.8062 9.61876 15.8062C9.95626 15.8062 10.2938 15.6937 10.5188 15.4125C11.025 14.9062 11.025 14.1187 10.5188 13.6125L8.43751 11.5312C10.6875 9.5625 13.5563 8.2125 16.7625 7.9875V11.4187C16.7625 12.0937 17.325 12.7125 18.0563 12.7125C18.7313 12.7125 19.35 12.15 19.35 11.4187V7.9875C22.5 8.26875 25.425 9.5625 27.675 11.5312L26.1 13.1062C25.5938 13.6125 25.5938 14.4 26.1 14.9062C26.325 15.1312 26.6625 15.3 27 15.3C27.3375 15.3 27.675 15.1875 27.9 14.9062L29.4188 13.3875C30.9375 15.2437 31.95 17.4937 32.4 19.9687H30.2063C29.5313 19.9687 28.9125 20.5312 28.9125 21.2625C28.9125 21.9937 29.475 22.5562 30.2063 22.5562H32.5688C32.5688 24.3562 32.2313 26.1 31.5563 27.7875L30.4313 27.225C29.8125 26.8875 29.025 27.1687 28.7438 27.7875C28.4625 28.4062 28.6875 29.1937 29.3063 29.475L31.6125 30.6C31.7813 30.7125 32.0063 30.7125 32.175 30.7125C32.175 30.7125 32.175 30.7125 32.2313 30.7125C32.2313 30.7125 32.2313 30.7125 32.2875 30.7125C32.7375 30.7125 33.1875 30.4312 33.4125 30.0375C34.5938 27.7312 35.1563 25.0875 35.1563 22.5C35.0438 17.8312 33.1875 13.6687 30.2625 10.6312Z"
                    fill="white"
                  />
                  <path
                    d="M21.4313 19.3499L17.6625 22.1624C16.9875 22.2749 16.3688 22.6687 15.975 23.2312C15.9188 23.3437 15.8625 23.3999 15.8063 23.5124L15.6938 23.6249H15.75C15.1313 24.8062 15.4688 26.2687 16.5938 27.1124C17.7188 27.8999 19.2375 27.7874 20.1375 26.8312H20.1938L20.25 26.7187C20.3063 26.6624 20.4188 26.5499 20.475 26.4374C20.925 25.8749 21.0375 25.1437 20.9813 24.4687L22.4438 19.9687C22.6125 19.4624 21.9375 19.0124 21.4313 19.3499Z"
                    fill="white"
                  />
                </svg>
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
                  display: isHiddenVisible ? "block" : "none",
                }}
                className="mt-4 ease-in-out duration-500 transition delay-500"
              >
                <div className="border my-4"></div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                laudantium, quam iste magnam assumenda id quia totam aperiam
                similique eum architecto, veniam praesentium quidem atque
                voluptate veritatis blanditiis ea a, error iure ducimus. Fugit
                illo sit magni expedita laudantium. Nesciunt totam quia,
                exercitationem esse velit dolorum nam adipisci dignissimos magni
                voluptate cumque praesentium, quod assumenda. Atque pariatur
                iure tempora ducimus consectetur excepturi error. Quis facere
                sunt impedit, ipsa eos provident magni tempore a facilis iste ad
                voluptatibus voluptate doloremque repudiandae aperiam quibusdam
                dicta reprehenderit aut? Consequatur, saepe quam explicabo ipsum
                debitis, corporis mollitia nesciunt eaque similique sint animi.
                Ipsum mollitia, ad soluta ipsa, numquam quam nulla a earum quasi
                ratione placeat doloremque esse ut dolores. Vitae nam vero
                asperiores, animi, eaque velit harum magni voluptatem tempore
                quod vel, qui delectus. Aut totam harum porro sunt voluptatem
                molestiae deleniti repellat dicta debitis? Earum quam quia,
                laborum quis vel sit, porro voluptatum magnam optio dolorum sed.
                Quia minima praesentium, earum doloribus dignissimos blanditiis
                recusandae mollitia dolores quibusdam voluptate eveniet minus
                sapiente. Expedita nemo facilis beatae ab culpa, maxime ipsum
                voluptas repellendus eveniet nisi consequuntur placeat, modi
                aliquid voluptate eum cupiditate molestias amet quasi iure quod
                est assumenda excepturi? Odio beatae fugiat consequuntur
                reiciendis vero repudiandae adipisci quisquam voluptas veniam,
                eligendi non natus quae, qui possimus earum voluptatem ipsa
                velit, veritatis necessitatibus aliquid cumque labore
                reprehenderit tenetur! Repellat sit, quidem, nostrum odit est
                vero, magnam ipsam sequi et optio deserunt modi obcaecati illo
                asperiores fugit fugiat suscipit laboriosam inventore iure
                quaerat temporibus aliquid veniam sapiente. Incidunt dicta
                quibusdam dolorem?{" "}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
