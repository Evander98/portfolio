import styled, { css } from 'styled-components'

export const ContactContainer = styled.div`
    height: 100%;
    background: ${({theme}) => theme.solitude};
    text-align: center;
    padding: 10px;

    /* @media screen and (max-height: 721px){
        height: 100%;
    } */
`

export const Title = styled.h1`
    color: ${({theme}) => theme.summerSky};
    margin: 20px;
`

export const ContactWrapper = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* background-color: red; */

    &:nth-child(odd){
        margin-top: 20px;
        background-color: white;
        border-radius: 10px;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        margin-bottom: 20px;
    }
`

export const ItemWrapper = styled.div`
    /* background-color: blue; */
    @media screen and (min-width: 430px){
        margin: 10px;
    }
`

export const ContactItem = styled.p`
    color: ${({theme}) => theme.summerSky};
    padding: 5px;
    width: 300px;
    /* background-color: red; */
`

export const FormItemWrapper = styled.div`
    /* background-color: red; */
    @media screen and (min-width: 430px){
        margin: 10px;
    }
`

export const FormNameWrapper = styled.div`
    /* background-color: red; */
    @media screen and (min-width: 430px){
        margin: 10px;
    }

    @media screen and (min-width: 800px){
        width: 100%;
    }
`

export const NameWrapper = styled.div`
    /* background-color: blue; */
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 430px){
        margin: 10px;
    }

    @media screen and (min-width: 800px){
        flex-direction: row;
        width: 85%;
    }
`

export const FormItem = styled.div`
    color: ${props => props.theme.trout};
    text-align: left;
    margin: 5px;
`

export const ContactInput = styled.input`
    font-size: 16px;
    color: ${props => props.theme.trout};
    width: 70vw;
    height: 32px;
    border: 1px solid ${props => props.theme.suvaGrey};
    border-radius: 25px;
    outline: none;
    padding: 6px 12px;
    transition: border-color .4s;

    &:focus{
        border-color: ${({theme}) => theme.summerSky};
    }
`

export const NameInput = styled.input`
    font-size: 16px;
    color: ${props => props.theme.trout};
    width: 70vw;
    height: 32px;
    border: 1px solid ${props => props.theme.suvaGrey};
    border-radius: 25px;
    outline: none;
    padding: 6px 12px;
    transition: border-color .4s;

    &:focus{
        border-color: ${({theme}) => theme.summerSky};
    }

    @media screen and (min-width: 800px){
        width: 90%;
    }
`

export const Message = styled.textarea`
    font-size: 16px;
    color: ${props => props.theme.trout};
    width: 69.5vw;
    border: 1px solid ${props => props.theme.suvaGrey};
    border-radius: 25px;
    outline: none;
    padding: 15px 15px;
    transition: border-color .4s;

    &:focus{
        border-color: ${({theme}) => theme.summerSky};
    }
`