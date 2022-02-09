import ColorContainer from 'components/atoms/containers/ColorContainer';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Box from '@mui/material/Box';
import { red, blue, pink } from '@mui/material/colors';

const StyledBox = styled(Box)`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
`;

export default {
  title: 'atom/color',
  component: StyledBox,
};

export const Colors = () => {
  return (
    <>
      <Title>default colors</Title>
      <ColorContainer>
        <StyledBox sx={{ background: red[100] }}>red[100]</StyledBox>
        <StyledBox sx={{ background: red[300] }}>red[300]</StyledBox>
        <StyledBox sx={{ background: red[500] }}>red[500]</StyledBox>
        <StyledBox sx={{ background: red[700] }}>red[700]</StyledBox>
        <StyledBox sx={{ background: red[900] }}>red[900]</StyledBox>
      </ColorContainer>
      <ColorContainer>
        <StyledBox sx={{ background: blue[100] }}>blue[100]</StyledBox>
        <StyledBox sx={{ background: blue[300] }}>blue[300]</StyledBox>
        <StyledBox sx={{ background: blue[500] }}>blue[500]</StyledBox>
        <StyledBox sx={{ background: blue[700] }}>blue[700]</StyledBox>
        <StyledBox sx={{ background: blue[900] }}>blue[900]</StyledBox>
      </ColorContainer>
      <ColorContainer>
        <StyledBox sx={{ background: pink[100] }}>pink[100]</StyledBox>
        <StyledBox sx={{ background: pink[300] }}>pink[300]</StyledBox>
        <StyledBox sx={{ background: pink[500] }}>pink[500]</StyledBox>
        <StyledBox sx={{ background: pink[700] }}>pink[700]</StyledBox>
        <StyledBox sx={{ background: pink[900] }}>pink[900]</StyledBox>
      </ColorContainer>

      <Title>custom colors</Title>
      <ColorContainer>
        <StyledBox sx={{ bgcolor: 'primary.light' }}>primary.light</StyledBox>
        <StyledBox sx={{ bgcolor: 'primary.main' }}>primary.main</StyledBox>
        <StyledBox sx={{ bgcolor: 'primary.dark' }}>primary.dark</StyledBox>
        <StyledBox sx={{ bgcolor: 'secondary.light' }}>
          secondary.light
        </StyledBox>
        <StyledBox sx={{ bgcolor: 'secondary.main' }}>
          secondary.light
        </StyledBox>
        <StyledBox sx={{ bgcolor: 'secondary.dark' }}>
          secondary.light
        </StyledBox>
      </ColorContainer>
    </>
  );
};
