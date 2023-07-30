import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize) // кол-во страниц
  const pages = _.range(1, pageCount + 1) // массив страниц (целое число)
  // не отображать пагинацию если кол-в остраниц равно 1
  if (pageCount === 1) return null

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={'page-item ' + (currentPage === page ? 'active' : '')}
            key={'page_' + page}
            style={{ cursor: 'pointer' }}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination
