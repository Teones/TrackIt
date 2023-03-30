import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios"

export default function HabitsPage() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [add, setAdd] = useState(false);
    // const [day, setDay] = useState([]);
    const [habitName, setHabitName] = useState("");

    const week = [
        {day: "domingo", acronym: "D", number:0},
        {day: "segunda", acronym: "S", number:1},
        {day: "terça", acronym: "T", number:2},
        {day: "quarta", acronym: "Q", number:3},
        {day: "quinta", acronym: "Q", number:4},
        {day: "sexta", acronym: "S", number:5},
        {day: "sábado", acronym: "S", number:6}
    ]

    return (
        <Habits>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="logo" />
            </Header>
            <Title>
                <h1>Meus Hábitos</h1>
                <button onClick={() => setAdd(!add)}>+</button>
            </Title>

            {add ? 
                <ListHabits>
                    <HabitCreator>
                        <form>
                            <input type="text" id="habitName" autoComplete="off" placeholder="Ex: Acordar cedo" value={habitName} onChange={(e) => setHabitName(e.target.value)} />
                            <label htmlFor="habitName">Hábito</label>
                        </form>
                        <DaysOfWeek>
                            {week.map(day => <Button acronym={day.acronym} number={day.number}/> )}
                        </DaysOfWeek>
                    </HabitCreator>
                </ListHabits> :
                <ListHabits>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </ListHabits>
            }

            <Footer>
                <Link to="/habits">Hábitos</Link>
                <Link to="/Today">
                    <Today>
                        <h1>Hoje</h1>
                    </Today> 
                </Link>
                <Link to="/history">Histórico</Link>
            </Footer>
        </Habits>
    )
}

function Button({acronym, number}) {
    // const [select, setSelect] = useState(false)
    
    // let css = `${selecionar}`

    // if(select === true) {
    //     setDay(number)
    // }

    return (
        <button >
            {acronym}
        </button>
    )
}

const Habits = styled.div`
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

    p {
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 400;
        color: #666666;

        padding: 0 17px;
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

const HabitCreator = styled.div `
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    padding: 18px 19px;
    margin: 0 17px;
    margin-bottom: 29px;

    form {
        display: flex;
        flex-direction: column;
        position: relative;

        input {
            width: 100%;
            height: 45px;
            background-color: #FFFFFF;
            
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
`

const DaysOfWeek = styled.div `
    width: 100%;
    display: flex;
    
    button {
        width: 30px;
        height: 30px;
        background-color: #52B6FF;
        
        border: none;
        border-radius: 5px;
        
        font-family: 'Lexend Deca', sans-serif;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 400;
    }
`