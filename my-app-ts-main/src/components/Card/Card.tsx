import { Box, Heading, Stack } from "@chakra-ui/react"
import { InputComponent } from "../InputComponent/InputComponent"
import { BtnEnviar } from "../Buttons/ButtonEnviar"
import { login } from "../../services/login"


export const Card = () => {
    return(
      <Box>
        <Heading as='h2' size='lg'>Realize o login</Heading>
        <Stack spacing={4}>
          <InputComponent 
            label={"Email: "} 
            htmlFor={"email"} 
            type={"email"} 
            placeholder="Digite seu email"
          />
          <InputComponent
            label={"Senha: "} 
            htmlFor={"log_password"} 
            type={"password"} 
            placeholder="Digite sua senha"
          />
          <BtnEnviar msg={"Enviar"} event={login} />
        </Stack>
      </Box>
    )
}