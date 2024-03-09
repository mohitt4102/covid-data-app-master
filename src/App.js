import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import StateData from "./Components/StateData";

const App = () => {
  const api_url = "https://api.rootnet.in/covid19-in/stats/latest";
  const [ApiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetApiData();
  }, []);

  const GetApiData = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    setApiData(data);
  };

  return (
    <div className="bg-emerald-900">
      <div className="bg-blue-400 flex flex-col justify-center items-center text-black p-10 lg:h-[60vh]">
        <h1 className=" text-slate-800 text-center text-3xl md:text-5xl font-bold py-5 my-6 font-serif ">
          COVID-19 Data
        </h1>
        <div className="flex max-md:flex-col">
          <h3 className=" max-md:my-3 mx-4 text-xl font-bold">
            Confirmed Cases:
            <span className="text-red-600 font-bold ml-2">
              {ApiData.data && ApiData.data.summary.total}
            </span>
          </h3>
          <h3 className=" max-md:my-3 mx-4 text-xl font-bold">
            Total Discharged:
            <span className="text-green-600 font-bold ml-2">
              {ApiData.data && ApiData.data.summary.discharged}
            </span>
          </h3>
          <h3 className=" max-md:my-3 mx-4 text-xl font-bold">
            Total Deaths:
            <span className="text-orange-700 font-bold ml-2">
              {ApiData.data && ApiData.data.summary.deaths}
            </span>
          </h3>
          <h3 className=" max-md:my-3 mx-4 text-xl font-bold">
            Confirmed Cases Foreign:
            <span className="text-blue-800 font-bold ml-2">
              {ApiData.data && ApiData.data.summary.confirmedCasesForeign}
            </span>
          </h3>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 text-slate-900 rounded-md p-2 my-10 mx-1 w-80 h-10 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {ApiData.data &&
          ApiData.data.regional
            .filter((state) => {
              if (search === "") {
                return state;
              } else if (
                state.loc.toLowerCase().includes(search.toLowerCase())
              ) {
                return state;
              }
              return null;
            })
            .map((state) => <StateData data={state} />)}
      </div>
      <Footer />
    </div>
  );
};

export default App;
