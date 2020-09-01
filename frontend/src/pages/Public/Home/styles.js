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

  @media (max-width: 700px) {
    top: 0.2rem;
    right: 0.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 8rem;

    a {
      padding: 0.2rem;
      width: 100%;
      text-align: center;
    }

    a + a {
      margin-left: 0;
      margin-top: 0.4rem;
    }
  }


`;


export const Main = styled.main`
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.6rem;
`
