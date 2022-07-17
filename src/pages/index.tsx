import type { NextPage } from 'next'
import * as React from 'react'
import { Box, ChakraProvider, Divider, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'


const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Header />

      <Stack spacing={20}>

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
                spacing={3}
                w='100%'
              >
                <Text fontFamily='Poppins' fontWeight='medium' fontSize='4xl' color='white' >
                  5 Continentes, <br /> infinitas possibilidades.
                </Text>

                <Text fontFamily='Poppins' fontWeight='regular' fontSize='xl' color='white'>
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou.
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

        <Box>

          <HStack
            spacing={20}
            marginTop={20}
            justifyContent='center'
          >

            <Box>
              <Image src='Nightlife.svg' />
            </Box>

            <Box>
              <Image src='Beach.svg' />
            </Box>

            <Box>
              <Image src='Modern.svg' />
            </Box>

            <Box>
              <Image src='Classic.svg' />
            </Box>

            <Box>
              <Image src='More.svg' />
            </Box>

          </HStack>

        </Box>

        <Box 
          borderTop='2px solid #47585B' 
          width={90} 
          alignSelf='center'
        >
        </Box>

        <Box>
          <Text 
            fontFamily='Poppins' 
            fontWeight='medium' 
            fontSize='4xl' 
            color='#47585B' 
            align='center'
          >
                  Vamos nessa? <br /> Então escolha seu continente
          </Text>
        </Box>

      </Stack>

    </ChakraProvider>
  )
}

export default Home
