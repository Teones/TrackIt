import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react"
import axios from "axios"

import logo from "../../assets/logo.png";

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    
    const navigate = useNavigate()

    function signUp() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

        const promise = axios.post(URL, {
            email: email,
            name: name,
            image: image,
            password: password
        })
        promise.then( response => {
            console.log("foi")
            const {data} = response
            console.log(data)
            navigate("/")
        })
        promise.catch(err => console.log(err.response))
    }

    return (
        <SignUp>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Form>
                <>
                <form>
                    <input type="email" id="email" autoComplete="off" placeholder="Ex: contato@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label for="email">Email</label>
                </form>
                <form>
                    <input type="password" id="password" autoComplete="off" placeholder="Ex: senha123" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label for="password">Password</label>
                </form>
                <form>
                    <input type="text" id="name" autoComplete="off" placeholder="Ex: Fulano da Silva" value={name} onChange={(e) => setName(e.target.value)} />
                    <label for="name">Nome</label>
                </form>
                <form>
                    <input type="text" id="image" autoComplete="off" placeholder="Ex: http://imagensaleatorias" value={image} onChange={(e) => setImage(e.target.value)} />
                    <label for="image">Foto</label>
                </form>
                <button onClick={signUp}>Cadastrar</button>
                </>
            </Form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SignUp>
    )
}

const SignUp = styled.div `
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
            color: #DBDBDB;
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
