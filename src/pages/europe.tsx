import { Box, ChakraProvider, HStack, Stack, Text, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Europe() {


    return (
        <ChakraProvider>
            <Header />

            <Stack spacing={20}>

                <Box
                    maxWidth='100%'
                    h="500"
                    backgroundImage="Europe2.svg"
                >
                    <Text 
                        fontFamily='Poppins' 
                        fontWeight='medium' 
                        fontSize='4xl' 
                        color='white'
                        paddingTop={369}
                        paddingLeft={140} 
                    >
                        Europa
                    </Text>

                </Box>

                <Box>
                    <HStack spacing={40}>
                        <Box w={600} h={211}>
                            <Text
                                fontFamily='Poppins' 
                                fontWeight='medium' 
                                fontSize='lg' 
                                color='#47585B'
                                padding={10}
                                textAlign='justify'
                            >
                             A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                            </Text>
                        </Box>

                        <Box>
                            <Image src="Info.svg"/>
                        </Box>
                    </HStack>
                </Box>

                <Box>
                <Text 
                        fontFamily='Poppins' 
                        fontWeight='medium' 
                        fontSize='4xl' 
                        color='#47585B'
                        paddingX={10}
                    >
                        Cidades +100
                    </Text>
                </Box>

                <Box h={600} w={800}>
                    <HStack 
                        spacing={10}
                        padding={20}
                    >
                            <Image src="Londres.svg"/>
                            <Image src="Paris.svg"/>
                            <Image src="Praga.svg"/>
                            <Image src="Roma.svg"/>
                        
                    </HStack>
                </Box>

            </Stack>
        </ChakraProvider>
    )
}