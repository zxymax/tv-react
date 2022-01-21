import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Alert,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel ,
  useColorModeValue,
} from '@chakra-ui/react';

import PlayList from './player/PlayList'
import SwitchEpisode from './player/SwitchEpisode'
import Player from './player'
import PlotTab from './PlotTab'
import PlotTabContentList from './PlotTabContentList'

export default function ContainerSection({ children }) {
  return (
    <Center p={5} >
      <Box
        maxW={'100%'}
        w={'full'}
        h={'100%'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={{ sm: '300', md: '520' }}
          bg={'pink.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Player />
        </Box>
        <Stack spacing={3}>
          <Alert status='info'>

            <SwitchEpisode/>

          </Alert>
        </Stack>
        <Stack mt={6}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Tabs isLazy>
              <TabList>
                <Tab>剧集列表</Tab>
                <Tab>分集剧情</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <PlayList />
                </TabPanel>
                <TabPanel>
                  <PlotTab />
                  <PlotTabContentList />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Stack>
      
      </Box>
    </Center>
  );
}
