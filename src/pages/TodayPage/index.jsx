import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UserContext from '../../context/UserContext';

export default function TodayPage() {
    const navigate = useNavigate()
    const { userContext } = useContext(UserContext);
    const user = userContext;
    console.log(user)

    useEffect(() => {
        user.token == undefined ? navigate("/") : ""
    }, [])

    dayjs.locale('pt-br');
    const date = dayjs().format('dddd, DD/MM').split('-feira').join('')
    const day = date[0].toUpperCase() + date.substring(1)

    const [habits, setHabits] = useState([])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get(url, config)
        promise.then( response => {
            const {data} = response
            setHabits(data)
            const habitsDone = (data.filter(habits => habits.done).length)
            data.length != 0 ? setProgress((habitsDone / data.length)) : setProgress(0)

            console.log(progress)
        })
        promise.catch(err => {
            console.log(`Erro ${err.response.status}, ${err.response.data.message} `)
        })
    }, [])
    
    return (
        <PageToday>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="logo" />
            </Header>

            <Title>
                <h1>{day}</h1>
            </Title>

            <HabitList>
                {(habits.length > 0) ? 
                habits.map(habit => <HabitCard progress={progress} setProgress={setProgress} habits={habits} user={user} id={habit.id} sequence={habit.currentSequence} done={habit.done} record={habit.highestSequence} name={habit.name} key={habit.id} />)
                : 
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                }
            </HabitList>

            <Footer>
                <Link to="/habits">Hábitos</Link>
                <Link to="/Today">
                    <Today>
                        <div style={{ width: 80, height: 80, position: "absolute",  }}>
                            <CircularProgressbar value={progress} maxValue={1} text='' strokeWidth={10} styles={{path:{stroke: '#FFFFFF'}, trail: {stroke: '#52B6FF'}}} />
                        </div>
                        <h1>Hoje</h1>
                    </Today> 
                </Link>
                <Link to="/history">Histórico</Link>
            </Footer>
        </PageToday>
    )
}

function HabitCard({ setProgress, progress, habits, sequence, done, record, name, id, user}) {
    const { setUserContext } = useContext(UserContext);

    const [check, setCheck] = useState(done);
    const [updateSequence, setUpdateSequence] = useState(sequence)
    const [updateRecord, setUpdateRecord] = useState(record)

    function checkHabit() {
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${check ? "uncheck": "check"}`
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.post(url, {},config)
        promise.then( response => {
            const {data} = response
            check ? setUpdateSequence(updateSequence - 1) : setUpdateSequence(updateSequence + 1)
            check ? setUpdateRecord(updateRecord - 1) : setUpdateRecord(updateRecord + 1)

            const totalHabits = habits.length;
            let progressUpdate = check ? (progress - (1 / totalHabits)) : (progress + (1 / totalHabits))
            check ? setProgress(progressUpdate) : setProgress(progressUpdate) 
            
            setUserContext({
                ... user,
                progress: progressUpdate
            })
            console.log(progressUpdate)

            setCheck(!check)
        })
        promise.catch(err => {
            console.log(`Erro ${err.response.status}, ${err.response.data.message} `)
        })
    }

    return (
        <Habit check={check} record={updateRecord >= updateSequence && updateRecord != 0 && check} >
            <h1>{name}</h1>
            <div className="sequences">
                <p className="actual">Sequência atual: <b>{updateSequence} {updateSequence > 0 ? "dia" : "dias" }</b> </p>
                <p className="record">Seu recorde: <b>{updateRecord} {updateRecord > 0 ? "dia" : "dias" }</b></p>
            </div>
            <ion-icon onClick={() => checkHabit()} name="checkbox" ></ion-icon>
        </Habit>
    )
}

const PageToday = styled.div `
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

const HabitList = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 18px;
    p {
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 400;
        color: #666666;
    }
`

const Habit = styled.div `
    width: 100%;
    height: 94px;

    background-color: #FFFFFF;
    border: 1px solid #E7E7E7;

    display: flex;
    flex-direction: column;
    padding: 13px;
    gap: 7px;
    position: relative;
        
    h1 {
        font-family: 'Lexend Deca';
        font-size: 20px;
        font-weight: 400;
        color: #666666;
    }
    .sequences {
        display: flex;
        flex-direction: column;
        p {
            font-family: 'Lexend Deca';
            font-size: 13px;
            font-weight: 400;
            color: #666666;
            line-height: 1.2;
        }
        .actual {
            b {
                color: ${props => props.check ? "#8FC549": "#666666"};
            }
        }
        .record {
            b {
                color: ${props => props.record ? "#8FC549": "#666666"};
            }    
        }
    }

    ion-icon {
        font-size: 80px;
        position: absolute;
        color: ${props => props.check ? "#8FC549" : "#666666"};
        top: 5px;
        right: 8px;
    }
`