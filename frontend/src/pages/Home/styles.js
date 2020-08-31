import styled from 'styled-components';

export const HomeContainer = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const Actions = styled.div`
  position: absolute;
  top: 1.1rem;
  right: 1rem;


  a {
    background: ${props => props.theme.colorPrimaryButtons};
    padding: 0.6rem;
    border-radius: 0.4rem;
    font-size: 0.8rem;
    font-weight: bold;
  }

  a + a {
    margin-left: 1rem;
  }

`;


export const Main = styled.main`
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.6rem;
`
