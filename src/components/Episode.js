import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Container, Radio, RadioGroup, Alert, AlertIcon, Stack, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { THE_LAST_EPISODE, NEXT_EPISODE, EPISODE_CURRENT } from '../store/actionTypes'



const LinkA = styled.a`
  text-decoration: none;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

function EpisodeList(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')


  const stateParams = useSelector(state => state.playerParams)
  const [watchActive, setWatch] = useState(stateParams.watchActive)

  useEffect(() => {
    setWatch(stateParams.watchActive)
  }, [stateParams.id])

  const { titleList } = props
  return (
    <>
      <Container maxW='100%' p={8}>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme='blue' size="sm" width="120px" height="20px" onClick={onOpen}>
          查看更多
        </Button>
        <Drawer placement={placement} size="sm" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>火影忍者</DrawerHeader>
            <DrawerBody>
              {
                titleList.length>0 && titleList.map((item, index) => {
                  return watchActive === index 
                  ?
                    (
                      <Alert key={index} m={2} status='success' variant='solid'>
                        <AlertIcon />
                        { item.episode } - { item.subTitle }
                      </Alert>
                    )
                  :

                  (
                    <Alert key={index} m={2} status='success' variant='subtle'>
                      <LinkA> { item.episode } - { item.subTitle } </LinkA>
                    </Alert>
                  )
                })
              }
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  const titleList = state.playerParams.lists
  return {
    titleList
  }
}
export default connect(mapStateToProps)(EpisodeList)
