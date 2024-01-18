import React from "react";
import Iframe from "react-iframe";

export function AnalysisDashboard({searchTerm}) {
  return (
    <div className="mb-20">
      <div className="max-w-[80%]  w-full  mx-auto text-center flex flex-col justify-center pt-10 ">
        <p className="md:text-2xl text-xl font-bold pb-4">
          Company :- {searchTerm || "INFY"}
        </p>

        <div className="flex">
          <Iframe
            url={`https://trendlyne.com/web-widget/swot-widget/Poppins/${searchTerm || "INFY"}/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`}
            width="100%"
            height="350px"
            id="myId"
            className="myClassname"
            display="initial"
            frameBorder="0"
            allowFullScreen
          />

          <Iframe
            url={`https://trendlyne.com/web-widget/qvt-widget/Poppins/${searchTerm || "INFY" }/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`}
            width="100%"
            height="350px"
            id="qvtWidget"
            className="trendlyne-iframe"
            display="initial"
           
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* <div>
          <Iframe
            url="https://trendlyne.com/web-widget/technical-widget/Poppins/INFY/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E"
            width="100%"
            height="500px"
            id="technicalWidget"
            className="trendlyne-iframe"
            display="initial"
            position="relative"
            frameBorder="0"
            allowFullScreen
          />
        </div> */}

        <div className="flex items-center justify-center mx-72 px-4 pt-2">
          <Iframe
            url={`https://trendlyne.com/web-widget/checklist-widget/Poppins/${searchTerm || "INFY" }/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`}
            width="100%"
            height="500px"
            id="checklistWidget"
            
            display="initial"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
