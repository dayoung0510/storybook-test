import { Typography } from '@mui/material';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'atom/text',
  component: Typography,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary.main', 'primary.light', 'primary.dark'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Typography {...args}>스토리북 테스트입니다.</Typography>
);

export const Texts = Template.bind({});
