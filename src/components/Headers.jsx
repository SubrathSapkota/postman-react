import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { useDispatch } from "react-redux";
import { setHeadersDatas } from "../features/DataSlice";

const Headers = () => {
  const dispatch = useDispatch();
  const [addRows, setAddRows] = useState([0]);

  const [headersData, setHeadersData] = useState([]);

  useEffect(() => {
    dispatch(setHeadersDatas(headersData));
  }, [dispatch, headersData]);

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

        {addRows.map((row, index) => (
          <TableRow
            key={index}
            setAddRows={setAddRows}
            rowId={index}
            data={headersData}
            setData={setHeadersData}
          />
        ))}
      </table>
    </div>
  );
};

export default Headers;
