import { Box, Flex, Spacer, Container, Grid, GridItem } from '@chakra-ui/react'
import PlayerIframe from './PlayerIframe'


const Player = () => {
   return(
    <Container className="con" h={'100%'} maxW='100%' p={8}>
      <PlayerIframe />
    </Container>
      )
}

export default Player
