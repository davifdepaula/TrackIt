import styled from "styled-components"

export const HabitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;

    * {
        font-family: "Lexend Deca";
    }

    .noHabits {
        display: flex;
        flex-wrap: wrap;
        font-size: 18px;
        color: #666666;
        text-align: center;
    }
`
export const Top =  styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 30px 0px;

    div {
        color: #126BA5;
        font-family: 'Lexend Deca';
        font-size: 23px;
    }

    button {
        cursor: pointer;
        color: #FFFFFF;
        background: #52B6FF;
        border: 1px solid #52B6FF;
        border-radius: 5px;
        font-size: 26px;
        width: 40px;
        height: 35px;

    }
`

export const FormBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    width: 340px;
    border-radius: 5px;
    margin-bottom: 30px;

    form {
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 5px;
        margin: 20px;
    }

    input {
        width 300px;
        height: 45px;
        color: #DBDBDB;
        font-family: "Lexend Deca";
        font-size: 20px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
    }

    .buttons {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 39px;
        gap: 5px;
    }

    .submitButtons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;

        button {
            background: #52B6FF;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            width: 84px;
            height: 35px;
            color: #FFFFFF; 
            cursor: pointer;
            font-family: "Lexend Deca";
            font-size: 16px;
        }

        span {
            font-family: "Lexend Deca";
            font-size: 20px;
            color: #52B6FF;
            cursor: pointer;
        }
    }

`

export const SelectButton = styled.div`
    button {
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        width: 30px;
        background-color: ${props => props.color};
}
`


export const HabitsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFFFFF; 
    width: 300px;
    padding: 10px 20px;
    margin-bottom: 20px;
    gap: 10px;

    .Habitbuttons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div {
        font-family: 'Lexend Deca';
        color: #666666;
        font-size: 20px;
    }

    ion-icon {
        cursor: pointer;
    }

`