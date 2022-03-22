import styledComponents from 'styled-components'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const Container = styledComponents.div``

const Wrapper = styledComponents.div``

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Banner/>
        <Wrapper>            
        </Wrapper>
    </Container>
  )
}

export default Cart