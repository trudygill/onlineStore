import { Badge } from '@material-ui/core';
import { LocalMallOutlined} from '@material-ui/icons';
import React from 'react';
import styledComponents from 'styled-components';
import { mobile } from '../responsive';


const Container = styledComponents.div`
    height: 80px; 
    margin-top: 10px;
    ${mobile({height: "20px"})}
`;

const Wrapper = styledComponents.div`
    padding: 20px 50px;
    display: flex; 
    justify-content: space-between;
    ${mobile({alignItems: "center"})}


`;

const Left = styledComponents.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

`;

const Logo = styledComponents.p`
    margin-left: 20px;
    font-size: 30px;
    font-weight: bolder;
    text-transform: uppercase;
    cursor: pointer;
    ${mobile({fontSize: "20px"})}


`;

const Center = styledComponents.div`
    display: flex; 
    flex: 2;
    justify-content: space-between;
    align-items: center;
`;

const MenuItem = styledComponents.div`
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.1s ease-in;
    ${mobile({display: "none"})}

    
    &:hover{
        border-bottom: 4px solid black;        
    }
`;

const Right = styledComponents.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-right: 40px;
    ${mobile({justifyContent: "flex-end"})}

`;

const Language = styledComponents.span`
    font-size:20px; 
    font-weight: bold;
    cursor: pointer;
    border-right: 1.5px solid black;
    padding-right: 5px;
    margin-top: 5px;
    margin-bottom: 0px;
    ${mobile({fontSize: "12px"})}
`;

const Icon = styledComponents.div`

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Zoié</Logo>
            </Left>

            <Center>                 
                <MenuItem>NEW</MenuItem>
                <MenuItem>TRENDING</MenuItem>
                <MenuItem>BEST SELLERS</MenuItem>
                <MenuItem>#SPRINGSALE2022</MenuItem>
                <MenuItem>ABOUT US</MenuItem>
            </Center>

            <Right>
                <Language>EN</Language>
                <Icon>
                    <Badge badgeContent={4} color="primary">
                        <LocalMallOutlined/>
                    </Badge>            
                </Icon>
            </Right>           
            
        </Wrapper>
    </Container>

  );
};

export default Navbar;