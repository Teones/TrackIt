import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HistoryPage() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <History>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="logo" />
            </Header>

            <Title>
                <h1>Histórico</h1>
            </Title>

            <ListHabits>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui</p>
            </ListHabits>

            <Footer>
                <Link to="/habits">Hábitos</Link>
                <Link to="/Today">
                    <Today>
                        <h1>Hoje</h1>
                    </Today> 
                </Link>
                <Link to="/history">Histórico</Link>
            </Footer>
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

const ListHabits = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 18px;
    gap: 10px;  
    
    p {
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 400;
        color: #666666;
    }
`

const Footer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    
    display: flex;
    padding: 0 36px;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;

    a:-webkit-any-link {
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
        color: #52B6FF;
    }
`

const Today = styled.div`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 50%;

    position: relative;
    bottom: 20px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin-bottom: 4px;
        margin-right: 5px;
    }
`