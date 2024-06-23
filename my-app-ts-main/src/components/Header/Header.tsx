import { Flex, Heading, Image, Spacer } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex padding={'1% 5%'}>
            <Heading as={'h2'} size={'xl'}>DIO Bank</Heading>
            <Spacer />
            <Image boxSize={'50px'} borderRadius={'full'} src="https://avatars.githubusercontent.com/u/26231823?s=200&v=4" alt="Logo da dio"/>
        </Flex>
    )
}