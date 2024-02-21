import React from "react";

const Headers = () => {

  return (
    <div>
      <h2>Headers</h2>

      <table className="w-full mt-5">
        <thead>
          <tr className="h-10">
            <th className="border border-slate-400"></th>
            <th className="border border-slate-400">Key</th>
            <th className="border border-slate-400">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-12 w-full ">
            <td className="border border-slate-400 w-20">
              <input type="checkbox" className="w-full h-5" />
            </td>
            <td className="border border-slate-400 px-2">
              <input
                type="text"
                className=" w-full border border-slate-400 focus:outline-none px-2 py-1.5"
              />
            </td>
            <td className="border border-slate-400 px-2">
              <input
                type="text"
                className="w-full border border-slate-400 focus:outline-none px-2 py-1.5"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Headers;
