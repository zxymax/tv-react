import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card(props) {

  const { plotTitle, plotContent, plotTime, plotImgSrc }  = props.plotItems
  return (
    <Box m={2}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '100%' }}
        h={{ sm: '100%', md: '180'}}
        direction={{ base: 'column', md: 'row' }}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            h={{ sm: '120', md: '150' }}
            src={plotImgSrc}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          p={1}
          pt={2}>

          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2md'}
            fontFamily={'body'}>
<Stack mt={2} direction={'row'} spacing={4}>
          <Text flex={1}
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={600}
            flex={2} 
            fontSize={'md'}>

            { plotTitle }{' '}
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            '{ plotTime }
          </Badge>
          </Text>

</Stack>
          </Heading>
          <Text
            color={useColorModeValue('gray.700', 'gray.400')}
            fontSize={'xs'}
            px={3}>
            { plotContent }
          </Text>

        </Stack>
      </Stack>
    </Box>
  );
}
