import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';
import { Coordinates, getCoordinates } from '../utilities/common';

const Home: NextPage = () => {
  const [intro, setIntro] = useState<boolean>(true);
  const [interactiveView, setInteractiveView] = useState<boolean>(false);

  const LogoRef = useRef<HTMLDivElement>(null);
  const LogoIntroRef = useRef<HTMLDivElement>(null);
  const CircleEnterRef = useRef<HTMLDivElement>(null);
  const CircleExplodeOneRef = useRef<HTMLDivElement>(null);

  const introAnimation = () => {
    // Create a timeline with default parameters
    let animationTimeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1500,
      complete: () => {
        const pos: Coordinates = getCoordinates(LogoIntroRef);
        setIntro(false);
        anime.set(LogoRef.current, {
          translateX: pos.x - 15,
          translateY: pos.y - 15,
          scale: 1,
        });
        anime({
          targets: LogoRef.current,
          keyframes: [{ translateX: 0, translateY: 0, scale: 0.3 }],
          easing: 'easeOutExpo',
          duration: 1000,
          complete: () => {
            setInteractiveView(true);
            anime.set(LogoRef.current, {
              scale: 1,
            });
          },
        });
      },
    });

    anime.set(LogoIntroRef.current, {
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

    // Add children
    animationTimeline
      .add({
        targets: CircleEnterRef.current,
        keyframes: [{ scale: 20 }, { scale: 1 }],
        duration: 1500,
      })
      .add(
        {
          targets: LogoIntroRef.current,
          keyframes: [{ opacity: 0 }, { opacity: 1 }],
          duration: 1000,
        },
        '-=1000',
      )
      .add(
        {
          targets: LogoIntroRef.current,
          keyframes: [{ scale: 1 }, { scale: 1.2 }],
          duration: 800,
        },
        '-=400',
      )
      .add({
        targets: LogoIntroRef.current,
        keyframes: [{ scale: 1.2 }, { scale: 1 }],
        easing: 'easeInCirc',
        duration: 300,
      })
      .add(
        {
          targets: CircleExplodeOneRef.current,
          keyframes: [
            { opacity: 0.8, scale: 1 },
            { opacity: 0, scale: 3 },
          ],
          duration: 2000,
        },
        '-=1000',
      );
  };

  useEffect(() => {
    if (intro) introAnimation();
  }, []);

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
      {intro && (
        <Page>
          <div>
            <Logo ref={LogoIntroRef} intro={intro}>
              <Image
                src="/assets/logo-round.png"
                width="200"
                height="200"
                alt="UXi Logo"
              />
            </Logo>
            <CircleEnter ref={CircleEnterRef} />
            <CircleExplodeOne ref={CircleExplodeOneRef} />
          </div>
        </Page>
      )}
      {!intro && (
        <NavBar>
          <Logo ref={LogoRef}>
            <Image
              src="/assets/logo-round.png"
              width={interactiveView ? '60' : '200'}
              height={interactiveView ? '60' : '200'}
              alt="UXi Logo"
            />
          </Logo>
        </NavBar>
      )}
    </>
  );
};

const Page = styled.div`
  --logoSize: 200px;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.div<{ intro?: boolean }>`
  position: relative;
  width: var(--logoSize);
  height: var(--logoSize);
  ${props => (props.intro ? 'opacity: 0;' : 'transform-origin: top left;')}
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

const NavBar = styled.header`
  padding: 15px;
`;

export default Home;
