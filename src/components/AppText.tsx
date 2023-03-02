import React from 'react';
import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 33px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE };
  font-family: 'Overpass_600SemiBold';
  margin-left: 28px;
  font-weight: 600;
  margin-right: 28px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  align-items: center;
  /* justify-content: center; */
`;

export const Logo = styled.Image`
  margin: 137px 69px 57px 69px;
  width: 222px;
  height: 214px;
`;

export const Description = styled.Text`

`