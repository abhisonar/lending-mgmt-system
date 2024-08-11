import React from 'react';
import {Avatar} from '@nextui-org/react';
import {BaseColorStatus, BaseRadius, BaseSize} from '../base';
import {IBaseUiProp} from '../base/prop.base';

export interface IUiAvatarProps extends IBaseUiProp {
  src: string;
  size?: BaseSize;
  isBordered?: boolean;
  radius?: BaseRadius;
  color?: BaseColorStatus;
  initials?: string;
}

export const UiAvatar: React.FC<IUiAvatarProps> = ({
  src,
  className,
  size = 'md',
  isDisabled = false,
  isBordered = false,
  radius = 'full',
  color = 'default',
  initials,
}) => {
  return (
    <Avatar
      className={className}
      showFallback={true}
      src={src}
      size={size}
      isDisabled={isDisabled}
      isBordered={isBordered}
      radius={radius}
      color={color}
      name={initials}
    ></Avatar>
  );
};
