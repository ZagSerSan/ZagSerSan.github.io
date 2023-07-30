import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({
  users,
  sortSettings,
  setSortSettings,
  thState,
  setThState
}) => {
  return (
    <table className="table" style={{ minWidth: '720px' }}>
      <TableHeader
        {...{ sortSettings, setSortSettings, thState, setThState }}
      />
      <TableBody {...{ data: users, thState }} />
    </table>
  )
}

Table.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  sortSettings: PropTypes.object.isRequired,
  setSortSettings: PropTypes.func.isRequired,
  thState: PropTypes.object,
  setThState: PropTypes.func
}

export default Table
