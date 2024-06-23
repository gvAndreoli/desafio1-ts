import { login } from "./login"

describe('login', () =>{
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('Deve exibir uma mensagem de login realizado', ()=> {
        login()
        expect(mockAlert).toHaveBeenCalledWith("Seja Bem Vindo")
    })
})