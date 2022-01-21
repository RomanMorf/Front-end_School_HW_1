import { http } from './rapidapi'
const demoUserInfo = require('./json/userInfo.json')
const demoUsersFeeds = require('./json/userFeed.json')
const demoCurrentUserFeed = require('./json/user-feed.json')
const demoFeed = require('./json/feed.json')

export const getTrandingFeed = async () => {
  try {
    return demoFeed
    
    return await http.get('/trending/feed')

  } catch (error) {
    return Promise.resolve().then( () => {
      return demoFeed
    })

  }

}

export const getUserInfo = (userName) => {
  try {
    return demoUserInfo

    return http.get(`user/info/${userName}`)

  } catch (error) {

    return Promise.resolve().then( () => {
      return demoUserInfo
    })
  }

}

export const getUserFeed = (userName) => {

  try {
    return demoCurrentUserFeed

    return http.get(`user/feed/${userName}`)

  } catch (error) {
    return Promise.resolve().then( () => {
      return demoCurrentUserFeed
    })
  }

}

