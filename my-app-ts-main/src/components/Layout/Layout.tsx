import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Box } from "@chakra-ui/react"


export const Layout = ({children}: any) => {
    return (
        <>
        <Header />
        <Box minHeight={'100vh'} backgroundColor={'purple.500'} display={'flex'} justifyContent={"center"} alignItems={"center"}>
            <Box background={'white'} width={['90%', '80%', '65%', '55%']} borderRadius={'25px'} padding={"20px"} boxShadow={'lg'}>
                {children}
            </Box>
        </Box>
        <Footer />
        </>
    )
}