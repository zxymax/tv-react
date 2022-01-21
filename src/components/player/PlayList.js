import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { THE_LAST_EPISODE, NEXT_EPISODE, EPISODE_CURRENT } from '../../store/actionTypes'


 const arr = Object.keys(Array.from({length:720})).map(function(item){
     return +item;
 });


const ListBox = styled.div`
  padding: 5px;
`

const ButtonBox = styled.span`
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  margin: 0 20px 12px 0;
  font-size: 18px;
  text-align: center;
`

class PlayList extends Component {
  render() {
    const { lists, id, watchActive, nextEpisode, lastEpisode, url, episode, subTitle, setEpisodeCurrent} = this.props
    return (
      <>
        <ListBox>
          {

            lists.map((item, index) => {
              const active = index === watchActive ? 'solid' : 'outline'
              if(index === watchActive) {
                return (
                  <Button colorScheme="telegram" variant={active}  m="1" p={0} width="36px" key={index} size="sm">{index+1}</Button>
                )
                
              } else {
                return (
                  <ButtonBox  key={index} onClick={() => setEpisodeCurrent(index)}>{ index+1 }</ButtonBox>
                )
              }
            })
          }


         
        </ListBox>
      </>
    )
  }
}

const mapStateToProps = (state) => {

  const { id, url, episode, subTitle, watchActive,  lists } = state.playerParams
  return {
    id,
    url,
    episode,
    subTitle,
    watchActive,
    lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEpisodeCurrent(id) {
      const action = {
        type: EPISODE_CURRENT,
        id
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
