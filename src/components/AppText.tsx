import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 33px;
  line-height: 42px;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE };
  font-family: 'Overpass_600SemiBold';
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 33px;
`;

export const Description = styled.Text`
  font-family: 'Overpass_400Regular';
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY100 };
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 72px;
  `;
export const Logo = styled.Image`
  margin: 137px 69px 57px 69px;
  width: 222px;
  height: 214px;
`;

export const Button = styled.TouchableOpacity `
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color:${({theme}) => theme.COLORS.DARK100};
  width: 328px;
  height: 54px;
  border: 1px solid #838384;
  border-radius: 18px;
`;

export const TextButton = styled.Text `
  flex: 1;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE };
  font-family: 'Overpass_400Regular';
  font-size: 22px;
  line-height: 28px;
  margin: 15px 92px;
`;
