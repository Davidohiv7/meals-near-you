import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { styled } from 'styled-components';

export const CreditCardView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
  height: 100%;
`;

export const CerditCard = styled(Card)`
  width: '100%';
  height: '30%';
  background-color: ${(props) => props.theme.colors.brand.primary};
  justify-content: flex-end;
  align-items: flex-end;
  padding: ${(props) => props.theme.space[3]};
`;

export const ValidityDateContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ValidityDateDateContainer = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export const ValidityDate = styled(Text)`
  color: ${(props) => props.theme.colors.ui.tertiary};
  margin-right: ${(props) => props.theme.space[3]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const ValidityDateTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.tertiary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const ValidityDateContent = styled(Text)`
  margin-top: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const SmallInputsContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CardNumberContainer = styled(View)`
  align-items: flex-end;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CardNumber = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const CerditCardBack = styled(Card)`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const BlackStripe = styled(View)`
  width: 100%;
  height: 48px;
  margin-top: 15%;
  background-color: black;
  align-items: center;
`;

export const CvvContainer = styled(View)`
  height: 48px;
  background-color: white;
  width: 30%;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const CvvText = styled(Text)`
  margin-top: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;
