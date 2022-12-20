import styled from "styled-components"


export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
`

export const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    * {
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-size: 20px;
        font-weight: 400;
    }

    img {
        width: 180px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        input {
            width: 303px;
            heigth: 45px;
            border: 1px solid #D4D4D4;
            border-radius: 3px;
            color: #DBDBDB;
            padding: 11px;
            disabled: ${props => props.loading}
        }

        button {
            width: 303px;
            height: 45px;
            background: #52B6FF;
            color: #FFFFFF;
            border: 1px solid #52B6FF;
            border-radius: 4px;
            cursor: pointer;
            disabled: ${props => props.loading? ("true"):("false")}
        }

        a {
            color: #52B6FF;
        }

        .register {
            display: flex;
            justify-content: center;
            align-items: center;

            TailSpin {
                height: 12px;
            }
        }
    }
`