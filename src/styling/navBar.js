import styled from "styled-components";

export const NavBar = styled.div`
    border: 1px solid hotpink;
    width: 80%;
    margin: 0 auto;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
`

export const Clock = styled.div`
    border: 1px solid hotpink;
    width: 80%;
    margin: 0 auto;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
`

export const Days = styled.p`
    border: 1px solid blue;
    margin: 1rem;
    font-size: 0.8rem;
`

export const Hours = styled(Days)``

export const Minutes = styled(Days)``

export const Seconds = styled(Days)``