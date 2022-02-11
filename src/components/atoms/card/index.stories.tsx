import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Meta, Story } from '@storybook/react';

type Props = {
  cr?: string;
};

const StyledBox = styled(Box)<Props>`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  background-color: ${({ cr }) => cr};
`;

export default {
  title: 'theming/test',
  component: StyledBox,
  argTypes: {
    backgroundColor: { options: ['w', 'ww'], control: { type: 'select' } },
  },
} as Meta;

const Template: Story = (args) => <StyledBox {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

// export const Test = () => {
//   return (
//     <>
//       <StyledBox sx={{ bgcolor: 'primary.light' }}>primary.light</StyledBox>
//     </>
//   );
// };
