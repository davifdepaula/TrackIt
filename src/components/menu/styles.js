import styled from "styled-components"

export const MenuContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 120px;
    bottom: 0;
    left: 0;
    z-index: 10;
`

export const MenuContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: #FFFFFF;

    button {
        cursor: pointer;
        text-decoration: none;
        border: none;
        background: none;
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #52B6FF;
        text-decoration: underline;
    }

    .circular {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        background: #52B6FF;
    }

`