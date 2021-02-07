import React from 'react';
import logo from 'assets/images/logo.svg';
import styled from 'styled-components';

const Home = () => {
  const title = 'Daniel Vieira';
  return (
    <Body>
      <Image src={logo} alt={`Logo ${title}`} />
    </Body>
  );
};
const Body = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 200px;
`;

export default Home;
