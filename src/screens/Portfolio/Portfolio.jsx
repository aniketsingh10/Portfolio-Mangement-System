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
          className="bg-primary w-[250px] rounded-md  my-6 mx-auto p-5  text-white hover:scale-105 ease-in-out duration-300 font-bold cursor-pointer"
        >
          + Add Portfolio File
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
