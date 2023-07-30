import React from 'react'
import PropTypes from 'prop-types'
// css
import 'bootstrap/dist/css/bootstrap.css'
import './userPage.css'
// components
import IconSVG from '../../common/iconSVG'
import CommentsList from './commentsList'
import UserCard from './userCard'
import QualitiesCard from './qualitiesCard'
import MeetingsCard from './meetingsCard'
// new api (firebase)
import { useUsers } from '../../../hooks/useUsers'
import CommentsProvider from '../../../hooks/useComments'

const UserPage = ({ userId }) => {
  const { getUserById } = useUsers()
  const selectedUser = getUserById(userId)

  return (
    <div className='container'>
      {selectedUser ? (
        <div className='row gutters-sm mt-2'>
          <div className='col-md-4 mb-3'>
            <UserCard user={selectedUser}/>
            <QualitiesCard qualitiesIds={selectedUser.qualities} />
            <MeetingsCard meetings={selectedUser.completedMeetings} />
          </div>

          <div className='col-md-8'>
            <CommentsProvider>
              <CommentsList {...{ userId }} />
            </CommentsProvider>
          </div>
        </div>
      ) : (
        <IconSVG id={'loader'} />
      )}
    </div>
  )
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserPage
