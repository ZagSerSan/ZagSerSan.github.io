import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedProf
}) => {
  return (
    <ul className="list-group">
      {typeof items === 'object'
        ? Object.keys(items).map((item) => (
            <li
              role="button"
              key={items[item][valueProperty]}
              className={
                'list-group-item' +
                (items[item]._id === selectedProf ? ' active' : '')
              }
              onClick={() => onItemSelect(items[item])}
            >
              {items[item][contentProperty]}
            </li>
          ))
        : items.map((item) => (
            <li
              role="button"
              key={item[valueProperty]}
              className={
                'list-group-item' + (item._id === selectedProf ? ' active' : '')
              }
              onClick={() => onItemSelect(item)}
            >
              {item[contentProperty]}
            </li>
          ))}
    </ul>
  )
}
GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
}
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedProf: PropTypes.string
  // selectedProf: PropTypes.object
}
export default GroupList
