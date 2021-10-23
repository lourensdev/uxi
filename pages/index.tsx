import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {
  const LogoRef = useRef<HTMLDivElement>(null);
  const CircleEnterRef = useRef<HTMLDivElement>(null);
  const CircleExplodeOneRef = useRef<HTMLDivElement>(null);
  const CircleExplodeTwoRef = useRef<HTMLDivElement>(null);
  const CircleExplodeThreeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a timeline with default parameters
    let animationTimeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1500,
    });

    anime.set(LogoRef.current, {
      opacity: () => 0,
    });

    const setTranslate = (ref: any, opacity: number = 0) => {
      anime.set(ref.current, {
        opacity: () => opacity,
        translateX: () => '-50%',
        translateY: () => '-50%',
      });
    };

    setTranslate(CircleEnterRef, 1);
    setTranslate(CircleExplodeOneRef);
    setTranslate(CircleExplodeTwoRef);
    setTranslate(CircleExplodeThreeRef);

    // Add children
    animationTimeline
      .add({
        targets: CircleEnterRef.current,
        keyframes: [{ scale: 20 }, { scale: 1 }],
        duration: 1500,
      })
      .add(
        {
          targets: LogoRef.current,
          keyframes: [{ opacity: 0 }, { opacity: 1 }],
          duration: 1000,
        },
        '-=1000',
      )
      .add(
        {
          targets: LogoRef.current,
          keyframes: [{ scale: 1 }, { scale: 1.2 }],
          duration: 800,
        },
        '-=400',
      )
      .add({
        targets: LogoRef.current,
        keyframes: [{ scale: 1.2 }, { scale: 1 }],
        easing: 'easeInCirc',
        duration: 300,
      })
      .add(
        {
          targets: CircleExplodeOneRef.current,
          keyframes: [
            { opacity: 0.8, scale: 1 },
            { opacity: 0, scale: 4 },
          ],
          duration: 2000,
        },
        '-=1000',
      )
      .add(
        {
          targets: CircleExplodeTwoRef.current,
          keyframes: [
            { opacity: 0.6, scale: 1 },
            { opacity: 0, scale: 3 },
          ],
          duration: 2000,
        },
        '-=1800',
      )
      .add(
        {
          targets: CircleExplodeThreeRef.current,
          keyframes: [
            { opacity: 0.4, scale: 1 },
            { opacity: 0, scale: 2 },
          ],
          duration: 2000,
        },
        '-=2600',
      );
  });

  return (
    <>
      <Head>
        <title>UXi - Beautiful UI on the web</title>
        <meta name="description" content="Beautiful UI on the web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div>
          <Logo ref={LogoRef}>
            <Image
              src="/assets/logo-round.png"
              width="200"
              height="200"
              alt="UXi Logo"
            />
          </Logo>
          <CircleEnter ref={CircleEnterRef} />
          <CircleExplodeOne ref={CircleExplodeOneRef} />
          <CircleExplodeTwo ref={CircleExplodeTwoRef} />
          <CircleExplodeThree ref={CircleExplodeThreeRef} />
        </div>
      </Main>
    </>
  );
};

const Main = styled.div`
  --logoSize: 200px;
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.div`
  position: relative;
  width: var(--logoSize);
  height: var(--logoSize);
  opacity: 0;
  z-index: 2;
`;

const CircleInitialPosition = `
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: var(--logoSize);
  height: var(--logoSize);
  background-color: var(--mainBackground);
  opacity: 0;
  z-index: 1;
`;

const CircleEnter = styled.div`
  ${CircleInitialPosition}
`;

const CircleExplodeOne = styled.div`
  ${CircleInitialPosition}
`;

const CircleExplodeTwo = styled.div`
  ${CircleInitialPosition}
`;

const CircleExplodeThree = styled.div``;

export default Home;
