import styled from 'styled-components'


export const PrettyButton = styled.button`
  background: ${ ({theme}) => theme.color.lightblue };
  color: ${ ({theme}) => theme.color.black };
  height: 2.5rem;
  border: none;
  border-radius: 5%;
  padding: auto;
  cursor: pointer;
  margin: 0px 10px;

  &:hover {
    color: ${ ({theme}) => theme.color.blue };
  }
`



