import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 32px 24px;
    ${({ theme }) => css`
      background-color: ${theme.color.neutral.nth4};
    `}
`

export const FormView = styled.View`
  height: 92%;
  justify-content: space-between;
`

export const InputView = styled.View`
`

export const ButtonView = styled.View`

`
export const TitleView = styled.View`
  margin-top: 16px;
`