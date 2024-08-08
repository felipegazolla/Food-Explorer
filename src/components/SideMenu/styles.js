import styled from "styled-components"

export const Container = styled.aside`
  position: absolute;
  z-index: 1;

  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`

export const Button = styled.button`
  background: none;
  border: none;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
  }
`