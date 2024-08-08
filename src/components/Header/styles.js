import styled from "styled-components"

export const Container = styled.header`
  height: 7.125rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 40px 20px;

  background: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Menu = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`