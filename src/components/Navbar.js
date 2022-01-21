import { Box, Menu, MenuButton, MenuItem, Stack, Button, Avatar, MenuList, Center, HStack, Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={2}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Heading as="h3" size="lg" letterSpacing={'tighter'}>
            JornaMC
          </Heading>
        </Box>

      <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <ThemeToggleButton />

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Jorna Jan</p>
                  </Center>
                  <br />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar

