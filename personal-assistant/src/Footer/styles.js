import styled from 'styled-components'

export const StyledFooter = styled.footer`
  height: auto;
  padding: 15px;
  font-family: ${ ({theme}) => theme.font.footer.family };
  font-weight: ${ ({theme}) => theme.font.footer.weight };
  color: ${ ({theme}) => theme.color.lightyellow };
  font-size: 16px;
  background-color: ${ ({theme}) => theme.color.blue };
  text-align: center;
`

