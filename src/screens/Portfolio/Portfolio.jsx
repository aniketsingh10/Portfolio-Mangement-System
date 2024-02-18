import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import LeftColumn from "../Dashboard/LeftColumn";
import RightColumn from "../Dashboard/RightColumn";
import Info from "../../assets/images/info.svg";
import InfoModal from "../../components/Modals/InfoModal";
import stock from "../../assets/images/stock.png";
export function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFile = async (event) => {
    const file = event.target.files[0];

    // Make sure a file is selected
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://your-backend-api/upload", {
        method: "POST",
        body: formData,
      });

      // Handle the response from the backend
      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Header />

      <div className="max-w-[800px]  w-full  mx-auto text-center flex flex-col justify-center pt-10">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          PMS Portfolio Analysis
        </p>

        <div className="flex text-center mx-auto">
          <div
            className=" font-bold p-2 text-xl "
            style={{
              color: "rgb(59 130 246)",
            }}
          >
            Upload your Portfolio in excel format for Analysis
          </div>
          <img
            src={Info}
            alt="Logo"
            height={20}
            width={20}
            onClick={openModal}
          />
        </div>

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
      <InfoModal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2 className="text-2xl font-bold mb-4">Sample Portfolio</h2>
          <img src={stock} alt="Logo" height={400} width={400} />
        </div>
      </InfoModal>
    </div>
  );
}
