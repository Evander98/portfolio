import styled from 'styled-components'

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

    @media screen and (min-width: 899px){
        width: 899px;
    }
`

export const LogoItem = styled.img`
    height: 130px;
    margin: 20px;

    ${props => {
        if(props.height){
            return css`
                height: ${props.height}
            `
        }
    }}
`