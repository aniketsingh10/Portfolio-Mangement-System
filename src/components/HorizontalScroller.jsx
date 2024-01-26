import React from "react";
import { Badge } from "@tremor/react";
import Marquee from "react-fast-marquee";

var data = require("../assets/data/indices.json");

export function HorizontalScroller() {
  return (
    <Marquee
      className=" bg-[rgba(59,130,246,0.2)]"
      pauseOnClick={true}
      gradient={true}
    >
      {data.indices.map((item) => (
        <div key={item.name} className="flex mx-4 py-1">
          <div className=" px-2 py-1 text-primary font-bold text-base">
            {item.name}
          </div>
          <Badge
            className="my-1 px-2 rounded-lg text-xs"
            style={{
              backgroundColor:
                item.percentChange < 0
                  ? "rgba(255, 0, 0, 0.4)"
                  : "rgba(0, 255, 0, 0.4)",
            }}
          >
            {item.percentChange} %
          </Badge>
        </div>
      ))}
    </Marquee>
  );
}
