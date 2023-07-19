import { ComponentType, FC, ReactElement, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { styled } from 'styled-components';

export enum SpacerSize {
  sx = '1',
  md = '2',
  lg = '3',
}

export enum SpacerVariant {
  top = 'top',
  left = 'left',
}

const SPACER_VIEWS: { [key: string]: ComponentType<ViewProps> } = Object.values(
  SpacerVariant
).reduce(
  (acc, variant) => ({
    ...acc,
    ...Object.values(SpacerSize).reduce(
      (acc, size) => ({
        ...acc,
        [`${variant}.${size}`]: styled(View)`
          margin-${variant}: ${(props) => props.theme.space[parseInt(size)]};
        `,
      }),
      {}
    ),
  }),
  {}
);

const Spacer: FC<{
  variant: SpacerVariant;
  size: SpacerSize;
  children: ReactNode;
}> = ({ variant, size, children }) => {
  const SpacerView = SPACER_VIEWS[`${variant}.${size}`] || View;
  return <SpacerView>{children}</SpacerView>;
};

export default Spacer;
