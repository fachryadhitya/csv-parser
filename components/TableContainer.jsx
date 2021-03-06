import React from "react";

import { useTable, useBlockLayout, useFilters } from "react-table";
import { FixedSizeList } from "react-window";
import styles from "./table.module.css";
import { DefaultColumnFilter, Filter, IndeterminateCheckbox } from "./Filters";
import ModalButton from "./ModalButton";
import { Stack } from "@chakra-ui/react";

const SCROLLBAR_SIZE = 17;

export default function TableContainer({
  columns,
  data,
  refProps,
  scrollProps,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
    },
    useFilters,
    useBlockLayout
  );

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({
            style,
          })}
          className={styles.tr}
        >
          {row.cells.map((cell) => {
            return (
              <div {...cell.getCellProps()} className={styles.td}>
                {cell.render("Cell")}
              </div>
            );
          })}
        </div>
      );
    },
    [prepareRow, rows]
  );

  const ColumnView = () => {
    return (
      <>
        <div className="mb-5">
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
          All
        </div>
        <Stack direction="column" spacing={8}>
          {allColumns?.map((column) => (
            <div key={column.id}>
              <label className="border-2 p-2 border-black rounded-md">
                <input
                  className="mr-4"
                  type="checkbox"
                  {...column.getToggleHiddenProps()}
                />
                {column.id}
              </label>
            </div>
          ))}
        </Stack>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col pl-0 max-w-full min-w-full">
        <div className="mb-4">
          <ModalButton body={<ColumnView />} />
        </div>
        <div {...getTableProps()} className={styles.table}>
          <div>
            {headerGroups.map((headerGroup, i) => (
              <div
                key={i}
                {...headerGroup.getHeaderGroupProps()}
                className={styles.tr}
              >
                {headerGroup.headers.map((column) => (
                  <>
                    <div
                      key={column.id}
                      {...column.getHeaderProps()}
                      className={styles.th}
                    >
                      <Filter column={column} />
                      {column.render("Header")}
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>

          <div {...getTableBodyProps()}>
            <FixedSizeList
              ref={refProps}
              onScroll={scrollProps}
              height={400}
              itemCount={rows.length}
              itemSize={35}
              width={totalColumnsWidth + SCROLLBAR_SIZE}
            >
              {RenderRow}
            </FixedSizeList>
          </div>
        </div>
      </div>
    </>
  );
}
