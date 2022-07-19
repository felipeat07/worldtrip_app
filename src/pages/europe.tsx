import { ChakraProvider, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../components/Header";

export default function Europe() {


    return (
        <ChakraProvider>
            <Header />
        </ChakraProvider>
    )
}