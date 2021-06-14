import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 32px 24px;
    ${({ theme }) => css`
      background-color: ${theme.color.neutral.nth4};
    `}
`

export const ButtonView = styled.View`
  margin-top: 296px;
`
export const TitleView = styled.View`
  margin-top: 16px;
`

export const VideoView = styled.View`
  width: 272px ;
  height: 171px ;
  justify-content: space-between;
  border-radius: 20px;

`