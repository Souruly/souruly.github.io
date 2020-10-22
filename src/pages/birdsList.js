import React from "react"
import { PageLayout } from "../components"
import { birds } from "../listData/birdsList"
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table"

import { TableContainer } from "../styles/page-styles/birdsList"

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search :{" "}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  )
}

// Our table component
function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter, // useGlobalFilter!
    useSortBy
  )

  const firstPageRows = rows.slice(0, 100)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    textAlign: "center",
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ↑"
                        : " ↓"
                      : " ↕"}
                  </span>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "center",
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
    </>
  )
}


export default function Home() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Species Name",
        accessor: "species",
        // Use our custom `fuzzyText` filter on this column
        sortType: "basic",
      },
      {
        Header: "Rarity",
        accessor: "rarity",
        sortType: "basic",
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],

    []
  )

  const data = React.useMemo(() => birds.rows, [])

  return (
    <PageLayout bigTitle="Birds">
      <TableContainer>
        <Table columns={columns} data={data} />
        {/* <DataTable headings={birds.headings} data={birds.rows} /> */}
      </TableContainer>
    </PageLayout>
  )
}
