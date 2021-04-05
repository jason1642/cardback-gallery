import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  background-color: #6e6a6a;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
  display: flex;
  flex-wrap: wrap;
`;
const Image = styled(animated.img)`
  width: 20%;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Main = () => {
  const [cardbackList, setCardbackList] = useState();
  // const [apiKey, setApiKey] = useState();

  // useEffect(() => {}, []);
  const ImageRender = ele => {
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 350, friction: 40 },
    }));
    return (
      <Image
        src={ele.imgAnimated}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    );
  };
  useEffect(() => {
    const fetchList = async apiKey => {
      const options = {
        method: 'GET',
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      };
      axios
        .request(options)
        .then(res => {
          // console.log(res.data);
          setCardbackList(res);
        })
        .catch(err => {
          console.error(err);
        });
    };
    const callAPI = () => {
      fetch('http://localhost:9000/')
        .then(res => res.text())
        .then(res => fetchList(res));
    };
    callAPI();
  }, []);

  return (
    <>
      {cardbackList ? (
        <Container>
          {/* {console.log(cardbackList)} */}
          {/* {cardbackList[5].name} */}
          {cardbackList && cardbackList.data.map(ele => ImageRender(ele))}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
