import React, { useEffect, useState } from "react";

export default function Test() {
  const [excel, setExcel] = useState([]);
  const [selection, setSelection] = useState("");

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/excel");
    const data = await res.json();
    {
      data.result && setExcel(data.excel);
      //   console.log(excel);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const elmt = excel.map((elmt, index) => {
    return (
      <option key={index}>
        {elmt.Désignation} / {elmt.Epaisseur}MM / REF : {elmt.REF} / {elmt.Type}
      </option>
    );
  });

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>{elmt}</select>
      <p className="mt-4 pl-2">Référence choisi : {selection}</p>
    </div>
  );
}
