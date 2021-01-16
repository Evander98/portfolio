import styled, { css } from 'styled-components'

export const ContactMeButton = styled.button`
    appearance: none;
    background-color: #007BFF;
    border: 1px white;
    border-radius: 25px 25px;
    color: white;
    padding: .65rem 1.90rem;
    font-size: 1.1rem;
    font-weight: 400;
    transition: background-color .4s;
    
    &:hover{
        background-color: rgb(85, 123, 255);
    }

    ${props => {
        if(props.margin){
            return css`
                margin: ${props.margin};
            `
        }
    }}
`