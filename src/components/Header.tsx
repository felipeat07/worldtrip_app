import {Image, Center, Box } from "@chakra-ui/react";

export function Header(){
    return(
        <Box
            w='100%'
            h="100"
            p={6}
        >
            <Center>
                <Image 
                    src="Logo.svg"
                    alt="Logo"
                />
            </Center>
        </Box>
    );
}