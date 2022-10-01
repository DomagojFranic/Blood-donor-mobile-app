export const FAVORITE_CHANGE = 'FAVORITE_CHANGE'

export const favoriteChange = (id) => {
  return{
    type: FAVORITE_CHANGE,
    idEvent: id
  }
}