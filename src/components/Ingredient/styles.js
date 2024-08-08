import styled from "styled-components"

export const Container = styled.span`
  font-size: 0.75rem;
  padding: 0.5rem;
  border-radius: 5px;
  margin-right: 6px;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`