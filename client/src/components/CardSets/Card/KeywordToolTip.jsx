import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const Container = styled.span`
  /* height: 100px; */
  cursor: pointer;
`;
const KeywordToolTip = props => {
  return (
    <Container>
      <ReactTooltip
        backgroundColor="white"
        textColor="black"
        place="right"
        multiline="true"
        effect="solid"
        html={true}
      />
      <span
        style={{ color: 'orange' }}
        // data-offset="{'top': -100}"
        data-html={true}
        data-tip={`${props.description}`}
      >
        {props.name}
      </span>
    </Container>
  );
};

export default KeywordToolTip;
