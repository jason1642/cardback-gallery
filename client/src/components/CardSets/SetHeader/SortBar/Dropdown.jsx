import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

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
font-size: 18px;
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
padding: 0.6em 1em 0.6em 1em;
text-align: center;
font-weight: 500;
font-size: 18px;
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

const [lowToHigh, highToLow] = ['Mana: Low to High', 'Mana: High to Low']

const Dropdown = props => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(lowToHigh)
  const toggling = () => setIsOpen(!isOpen);

  const changeSortString = () => {
    currentOption === lowToHigh ? setCurrentOption(highToLow) : setCurrentOption(lowToHigh)
  }
  useEffect(() => {
    props.changeOrderOption(currentOption)
  },[currentOption])
  return (
      <DropDownContainer onMouseLeave={toggling} onMouseEnter={toggling}>
          <DropDownHeader
            style={{ borderRadius: isOpen ? '12px 12px 0 0' : '15px' }}
      >{ currentOption}</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
          <DropDownList>
            
            <ListItem name="Mana: Low to High" onClick={()=>setCurrentOption("Mana: Low to High")} key={Math.random()}>
            Mana: Low to High
                  </ListItem>
            <ListItem onClick={() => {
              setCurrentOption(highToLow)
              changeSortString()
            }
            } name="Mana: High to Low" key={Math.random()}>
            Mana: High to Low
                  </ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
   );
}
 
export default Dropdown;