const ID_TOKEN = 'idToken'
const REFRESH_TOKEN = 'refreshToken'
const EXPIRES_IN = 'expiresIn'
const LOCAL_ID = 'localId'

export function setTokens({localId, idToken, refreshToken, expiresIn = 3600}) {
  const expiresDate = new Date().getTime() + (expiresIn * 1000)
  localStorage.setItem(ID_TOKEN, idToken)
  localStorage.setItem(REFRESH_TOKEN, refreshToken)
  localStorage.setItem(EXPIRES_IN, expiresDate)
  localStorage.setItem(LOCAL_ID, localId)
}
export function getAccessToken() {
  return localStorage.getItem(ID_TOKEN)
}
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN)
}
export function getTokenExpirensData() {
  return localStorage.getItem(EXPIRES_IN)
}
export function getUserId() {
  return localStorage.getItem(LOCAL_ID)
}
export function removeAuthData() {
  localStorage.removeItem(ID_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
  localStorage.removeItem(EXPIRES_IN)
  localStorage.removeItem(LOCAL_ID)
}

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpirensData,
  getUserId,
  removeAuthData
}

export default localStorageService
