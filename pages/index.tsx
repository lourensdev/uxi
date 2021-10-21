import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    anime({
      targets: headlineRef.current,
      rotate: 360,
      direction: 'alternate',
      loop: true,
      duration: 500,
      easing: 'spring(1, 80, 10, 0)',
    });
  });

  return (
    <>
      <Head>
        <title>UXi - Beautiful UI on the web</title>
        <meta name="description" content="Beautiful UI on the web" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Main>
        <Headline ref={headlineRef}>
          <Image
            src="/assets/logo-round.png"
            width="200"
            height="200"
            alt="UXi Logo"
          />
        </Headline>
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
