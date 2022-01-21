import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Iframe from 'react-iframe'
import { Button, Spacer, Box, Stack,Container, Flex } from '@chakra-ui/react'


const PlayerIframe = () => {

  const stateParams = useSelector(state => state.playerParams)
  const [url, setUrl] = useState(stateParams.url)
  useEffect(() => {
    setUrl(stateParams.url)
  }, [stateParams.id])
  return (
    <Container maxWidth='100%' style={{width: "100%", height: "100%", margin: 0 }}>
        <Iframe url={url}
          id="myId"
          width={'100%'}
          height='100%'
          className="myClassname"
          display="initial"
          position="relative"/>
    </Container>
  )
}

export default PlayerIframe
