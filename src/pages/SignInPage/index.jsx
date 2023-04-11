import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios"

import UserContext from "../../context/UserContext";

import logo from "../../assets/logo.png";

export default function SignInPage() {
    const { setUserContext } = useContext(UserContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function signIn() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promise = axios.post(URL, {
            email: email,
            password: password
        })
        promise.then( response => {
            const {data} = response;

            setUserContext( {
                token: data.token,
                image: data.image,
            })

            console.log(data);
            navigate("/habits")
        })
        promise.catch(err => console.log(err.response))
    }

    return (
        <SignIn>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Form>
                <form>
                    <input type="email" id="email" autoComplete="off" placeholder="Ex: contato@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email">Email</label>
                </form>
                <form>
                    <input type="password" id="password" autoComplete="off" placeholder="Ex: senha123" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password">Senha</label>
                </form>
                <button onClick={() => signIn()} >Entrar</button>
            </Form>
            <Link to={"/signUp"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
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
    a:-webkit-any-link {
        text-decoration: underline #52B6FF;
    }
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
    
    gap: 10px;
    padding: 0 36px;

    form {
        display: flex;
        flex-direction: column;
        position: relative;

        input {
            width: 100%;
            height: 45px;
            
            padding-left: 11px;
            
            border: 1px solid #D4D4D4;
            border-radius: 5px;

            outline: none;
            transition: all 0.3s;
            
            font-family: 'Lexend Deca', sans-serif;
            color: #c0c0c0;
            font-size: 16px;
            font-weight: 400;
        }
        input::placeholder {
            font-family: 'Lexend Deca', sans-serif;
            color: #DBDBDB;
            font-size: 16px;
            font-weight: 400;
            opacity: 0;
            transition: all 0.3s;
        }
        input:focus{
            border: 2px solid #52B6FF;
        }
        input:focus::placeholder{
            opacity: 1;
        }
        label {
            height: 45px;

            font-family: 'Lexend Deca', sans-serif;
            color: #DBDBDB;
            font-size: 16px;
            font-weight: 400;

            display: flex;
            flex-direction: column;
            justify-content: center;
            
            position: absolute;
            left: 11px;
            z-index: 1;
            
            transition: all 0.2s;
            user-select: none;
        }
        label::before {
            content: '';
            height: 5px;
            position: absolute;
            left: 0;
            top: 21px;
            width: 100%;
            z-index: -1;
            background-color: #FFFFFF;
        }
        input:focus + label {
            top: -23px;
            font-size: 18px;
            color: #52B6FF;
        }
        input:not(:placeholder-shown)+ label{
            top: -23px;
            color: #52B6FF;
            font-size: 18px;
        }
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
`
