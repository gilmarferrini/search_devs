import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  min-height: 30rem;
  width: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #261D5C;
  border-radius: 0.6rem;
`
export const Title = styled.h1`
  font-size: 1.6rem;
`;

export const Field = styled.div`
  margin-top: 1rem;
  width: 80%;
  p {
    margin: 0.4rem 0;
  }

  input {
    min-width: 100%;
    padding: 1rem;
    border-radius: 0.4rem;

    font-size: 1rem;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 80%;
  height: 2rem;
  border-radius: 0.4rem;
  background: ${props => props.theme.colorPrimaryBackground};
  cursor: pointer;

  font-size: 0.8rem;
  font-weight: bold;
  color: ${props => props.theme.colorPrimaryText}
`

