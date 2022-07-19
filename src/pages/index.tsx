import type { NextPage } from 'next'
import * as React from 'react'
import { Box, ChakraProvider, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Router from 'next/router';


const Home: NextPage = () => {


function europeRoute(){
  Router.push({
    pathname: '/europe'
  })
}

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

        <Box h={500} w='100%' paddingX={100} paddingY={50}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <Box as='button' onClick={europeRoute} backgroundImage='Europe.svg' w='100%' h='100%'>
                <Stack padding={180}>
                  <Text fontFamily='Poppins' fontWeight='medium' fontSize='4xl' color='white' >
                    Europa
                  </Text>
                  <Text as='sub' fontFamily='Poppins' fontWeight='medium' fontSize='xl' color='white'>
                    O continente mais antigo.
                  </Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box backgroundSize='100%' backgroundImage='America.jpg' w='100%' h='100%'>
                <Stack padding={180}>
                  <Text fontFamily='Poppins' fontWeight='medium' fontSize='4xl' color='white' >
                    America
                  </Text>
                  <Text as='sub' fontFamily='Poppins' fontWeight='medium' fontSize='xl' color='white'>
                    Segundo maior continente em área.
                  </Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box backgroundSize='100%' backgroundImage='Asia.jpg' w='100%' h='100%'>
                <Stack padding={180}>
                  <Text fontFamily='Poppins' fontWeight='medium' fontSize='4xl' color='white' >
                    Ásia
                  </Text>
                  <Text as='sub' fontFamily='Poppins' fontWeight='medium' fontSize='xl' color='white'>
                    As montanhas mais altas do mundo.
                  </Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box backgroundSize='100%' backgroundImage='Africa.jpg' w='100%' h='100%'>
                <Stack padding={180}>
                  <Text fontFamily='Poppins' fontWeight='medium' fontSize='4xl' color='white' >
                    África
                  </Text>
                  <Text as='sub' fontFamily='Poppins' fontWeight='medium' fontSize='xl' color='white'>
                    Cadeia do Altas e cadeia do Cabo.
                  </Text>
                </Stack>
              </Box>
            </SwiperSlide>
            
          </Swiper>
        </Box>




      </Stack>

    </ChakraProvider>
  )
}

export default Home