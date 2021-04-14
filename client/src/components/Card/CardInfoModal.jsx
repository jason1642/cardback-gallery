import React from 'react'
import styled from 'styled-components'
import { Modal } from '@material-ui/core'; 
// https://material-ui.com/components/modal/ 
import { makeStyles} from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// https://material-ui.com/components/click-away-listener/

const useStyles = makeStyles((theme) => ({
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
  `
const ImageSide = styled.div` `
const Image = styled.img`
  width: 375px;
  margin-right: 25px;
  `
const TextSide = styled.div`
  width: 460px;
  overflow: visible;
  max-height: 518px;
  padding-top: 50px;
  position: relative;
  pointer-events: auto;
  user-select: text;
  color: rgb(255, 255, 255);
`
const ExitButton = styled.a`
  position: fixed;
  top: 35px;
  right: 35px;
  color: white;
  z-index: 4;
  &:hover{
    cursor: pointer;
  }
`
const Title = styled.h2`

`
// This component is a popover element that will display information of an item that was clicked and block interaction with the rest of the application.

const CardInfoModal = props => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
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
              <Image src={props.cardInfo.img}/>
            </ImageSide>
            <TextSide>
            <Title id="transition-modal-title">{props.cardInfo.name}</Title>
            <p id="transition-modal-description">
              {props.cardInfo.description}
              {console.log(props.cardInfo)}
              </p>
              {/* <span>How to get: </span> */}
               <span>{props.cardInfo.howToGet}</span>
            </TextSide>
          </Container>
          </ClickAwayListener>

      </Modal>
     );
}
 
export default CardInfoModal;
