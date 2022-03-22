import styledComponents from "styled-components"

const Container = styledComponents.div`
    flex: 1;
    margin: 30px;
    margin-bottom: 80px;
    min-width: 250px;
    height: 300px;
`

const Image = styledComponents.img`
    height: 250px;
    width: 250px;
`
const Info = styledComponents.div`
    margin: 10px;
`
const Title = styledComponents.p`
    color: gray;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 4px;
`

const Price = styledComponents.p`
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 2px;
`

const Button = styledComponents.button`
    border: none;
    margin-top: 5px;
    background: #121212;
    text-align: center;
    font-size: 18px;
    color: #fff;
    padding: 4px 6px;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
        transform:scale(1.1);
        
    }

`


const Product = ({item}) => {
  return (
    <Container>
        <Info>
            <Image src={item.img}/>       
            <Title>{item.title}</Title>
            <Price>{item.price}</Price>
            <Button>ADD TO BAG</Button>     
        </Info>
        
    </Container>
  )
}

export default Product