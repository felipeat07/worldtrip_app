import { Image, Center, Box, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export function Header() {

    const Router = useRouter();

    function backButton() {
        Router.push({
            pathname: '/'
        })
    }

    const [headerButton, setHeaderButton] = useState(false);

    useEffect(()=>{
        if(Router.pathname != '/'){
            setHeaderButton(true)
        }
    }, [Router.asPath])

    return (
        <Box
            w='100%'
            h="100"
            paddingTop={8}
        >
            <Button
                border='none'
                cursor='pointer'
                bg='transparent'
                _hover={{
                    bg: 'transparent'
                }}
                _active={{
                    bg: 'transparent'
                }}
                onClick={backButton}
                display={headerButton ? 'block' : 'none'}
                position='absolute'
            >
                <ChevronLeftIcon
                    fontSize='3xl'
                    marginLeft={100}
                />
            </Button>

            <Center>
                <Image
                    src="Logo.svg"
                    alt="Logo"
                    justifyContent='center'
                />
            </Center>
        </Box>
    );
}