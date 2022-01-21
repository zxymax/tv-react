import React, { Component } from 'react'
import { useSelector } from 'react-redux'

import { Box, Stack, Flex, List, ListItem, Container } from '@chakra-ui/react';
import plotList from '../api/hy'
import Card from './Card'

const arr = [plotList[0], plotList[1], plotList[2], plotList[3], plotList[4]]

const Demo = () =>  {

  const { plotList } = useSelector(state => state.plotParams)
    const { plotTitle, plotContent, plotTime, plotImgSrc }  = arr
    return (
      <Box m={8}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '100%' }}
          direction={{ base: 'column', md: 'row' }}
          boxShadow={'2xl'}
          padding={4}>
          <Stack
            flex={2}
            flexDirection="column"
            justifyContent="center"
            p={1}
          >
          <Container flex='1' maxW={'900px'} >
              {
                plotList.length > 0 && plotList.map((item, index) => {
                  return <Card key={index} plotItems={item} />
                })
              }
            </Container>

          </Stack>
          <Flex flex={1} bg="blue.200">

          </Flex>
        </Stack>
      </Box>
    )
}

export default Demo




