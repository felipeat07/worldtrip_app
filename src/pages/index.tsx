import type { NextPage } from 'next'
import * as React from 'react'
import { Box, ChakraProvider, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'


const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Header />

      <Box
        maxWidth='100%'
        h="335"
        backgroundImage="Background.svg"
      >
        <HStack
          spacing={200}
          align='flex-start'
          paddingTop="100"
          paddingLeft="140"
        >
          <Box>
            <Stack
              spacing={4}
              w='100%'
            >
              <Text fontSize='4xl' color='white' >
                5 Continentes, <br /> infinitas possibilidades.
              </Text>

              <Text fontWeight='hairline' fontSize='xl' color='white'>
                Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
              </Text>
            </Stack>

          </Box>
          <Box>
            <Image
              src='Airplane.svg'
            />

          </Box>
        </HStack>

      </Box>



    </ChakraProvider>
  )
}

export default Home
