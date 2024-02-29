import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import NoNews from "../../assets/images/nonews.jpg";

export function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=stocks%20India&from=2024-02-25&sortBy=popularity&apiKey=af0c5205da9c4725bfb1abaadde592e3"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          console.error("No Internet Connection");
        } else {
          console.error("Error fetching news:", error);
        }
      });
  }, []);

  return (
    <div className="">
      <Header />

      <div className="flex flex-wrap mt-2 w-[96%] mx-auto">
        {news.map((val) => {
          return (
            <div
              key={val.title}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mx-auto m-4 hover:scale-105 duration-500 ease-in-out"
            >
              <a href={val.url}>
                <img
                  className="rounded-t-lg"
                  src={val.urlToImage ? val.urlToImage : NoNews}
                  alt=""
                  style={{ width: "100%", height: 250 }}
                />
              </a>
              <div className="p-5">
                <a href={val.url}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {val.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {val.description}
                </p>
                <a
                  href={val.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
