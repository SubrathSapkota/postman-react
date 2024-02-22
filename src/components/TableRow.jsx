import React, { useEffect, useState } from "react";

const TableRow = ({ setAddRows, rowId, data, setData }) => {
  const [checkignCheckbox, setCheckignCheckbox] = useState(false);

  const handleAddRowsChange = (e) => {
    let result = data.filter((entry) => entry.id === rowId)[0];

    if (!checkignCheckbox) {
      setCheckignCheckbox(true);
      setAddRows((oldArr) => [...oldArr, rowId]);
      result = { ...result, id: rowId, check: true };
    } else {
      setCheckignCheckbox(false);
      result = { ...result, id: rowId, check: false };
    }

    let index = data.findIndex((value) => value.id === rowId);
    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArray = Object.assign([...data], { [index]: result });
      setData(newArray);
    }
  };

  const handleTextChange = (e) => {
    let result = data.filter((entry) => entry.id === rowId)[0];
    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    let index = data.findIndex((value) => value.id === rowId);

    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArray = Object.assign([...data], { [index]: result });
      setData(newArray);
    }
  };

  return (
    <tbody>
      <tr className="h-12 w-full ">
        <td className="border border-slate-400 w-20">
          <input
            type="checkbox"
            className="w-full h-5"
            name={rowId}
            checked={checkignCheckbox}
            onChange={handleAddRowsChange}
          />
        </td>
        <td className="border border-slate-400 px-2">
          <input
            type="text"
            className=" w-full border border-slate-400 focus:outline-none px-2 py-1.5"
            name="key"
            onChange={handleTextChange}
          />
        </td>
        <td className="border border-slate-400 px-2">
          <input
            type="text"
            className="w-full border border-slate-400 focus:outline-none px-2 py-1.5"
            name="value"
            onChange={handleTextChange}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
