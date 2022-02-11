import React from 'react';
import styled from 'styled-components';
import AppBar from 'components/atoms/appBar';
import Cards from 'components/organisms/cards';
import WhatToSay from 'components/pages/WhatToSay';

const App: React.FC = () => {
  return (
    <div>
      <AppBar color="secondary" />
      <>
        <WhatToSay />
        {/* <Cards /> */}
      </>
    </div>
  );
};

export default App;
