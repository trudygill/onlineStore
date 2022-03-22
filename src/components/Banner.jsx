import styledComponents from "styled-components";

const Container = styledComponents.div`
    height: 50px;
    background-color: #121212;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;     
`;

const Ad = styledComponents.h3`
    font-size: 20px;
    font-weight: 500;
`

const Banner = () => {
  return (
    <Container>
        <Ad>#SPRINGSALE2022! Up to 60% OFF!</Ad>
    </Container>
  )
};

export default Banner;