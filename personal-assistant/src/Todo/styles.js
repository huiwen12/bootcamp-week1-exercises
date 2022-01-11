import styled from 'styled-components'

export const StyledContainer = styled.div`
    background: ${ ({theme}) => theme.color.blue };
    border: none;
    padding: 3% 10%;
    width: 50%;
    border: 3px solid ${ ({theme}) => theme.color.lightblue } ;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  
`

// export const todoButton = styled.button`
//   background: ${ ({theme}) => theme.color.lightblue };
//   color: ${ ({theme}) => theme.color.blue };
//   height: 15rem;
//   border: none;
//   border-radius: 5%;
//   padding: auto;
//   cursor: pointer;

//   &:hover {
//     color: ${ ({theme}) => theme.color.black };
//   }
// `

export const InputContainer = styled.div`
    margin: auto;
    padding: 3% 10%;
    display: flex;
    justify-content: center;
`


export const PrettyH1 = styled.h1`
    font-family: ${ ({theme}) => theme.font.h1.family };
    font-weight: ${ ({theme}) => theme.font.h1.weight };
    color: ${ ({theme}) => theme.color.beige};
    text-align: center;
`

export const PrettyH2 = styled.h2`
    font-family: ${ ({theme}) => theme.font.paragraph.family };
    font-weight: ${ ({theme}) => theme.font.h2.weight };
    color: ${ ({theme}) => theme.color.lightyellow};
    font-size: 18px;
    font-style: italic;
    text-align: center;
`

export const PrettyParagraph = styled.p`
    font-family: ${ ({theme}) => theme.font.paragraph.family };
    font-weight: ${ ({theme}) => theme.font.paragraph.weight };
    color: ${ ({theme}) => theme.color.black };
    font-size: 16px;
    text-align: center;
`

