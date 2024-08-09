import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 1rem 3.5rem;

  #counter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > svg {
      font-size: 2.5rem;
    }

    > span {
      margin: 0 1rem;
    }

    > button {
      margin-left: 1rem;
    }
  }
  
  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    > svg {
      font-size: 1.5rem;
    }
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;

    > h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 1.6875rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 1.5rem;
    }

    > p {
      font-family: 'Poppins', sans-serif;
      font-weight: 200;
      font-size: 1rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      
      margin-bottom: 1.5rem;

      text-align: center;
    }

    > img {
      width: 13rem;
      height: 13rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    > span {
      margin-bottom: 1.5rem;
    }
  }


  
`