import React from "react"
import { Container } from "../styles/global-styles"
import { PageLayout } from "../components"
import { germanWords } from "../listData/germanWordsList"

import { StyledTable } from "../styles/page-styles/germanWordsList"

function useTable({ headings, data }) {
  const [globalFilter, setGlobalFilter] = React.useState("")

  return {
    initialColumns: headings,
    initialRows: data,
    globalFilter,
    setGlobalFilter,
  }
}

function GlobalFilter({ dataLength, setFilterTerm }) {
  const [value, setValue] = React.useState("")

  function onChange(sVal) {
    setFilterTerm(sVal)
    setValue(sVal)
  }

  return (
    <span>
      Search :{" "}
      <input
        value={value || ""}
        onChange={e => {
          onChange(e.target.value)
        }}
        placeholder={`Word`}
      />
      &nbsp; : {dataLength} records
    </span>
  )
}

function useGlobalFilter(items, searchTerm) {
  let filteredItems = []

  items.forEach(item => {
    let species = item.word.toLowerCase()
    if (species.includes(searchTerm.toLowerCase())) {
      filteredItems.push(item)
    }
  })

  return filteredItems
}

const useSort = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config)
  
  let sortableItems = items
  if (sortConfig !== null) {
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1
      }
      return 0
    })
  }

  const requestSort = key => {
    let direction = "ascending"
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending"
    }

    setSortConfig({ key, direction })
  }

  return { sortedItems: sortableItems, requestSort, sortConfig }
}

function GermanWordDataTable({ headings, data }) {
  const {
    initialColumns,
    initialRows,
    globalFilter,
    setGlobalFilter,
  } = useTable({ headings, data })

  const filteredItems = useGlobalFilter(initialRows, globalFilter)

  const { sortedItems, requestSort, sortConfig } = useSort(filteredItems)

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const renderHeadings = headings.map(heading => (
    <th key={heading.field}>
      <button
        type="button"
        onClick={() => requestSort(heading.field)}
        className={getClassNamesFor(heading.field)}
      >
        {heading.name}
      </button>
    </th>
  ))

  const renderData = sortedItems.map(item => (
    <React.Fragment key={item.id}>
      <tr>
        <td>{item.word}</td>
        <td>{item.meaning}</td>
        <td>{item.example}</td>
        <td>{item.translation}</td>
        <td>{item.wordType}</td>
      </tr>
    </React.Fragment>
  ))

  return (
    <StyledTable>
      <thead>
        <tr>{renderHeadings}</tr>
        <tr>
          <th colSpan={headings.length}>
            <GlobalFilter
              dataLength={filteredItems.length}
              setFilterTerm={setGlobalFilter}
            />
          </th>
        </tr>
      </thead>
      <tbody>{renderData}</tbody>
    </StyledTable>
  )
}

export default function Home() {
  return (
    <PageLayout bigTitle="German Words">
      <Container>
        <GermanWordDataTable headings={germanWords.headings} data={germanWords.rows} />
      </Container>
    </PageLayout>
  )
}
