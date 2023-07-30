import React, { useState } from 'react'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
// utils
import { paginate } from '../../../utils/paginate'
// hooks
import { useUsers } from '../../../hooks/useUsers'
import { useProfession } from '../../../hooks/useProfession'
// components
import SearchStatus from '../../ui/searchStatus'
import Pagination from '../../common/pagination'
import GroupList from '../../common/groupList'
import UsersTable from '../../ui/usersTable'
import IconSVG from '../../common/iconSVG'
import { useAuth } from '../../../hooks/useAuth'

const UserListPage = () => {
  const { users } = useUsers()
  const { currentUser, updateUser } = useAuth()
  const {isLoading: professionsLoading, professions} = useProfession()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProf, setSelectedProf] = useState()
  const [sortSettings, setSortSettings] = useState({
    iter: 'name',
    order: 'asc'
  })
  const [searchValue, setSearchValue] = useState('')
  const pageSize = 4

  // func for refresh all users
  // const refreshUsers = () => {
    // setUsers(firstUsersState)
    // console.log('"refreshUsers" not a func')
  // }
  // toogle bookmark function
  const toggleBookMark = (userId) => {
    // если есть bookmark вообще
    if (currentUser.bookmark) {
      // если есть такой пользователь в bookmark
      const isContain = currentUser.bookmark.some(bookm => bookm === userId)
      if (isContain) {
        const newUserData = {
          ...currentUser,
          bookmark: currentUser.bookmark.filter(item => item !== userId)
        }
        console.log(newUserData)
        updateUser(newUserData)
      } else {
        const newUserData = {
          ...currentUser,
          bookmark: [...currentUser.bookmark, userId]
        }
        console.log(newUserData)
        updateUser(newUserData)
      }
    } else {
      const newUserData = {
        ...currentUser,
        bookmark: [userId]
      }
      console.log(newUserData)
      updateUser(newUserData)
    }
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  // todo поиск юсера
  const changeSearchValue = ({ target }) => {
    setSelectedProf()
    setSearchValue(target.value)
  }

  // функция фильтра профессий
  const handleProfessionSelect = (item) => {
    setSelectedProf(item._id)
    setCurrentPage(1)
    setSearchValue('')
  }
  // функция сброса (глобально)
  const clearFilter = () => {
    // обнуление: фильтра профессии,
    setSelectedProf()
    // масива users,
    // refreshUsers()
    // текущей страницы,
    setCurrentPage(1)
    // параметров сортировки
    setSortSettings({ iter: 'name', order: 'asc' })
    // поиск
    setSearchValue('')
  }

  if (users) {
    //! эта функция вызываЛА бесконечный рендер!
    const filterUsers = (data) => {
      const filteredUsers = selectedProf
        ? data.filter(user => user.profession === selectedProf)
        : searchValue
        ? data.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
        : data
      return filteredUsers.filter(u => u._id !== currentUser._id)
    }
    const filteredUsers = filterUsers(users)

    // для изменения страниц
    const count = filteredUsers.length

    const sortedUsers = _.orderBy(
      filteredUsers,
      [sortSettings.iter],
      [sortSettings.order]
    )
    const userCrop = paginate(sortedUsers, currentPage, pageSize)

    // изменение страницы при кол-ве польз = 0 на текущей
    if (userCrop.length === 0 && count !== 0) {
      setCurrentPage((prevState) => prevState - 1)
    }

    return (
      <>
        <div className="main-table">
          <div className="filter">
            {professions && !professionsLoading && (
              <div>
                <GroupList
                  selectedProf={selectedProf}
                  items={professions}
                  onItemSelect={handleProfessionSelect}
                />
                <button
                  className="btn btn-secondary clear-btn"
                  onClick={clearFilter}
                >
                  Сбросить
                </button>
              </div>
            )}
          </div>
          <div className="content">
            <SearchStatus count={count} />
            <div>
              <input
                type="text"
                placeholder="поиск"
                onChange={changeSearchValue}
                value={searchValue}
              />
            </div>
            {count > 0 && (
              <UsersTable
                users={userCrop}
                sortSettings={sortSettings}
                setSortSettings={setSortSettings}
                toggleBookMark={toggleBookMark}
              />
            )}
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </>
    )
  }
  return <IconSVG id={'loader'} />
}

export default UserListPage
