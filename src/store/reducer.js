import { THE_LAST_EPISODE, NEXT_EPISODE, EPISODE_CURRENT, SET_PLOT_TAB } from './actionTypes'
import lists from '../api/hy/resource'
import plotList from '../api/hy/plotList'

const defalutPlotList = plotList.filter((item, index) => {
  if(index >= 0 && index <= 9) {
    return item
  }
})

const defaultPlotParams = {
    plotTab: [0, 9],
    plotTabActive: [0, 9],
    plotList: defalutPlotList
}

const defaultPlayerParams = {
  id: lists[0].id,
  url: lists[0].url,
  episode: lists[0].episode,
  subTitle: lists[0].subTitle,
  watchActive: 0,
  lists
}
export default ( state = {
  playerParams: defaultPlayerParams,
  plotParams: defaultPlotParams
  
}, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  
  const playerParams = newState.playerParams
  const list = playerParams.list

  if(action.type == THE_LAST_EPISODE) {
    if(playerParams.id <= 0) {
      playerParams.id = 0
    } else if(playerParams.id >= lists.length-1) {
      playerParams.id = lists.length - 1
      playerParams.id = playerParams.id -1
    } else {
      playerParams.id = playerParams.id - 1
      playerParams.watchActive = playerParams.id
      const playCurrent = lists.length>0 && lists.find((item, index) => {
        if(index===playerParams.id) {
          return {
              id: item.id,
              url: item.url,
              episode: item.episode,
              subTitle: item.subTitle,
              watchActive: playerParams.id
            }
        } 
      })

    newState.playerParams = Object.assign(playerParams, playCurrent)
    }
    return newState
  }

  if(action.type == NEXT_EPISODE) {
    if(playerParams.id >= 0 && playerParams.id < lists.length-1) {
      playerParams.id = playerParams.id + 1
      playerParams.watchActive = playerParams.id
      const playCurrent = lists.length > 0 && lists.find((item, index) => {
        if(index === playerParams.id) {
          return {
            id: item.id,
            url: item.url,
            episode: item.episode,
            subTitle: item.subTitle,
            watchActive: playerParams.id
          }
        }
      })

    newState.playerParams = Object.assign(playerParams, playCurrent)
    }
    return newState
  }

  if(action.type === EPISODE_CURRENT) {
    
    playerParams.watchActive = action.id
    const playCurrent = lists.length>0 && lists.find((item, index) => {
      if(index === action.id) {
        return {
          id: action.id,
          url: item.url,
          episode: item.episode,
          subTitle: item.subTitle,
          watchActive: action.id

        }
      }
    })
    newState.playerParams = Object.assign(playerParams, playCurrent)
    return newState
  }



  if(action.type === SET_PLOT_TAB) {
    const [firstID, secondID] = action.id
    const plotContentList = plotList.length>0 && plotList.filter((item, index) => {
      if(index >= firstID && index <= secondID) {
        newState.plotParams.plotTabActive = action.id
        return item
      }
    })
    newState.plotParams.plotList = [...[], ...plotContentList]
    return newState

  }


  return state
}

