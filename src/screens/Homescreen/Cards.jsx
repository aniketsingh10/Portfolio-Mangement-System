import React, { useState, useEffect } from "react";
import { TEChart } from "tw-elements-react";

const Cards = () => {
  const [niftyData, setNiftyData] = useState([]);
  const [sensexData, setSensexData] = useState([]);
  const [bankData, setBankData] = useState([]);
  const [itData, setITData] = useState([]);
  const [finData, setFinData] = useState([]);
  const [fmcgData, setFmcgData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/scrapper/nse";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNiftyData(data.nifty))
      .catch((error) => console.error("Error fetching Nifty data"));
  }, []);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/scrapper/bse";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSensexData(data.nifty))
      .catch((error) => console.error("Error fetching Sensex BSE data"));
  }, []);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/scrapper/bank";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBankData(data.nifty))
      .catch((error) => console.error("Error fetching Nifty Bank data"));
  }, []);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/scrapper/it";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setITData(data.nifty))
      .catch((error) => console.error("Error fetching Nifty IT data"));
  }, []);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/scrapper/finance";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFinData(data.nifty))
      .catch((error) => console.error("Error fetching Nifty Finance"));
  }, []);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/scrapper/fmcg";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFmcgData(data.nifty))
      .catch((error) => console.error("Error fetching Nifty FMCG"));
  }, []);

  // function to convert date
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { month: "short", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-full my-[4rem]">
      <p className="mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-white sm:text-4xl md:text-[40px] text-center">
        Market Indices
      </p>
      <p className="text-base text-body-color dark:text-dark-6 text-center mb-4">
        We provide comprehensive oversight, strategic alignment, and real-time
        analytics to optimize the performance and health of your project
        portfolio.
      </p>

      <div className="max-w-[90%] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty 50</p>
          <TEChart
            type="line"
            data={{
              labels: niftyData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty 50",
                  data: niftyData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Sensex</p>
          <TEChart
            type="line"
            data={{
              labels: sensexData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Sensex",
                  data: sensexData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty Bank</p>
          <TEChart
            type="line"
            data={{
              labels: bankData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty Bank",
                  data: bankData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="max-w-[90%] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty IT</p>
          <TEChart
            type="line"
            data={{
              labels: itData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty IT",
                  data: itData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty Finance</p>
          <TEChart
            type="line"
            data={{
              labels: finData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty Finance",
                  data: finData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty FMCG</p>
          <TEChart
            type="line"
            data={{
              labels: fmcgData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty FMCG",
                  data: fmcgData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
