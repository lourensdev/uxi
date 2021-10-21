import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    anime({
      targets: headlineRef.current,
      translateY: 50,
      direction: 'alternate',
      loop: true,
      duration: 500,
      easing: 'spring(1, 80, 10, 0)',
    });
  });

  return (
    <>
      <Head>
        <title>UXI - Beautiful on the web</title>
        <meta name="description" content="Beautiful on the web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Headline ref={headlineRef}>Hello Next</Headline>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: 24px;
`;

export default Home;
