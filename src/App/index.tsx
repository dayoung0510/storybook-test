import React from 'react';
import styled from 'styled-components';
import AppBar from 'components/atoms/appBar';
import Cards from 'components/organisms/cards';

const Container = styled.div`
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Cards />
      </Container>
    </div>
  );
};

export default App;
