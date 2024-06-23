import { Input } from "@chakra-ui/react"

interface IInput {
    label: string
    htmlFor: string
    type: string
    placeholder: string
}

export const InputComponent = ({label, htmlFor, type, placeholder}: IInput) =>{
    return(
        <>
        <label htmlFor={htmlFor}> {label} </label>
        <Input id={htmlFor} type={type} placeholder={placeholder}/>
        </>
    )
}