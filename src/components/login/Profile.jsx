"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ResItem from "./ResItem";
import Chart from "../result/Chart";

const Profilee = ({ username, ca }) => {

  return (
    <div className="flex flex-col items-center ">
      <div className="flex w-full bg-bg2Color p-5">
        <div className=" flex flex-col xs:w-full sm:w-[40%] md:w-[30%]">
          <div className="flex ">
            <FaUserCircle className="text-7xl text-softText" />
            <div className="flex flex-col">
              {" "}
              <h1 className="text-lightText text-4xl ms-2 mt-3  ">
                {username}
              </h1>
              <p className="text-softText text-xs ms-3  ">Joined {ca}</p>
            </div>
          </div>
          <div className="flex items-center mt-5 mx-5 gap-1">
            <p className="text-lightText text-xs font-bold ">1</p>
            <div className="w-full h-2 bg-bgColor rounded   ">
              <div className="h-full bg-scoreColor w-[50%] rounded"></div>
            </div>
            <p className="text-softText text-xs ">35/100</p>
          </div>
        </div>
        <div className="flex h-[90] w-2 bg-bgColor rounded"></div>
        <div className="w-full flex xs:flex-col md:flex-row items-center justify-center md:justify-between sm:px-8 md:px-2  font-mono gap-5">
          {" "}
          <div className="flex flex-col items-center">
            <p className="text-softText text-md ms-3 whitespace-nowrap">
              tests started
            </p>
            <p className="text-lightText text-2xl ms-3">4</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="text-softText text-md ms-3 whitespace-nowrap">
              tests started
            </p>
            <p className="text-lightText text-2xl ms-3">3</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-softText text-md ms-3 whitespace-nowrap">
              time typingd
            </p>
            <p className="text-lightText text-2xl ms-3">00:01:29</p>
          </div>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5 mt-12 mb-5">
        <ResItem
          item1={{ n: "15 seconds", value: "-" }}
          item2={{ n: "30 seconds", value: "-" }}
          item3={{ n: "60 seconds", value: "-" }}
          item4={{ n: "120 seconds", value: "-" }}
        />
        <ResItem
          item1={{ n: "15 seconds", value: "-" }}
          item2={{ n: "30 seconds", value: "-" }}
          item3={{ n: "60 seconds", value: "-" }}
          item4={{ n: "120 seconds", value: "-" }}
        />
      </div>
      <Chart />
     
    </div>
  );
};

export default React.memo(Profilee);
