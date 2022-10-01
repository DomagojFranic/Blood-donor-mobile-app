import { NEW_EVENTS } from '../../data/test-data-new-event'

import { FAVORITE_CHANGE } from '../actions/newevents'

const startingState = {
  newEvents: NEW_EVENTS,
  favouriteNewEvents: []
}

const newEventReducer = (state = startingState, action) => {
  switch (action.type) {
    case FAVORITE_CHANGE: {
      const selected = state.favouriteNewEvents.findIndex(
        (newevent) => newevent.id === action.idEvent
      )
      //event je u favoritima
      if (selected >= 0) {
        const newFavourites = [...state.favouriteNewEvents]
        newFavourites.splice(selected, 1)
        return {...state, favouriteNewEvents: newFavourites}
      }
      //event nije u favoritima
      else {
        const newevent = state.newEvents.find(newevent => newevent.id === action.idEvent)
        return {...state, favouriteNewEvents: state.favouriteNewEvents.concat(newevent)}
      }
    }
    default:
      return state
  }
}

export default newEventReducer