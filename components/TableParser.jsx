import React from "react";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import TableContainer from "./TableContainer";

export default function TableParser({
  styles,
  tableParserRef,
  tableParserScroll,
}) {
  const [file, setFile] = useState(undefined);
  const [dataArr, setDataArr] = useState([
    {
      "Initial Data": "Initial Data",
      "Did I see this plant in 2017?": "Yes",
      "How Many?": 1,
      "User Data 4": "x",
      "User Data 5": null,
      "Did I see this plant in 2022?": "No",
      Name: "Abronia alpina",
    },
  ]);
  const handleFileSelected = (e) => {
    const files = e.target.files;
    setFile(files);
  };

  useEffect(() => {
    function getFile() {
      if (file !== undefined) {
        Papa.parse(file[0], {
          header: true,
          skipEmptyLines: true,
          complete: function (res) {
            setDataArr(res.data);
          },
        });
      }
    }

    getFile();
  }, [file]);

  const getColumnWidth = (rows, accessor, headerText) => {
    const maxWidth = 400;
    const spacing = 20;
    const cellLength = Math.max(
      ...rows.map((row) => (`${row[accessor]}` || "").length),
      headerText.length
    );
    return Math.min(maxWidth, cellLength * spacing);
  };

  const columns = Object.keys(dataArr[0]).map((key, id) => {
    return {
      Header: key,
      accessor: key,
      id: `${key} Column`,
      width: getColumnWidth(dataArr, key, key),
    };
  });

  return (
    <div data-testid="table-parser" className={styles || "w-full"}>
      <input onChange={handleFileSelected} type="file" />
      <div className="mt-4 flex">
        <TableContainer
          refProps={tableParserRef}
          scrollProps={tableParserScroll}
          columns={columns}
          data={dataArr}
        />
      </div>
    </div>
  );
}
