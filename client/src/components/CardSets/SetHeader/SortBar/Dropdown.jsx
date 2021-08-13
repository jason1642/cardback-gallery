import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  
`

const DropDownContainer = styled("div")`

width:10em;
padding-right: 20px;
/* position: absolute; */

`;
const ListItem = styled.li`
list-style: none;
width: 100%;
padding-bottom: 5px;
margin-bottom: 0.8em;
/* position: absolute; */
z-index: 4;
&:first-child {

}
&:hover{
  background-color: #6e7288;
  cursor: pointer;
}
`;

const DropDownList = styled.ul`
position: absolute;
padding: 0;
margin: 0;
width: 100%;
background: #ffffff;
border: none;
border-radius: 0 0 15px 15px;
box-sizing: border-box;
color: white;
background-color: #4d505f;
font-size: 12px;
text-align: center;
font-weight: 500;
&:first-child {
  padding-top: 0.8em;
}
`;

const DropDownHeader = styled.div`
margin-bottom: 0em;
padding: 0.6em 2em 0.6em 2em;
text-align: center;
font-weight: 500;
font-size: 14px;
color: white;
background-color: #4d505f;
&:hover{
  cursor: pointer;
}
`;

const DropDownListContainer = styled("div")`
height: inherit;
width:10em;

position: absolute;


`;





const options = ["option1", "Premium Articles"];

const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState("Mana: low to high")
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

const onOptionClicked = value => () => {
setSelectedOption(value);
setIsOpen(false);
console.log(selectedOption);
};
  return (
    // <Container>
      <DropDownContainer onMouseLeave={toggling} onMouseEnter={toggling}>
          <DropDownHeader
            style={{ borderRadius: isOpen ? '12px 12px 0 0' : '15px' }}
      >{ currentOption}</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
    // </Container>
   );
}
 
export default Dropdown;