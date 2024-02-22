import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { useDispatch } from "react-redux";
import { setParmasData } from "../features/Api.Slice";

const Params = () => {
  const dispatch = useDispatch();
  const [addRows, setAddRows] = useState([0]);

  const [paramsData, setParamsData] = useState([]);

  useEffect(() => {
    dispatch(setParmasData(paramsData));
  }, [dispatch, paramsData]);

  return (
    <div>
      <h2>Query Params</h2>
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
            data={paramsData}
            setData={setParamsData}
          />
        ))}
      </table>
    </div>
  );
};

export default Params;
