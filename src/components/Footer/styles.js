import styled from "styled-components"

export const Container = styled.footer`
  height: 4.8125rem;
  width: 100%;

  padding: 1.75rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  display: flex;
  align-items: center;
  justify-content: space-between;

  bottom: 0;

  > p {
    font-size: 0.57rem;
  }

`