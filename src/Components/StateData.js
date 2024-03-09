import React from "react";

const StateData = (props) => {
  return (
    <div className="bg-white backdrop-blur-md flex items-center outline outline-blue-400 outline-offset-4 flex-col m-12 w-96 h-64 hover:bg-teal-50 hover:scale-105 duration-300 cursor-pointer font-serif">
      <h2 className="font-bold text-black mt-5 mb-8 text-2xl">
        {props.data.loc}
      </h2>
      <h3 className=" font-sans my-3">
        Confirmed Cases:
        <span className="font-bold text-red-600 mx-2 ">
          {props.data.totalConfirmed}
        </span>
      </h3>
      <h3 className="font-sans my-3">
        Discharged:
        <span className="font-bold text-green-600 mx-2 ">
          {props.data.discharged}
        </span>
      </h3>
      <h3 className="font-sans  my-3">
        Total Deaths:
        <span className="font-bold text-orange-700 mx-2 ">
          {props.data.deaths}
        </span>
      </h3>
      
    </div>
  );
};

export default StateData;
