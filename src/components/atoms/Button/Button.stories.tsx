import ButtonContainer from 'components/atoms/containers/ButtonContainer';
import ColorContainer from 'components/atoms/containers/ColorContainer';
import Title from 'components/atoms/Title';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';

export default {
  title: 'atom/button',
  component: Button,
};

export const Styles = () => {
  return (
    <>
      <Title>contained</Title>
      <ButtonContainer>
        <Button variant="contained" color="primary">
          확인
        </Button>
        <Button variant="contained" color="secondary">
          확인
        </Button>
        <Button variant="contained" color="error">
          확인
        </Button>
      </ButtonContainer>

      <Title>outlined</Title>
      <ButtonContainer>
        <Button variant="outlined" color="primary">
          확인
        </Button>
        <Button variant="outlined" color="secondary">
          확인
        </Button>
        <Button variant="outlined" color="error">
          확인
        </Button>
      </ButtonContainer>

      <Title>text</Title>
      <ButtonContainer>
        <Button variant="contained">확인</Button>
        <Button variant="text">확인</Button>
        <Button variant="outlined">확인</Button>
      </ButtonContainer>

      <Title>disabled</Title>
      <ButtonContainer>
        <Button color="primary" disabled>
          확인
        </Button>
        <Button color="secondary" disabled>
          확인
        </Button>
        <Button color="error" disabled>
          확인
        </Button>
      </ButtonContainer>

      <Title>start icon</Title>
      <ButtonContainer>
        <Button color="primary" variant="contained" startIcon={<DeleteIcon />}>
          삭제
        </Button>
        <Button startIcon={<DeleteIcon />} variant="outlined">
          삭제
        </Button>
        <Button startIcon={<DeleteIcon />}>삭제</Button>
      </ButtonContainer>

      <Title>end icon</Title>
      <ButtonContainer>
        <Button color="primary" variant="contained" endIcon={<DeleteIcon />}>
          삭제
        </Button>
        <Button endIcon={<DeleteIcon />} variant="outlined">
          삭제
        </Button>
        <Button endIcon={<DeleteIcon />}>삭제</Button>
      </ButtonContainer>
    </>
  );
};

export const Sizes = () => {
  return (
    <>
      <Title>small</Title>
      <ButtonContainer>
        <Button color="error" size="small">
          확인
        </Button>
        <Button variant="outlined" color="secondary" size="small">
          확인
        </Button>
        <Button variant="contained" size="small">
          확인
        </Button>
      </ButtonContainer>

      <Title>medium</Title>
      <ButtonContainer>
        <Button color="secondary" size="medium">
          확인
        </Button>
        <Button variant="outlined" color="error" size="medium">
          확인
        </Button>
        <Button variant="contained" size="medium">
          확인
        </Button>
      </ButtonContainer>

      <Title>large</Title>
      <ButtonContainer>
        <Button size="large">확인</Button>
        <Button variant="outlined" color="error" size="large">
          확인
        </Button>
        <Button variant="contained" color="secondary" size="large">
          확인
        </Button>
      </ButtonContainer>
    </>
  );
};

export const Group = () => {
  return (
    <>
      <Title>outlined + small</Title>
      <ColorContainer>
        <ButtonGroup variant="outlined" size="small">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </ColorContainer>

      <Title>contained + medium</Title>
      <ColorContainer>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </ColorContainer>

      <Title>text + large</Title>
      <ColorContainer>
        <ButtonGroup variant="text" size="large">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </ColorContainer>
    </>
  );
};
