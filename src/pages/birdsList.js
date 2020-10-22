import React from "react"
import { Container } from "../styles/global-styles"
import { PageLayout } from "../components"
import { birds } from "../listData/birdsList"

import { StyledTable } from "../styles/page-styles/birdsList"

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config)

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items]
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
    return sortableItems
  }, [items, sortConfig])

  const requestSort = key => {
    let direction = "ascending"
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending"
    }

    // if (
    //   sortConfig &&
    //   sortConfig.key === key &&
    //   sortConfig.direction === "descending"
    // ) {
    //   direction = undefined
    // }

    // if (
    //   sortConfig &&
    //   sortConfig.key === key &&
    //   sortConfig.direction === undefined
    // ) {
    //   direction = "ascending"
    // }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}

const DataTable = props => {
  const { items, requestSort, sortConfig } = useSortableData(props.data)

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const renderHeadings = props.headings.map(heading => (
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

  const renderData = items.map(item => (
    <tr key={item.id}>
      <td>{item.species}</td>
      <td>{item.rarity}</td>
      <td>
        <a href={item.locationLink} target="_blank" rel="noreferrer">
          {item.location}
        </a>
      </td>
    </tr>
  ))

  return (
    <StyledTable>
      <thead>
        <tr>{renderHeadings}</tr>
      </thead>
      <tbody>{renderData}</tbody>
    </StyledTable>
  )
}

export default function Home() {
  return (
    <PageLayout bigTitle="Birds">
      <Container>
        <DataTable headings={birds.headings} data={birds.rows} />
      </Container>
    </PageLayout>
  )
}