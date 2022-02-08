import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error';
  disabled?: boolean;
};

const StyledButton: React.FC<Props> = ({
  children,
  variant,
  size,
  color,
  disabled,
}) => {
  return (
    <Button variant={variant} size={size} color={color} disabled={disabled}>
      {children}
    </Button>
  );
};

export default StyledButton;
