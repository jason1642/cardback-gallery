import React from 'react';
import styled from 'styled-components';
import { Modal } from '@material-ui/core';
// https://material-ui.com/components/modal/
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import KeywordToolTip from './KeywordToolTip';
// https://material-ui.com/components/click-away-listener/

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // border: '2px solid white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;

  max-width: 980px;
  padding: 50px 30px 30px;
  justify-content: center;
`;
const ImageSide = styled.div``;
const Image = styled.img`
  width: 375px;
  margin-right: 25px;
`;
const TextSide = styled.div`
  width: 460px;
  overflow: visible;
  max-height: 518px;
  padding-top: 50px;
  position: relative;
  pointer-events: auto;
  user-select: text;
  color: rgb(255, 255, 255);
`;
const ListItem = styled.li``;
const ListLabel = styled.span`
  color: rgb(255, 229, 172);
  font-weight: bold;
`;
const Keyword = styled.b`
  cursor: pointer;
`;
const Name = styled.h2``;
// This component is a popover element that will display information of an item that was clicked and block interaction with the rest of the application.

const CardInfoModal = props => {
  const classes = useStyles();
  const {
    name,
    cardSetId,
    text,
    cardTypeId,
    image,
    description,
    flavorText,
    rarityId,
    classId,
    artistName,
    keywordIds,
  } = props.cardInfo;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.isOpen}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <ClickAwayListener onClickAway={props.handleClose}>
        {props.metaData && (
          <Container className={classes.paper}>
            <ImageSide>
              <Image src={image} />
            </ImageSide>
            <TextSide>
              <Name id="transition-modal-title">{name}</Name>
              <p id="transition-modal-description">{description}</p>
              <p>{flavorText}</p>
              <p dangerouslySetInnerHTML={{ __html: text }} />
              <ul>
                <ListItem>
                  <ListLabel>Type: </ListLabel>
                  {props.metaData.types.find(ele => ele.id === cardTypeId).name}
                </ListItem>
                <ListItem>
                  <ListLabel>Rarity: </ListLabel>
                  {props.metaData.rarities[rarityId - 1].name}
                </ListItem>
                <ListItem>
                  <ListLabel>Set: </ListLabel>
                  {props.metaData.sets.find(ele => ele.id === cardSetId).name}
                </ListItem>
                <ListItem>
                  <ListLabel>Class: </ListLabel>
                  {props.metaData.classes.find(ele => ele.id === classId).name}
                </ListItem>
                <ListItem>
                  <ListLabel>Artist: </ListLabel>
                  {artistName}
                </ListItem>
                {props.cardInfo.keywordIds ? (
                  <ListItem>
                    <ListLabel>KeyWords: </ListLabel>

                    {keywordIds.map((item, index) => {
                      return (
                        <>
                          {/* <KeywordToolTip
                            name={
                              props.metaData.keywords &&
                              props.metaData.keywords.find(
                                ele => ele.id === item
                              ).name
                            }
                            description={
                              props.metaData.keywords.find(
                                ele => ele.id === item
                              ).text
                            }
                          /> */} 
                           {/* adds a comma to the end of each item unless its the last in the array 
                          {index !== keywordIds.length - 1 && <span>, </span>} */}
                        </>
                      );
                    })}
                  </ListItem>
                ) : (
                  <></>
                )}
              </ul>
            </TextSide>
          </Container>
        )}
      </ClickAwayListener>
    </Modal>
  );
};

export default CardInfoModal;
