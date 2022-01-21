import React, { Component } from 'react'
import { Flex, Spacer, Alert, Grid, GridItem, Stack, Container, Button, ButtonGroup, Text, Box } from '@chakra-ui/react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { THE_LAST_EPISODE, NEXT_EPISODE, EPISODE_CURRENT } from '../../store/actionTypes'

const TitleBox = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin: 20px 0 20px;
`

class PlayList extends Component {
  constructor(props) {
    super(props)
  }
  render() {  
    const { id, nextEpisode, lastEpisode, episode, subTitle } = this.props
    return (




          <Flex>
            <Box p='2' bg='red.400'>
                  <TitleBox> 火影忍者：{ episode } { subTitle } </TitleBox>
            </Box>
            <Spacer />
            <Box p='2'>
            </Box>


        <Stack spacing={4} direction='row' align='center'>
          <Button onClick={lastEpisode} colorScheme='teal' size='sm'>
            上一集
          </Button>
          <Button onClick={nextEpisode} colorScheme='teal' size='sm'>
            下一集
          </Button>
        </Stack>
     </Flex>




    )
    
  }
}

const mapStateToProps = (state) => {
  const { id, episode, subTitle, watchActive } = state.playerParams
  console.log('watchActive', watchActive)
  return {
    id,
    episode,
    subTitle,
    watchActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lastEpisode() {
      const action = {
        type: THE_LAST_EPISODE
      }
      dispatch(action)
    },
    nextEpisode() {
      const action = {
        type: NEXT_EPISODE
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
