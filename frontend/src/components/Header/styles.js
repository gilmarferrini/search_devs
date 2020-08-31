import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;

  width: 100%;
  height: 4rem;
  border: 1px solid ${props => props.theme.colorPrimaryBorder};

  a + a {
    margin-left: 1rem;
  }
`;
