import React from 'react'
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.0/node_modules/redux';

const LIKE_USERS = 'LIKE_USERS'

export const getLikeUsers = () => {
  return (dispatch) => {
    axios.get('/api/like_users')
    .then ( res => dispatch({ type: LIKE_USERS, users: res.data}))
  return { type" LIKE_USERS, users: []}
  }
}

export default ( state = [], state) => {
  switch(action.type){
    case LIKE_USERS:
    return
  }
}