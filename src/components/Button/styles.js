import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 3rem;
  border: 0;
  border-radius: 5px;
  padding: 0.75rem 2rem;
  font-weight: 500;
  font-size: 0.875rem;

  &:disabled {
    opacity: 0.5;
  }
`