import React from 'react';
import styled from 'styled-components';
import { Modal } from '@material-ui/core';
// https://material-ui.com/components/modal/
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
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
const Name = styled.h2``;
// This component is a popover element that will display information of an item that was clicked and block interaction with the rest of the application.

const CardInfoModal = props => {
  const classes = useStyles();
  const {
    name,
    cardSet,
    text,
    type,
    img,
    description,
    flavor,
    rarity,
    playerClass,
    artist,
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
        <Container className={classes.paper}>
          <ImageSide>
            <Image src={img} />
          </ImageSide>
          <TextSide>
            <Name id="transition-modal-title">{name}</Name>
            <p id="transition-modal-description">{description}</p>
            <p>{flavor}</p>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            <ul>
              <ListItem>
                <ListLabel>Type: </ListLabel>
                {type}
              </ListItem>
              <ListItem>
                <ListLabel>Rarity: </ListLabel>
                {rarity}
              </ListItem>
              <ListItem>
                <ListLabel>Set: </ListLabel>
                {cardSet}
              </ListItem>
              <ListItem>
                <ListLabel>Class: </ListLabel>
                {playerClass}
              </ListItem>
              <ListItem>
                <ListLabel>Artist: </ListLabel>
                {artist}
              </ListItem>
            </ul>
          </TextSide>
        </Container>
      </ClickAwayListener>
    </Modal>
  );
};

export default CardInfoModal;
