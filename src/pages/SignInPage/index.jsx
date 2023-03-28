import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function SignInPage() {
    return (
        <SignIn>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Form>
                <form>
                    <input type="email" placeholder="Ex: contato@dominio.com" />
                    <input type="password" placeholder="Ex: senha123" />
                    <button>Entrar</button>
                </form>
                <Link to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </Form>
        </SignIn>
    )
}

const SignIn = styled.div `
    width: 100%;
    min-height: 100vh;
    gap: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    /* img {
        width: 180px;
    } */
`

const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 36px;
    gap: 25px;

    form {
        display: flex;
        flex-direction: column;
        gap: 6px;

        input {
            width: 100%;
            height: 45px;
            
            padding-left: 11px;

            border: 1px solid #D4D4D4;
            border-radius: 5px;
            
            font-family: 'Lexend Deca', sans-serif;
            color: #DBDBDB;
            font-size: 16px;
            font-weight: 400;
        }
        input::placeholder {
            font-family: 'Lexend Deca', sans-serif;
            color: #DBDBDB;
            font-size: 16px;
            font-weight: 400;
        }
        
        button {
            width: 100%;
            height: 45px;
            background-color: #52B6FF;
            
            border: none;
            border-radius: 5px;
            
            font-family: 'Lexend Deca', sans-serif;
            color: #FFFFFF;
            font-size: 21px;
            font-weight: 400;
        }
    }

    p {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #52B6FF;
    }
`
