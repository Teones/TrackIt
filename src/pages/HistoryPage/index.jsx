import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios"

export default function HistoryPage() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <History>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="logo" />
            </Header>
            <Title>
                <h1>Meus Hábitos</h1>
                <button onClick={() => setAdd(true)}>+</button>
            </Title>
        </History>
    )
}

const History = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: #D4D4D4;
`

const Header = styled.div`
    width: 100vw;
    height: 70px;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;

    font-family: "Playball";
    font-size: 39px;
    font-weight: 400;
    color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;

    position: fixed;
    top: 0;

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 98px 17px 28px 17px;

    h1 {
        font-family: "Lexend Deca";
        font-size: 23px;
        font-weight: 400;
        color: #126BA5;
    }
    button {
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        
        font-size: 27px;
        color: #FFFFFF;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`