import React from "react";
import { Header } from "../../components/Header/Header";
import LeftColumn from "../Dashboard/LeftColumn";
import RightColumn from "../Dashboard/RightColumn";

export function Portfolio() {
  return (
    <div>
      <Header />

      <div className="max-w-[800px]  w-full  mx-auto text-center flex flex-col justify-center pt-10">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          PMS Portfolio Analysis
        </p>
        <p
          className=" font-bold p-2 text-xl"
          style={{
            color: "rgb(59 130 246)",
          }}
        >
          Upload your Portfolio in excel format for analysis{" "}
        </p>

        <label
          htmlFor="fileInput"
          className="block mx-auto mt-4 px-8 py-4 w-72 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          <span className="text-2xl font-bold">+</span> Add Portfolio File
        </label>
        <input
          type="file"
          id="fileInput"
          accept=".xls, .xlsx"
          onChange={handleFile}
          className="hidden"
        />
      </div>
      <div className="flex flex-col flex-1 relative mt-10">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

function handleFile(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    console.log("File uploaded:", file.name);
  } else {
    console.log("No file selected.");
  }
}
