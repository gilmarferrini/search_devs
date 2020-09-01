import styled from 'styled-components';

export const MenuContainer = styled.main`
  width: 80%;
  height: 100%;
  margin: 1rem auto;
  text-align: center;

  button {
    font-size: 1rem;
    padding: 0.3rem;
    border-radius: 0.4rem;
    margin-left: 2rem;
    background: ${props => props.theme.colorPrimaryButtons};
    cursor: pointer;
  }

  h1 {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }


  @media (max-width: 700px) {
    h1 {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    div {
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      height: 24rem;
    }
  }

`
export const Profile = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    height: 3.4rem;
    width: 3.4rem;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    margin-left: 1rem;
  }

  @media (max-width: 700px) {
    top: 1rem;
    right: 1rem;
    img {
      height: 2rem;
      width: 2rem;
    }

    p {
      font-size: 0.8rem;
      margin-left: 0.4rem;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;

  max-width: 100%;
  height: 6rem;

  border-radius: 0.8rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${props => props.theme.colorSecondaryBackground};

  img,
  h3,
  article,
  span {
    margin: 0 0.8rem;
  }

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }

  article {
    max-width: 50%;
    overflow: hidden;
  }

  span {
    background: green;
    padding: 1rem;
    border-radius: 0.6rem
  }

`;
