import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const TableBody = ({ data, thState }) => {
  const renderContent = (dataItem, thStateItem) => {
    if (thState[thStateItem].component) {
      const component = thState[thStateItem].component
      if (typeof component === 'function') {
        return component(dataItem)
      }
      return component
    } else if (thState[thStateItem].path === 'name') {
      // при итерации имени делаем ссылку на стр пользователя по ид
      const userId = `Users/${dataItem._id}`
      return <Link to={userId}>{dataItem.name}</Link>
    } else if (thState[thStateItem].path === 'rate') {
      // при итерации оценки добавляем строку '/5'
      return `${_.get(dataItem, thState[thStateItem].path)} / 5`
    }
    // во всех остальных случаях возвр просто path
    return _.get(dataItem, thState[thStateItem].path)
  }

  return (
    <tbody>
      {data.map((dataItem) => (
        <tr key={dataItem._id}>
          {Object.keys(thState).map((thStateItem) => (
            <td key={thStateItem}>{renderContent(dataItem, thStateItem)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  thState: PropTypes.object.isRequired
}

export default TableBody
