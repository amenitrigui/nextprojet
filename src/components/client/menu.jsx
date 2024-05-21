'use client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomeIcon from '@mui/icons-material/Home'; 
import HelpIcon from '@mui/icons-material/Help'; 
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useRouter } from 'next/navigation'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from "./shoppingCart/cartModal";
import { useShoppingCart } from "use-shopping-cart" ;
function Menu({children}) {
  const { handleCartClick, cartCount } = useShoppingCart();
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">My Site </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          
            <Nav.Link href="../components/admin/client"> <HomeIcon/>Accueil</Nav.Link>
            
            <NavDropdown title="Homme" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Vetement</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                accesoires
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shoes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Femme" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Vetement</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                accesoires
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shoes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Enfant" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Vetement</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                accesoires
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shoes
              </NavDropdown.Item>
            </NavDropdown>
            {session? <Nav.Link onClick={() => signOut()}><LogoutIcon/>Se
déconnecter</Nav.Link>
: <Nav.Link onClick={() => signIn()}><AccountCircleIcon/>Se
connecter</Nav.Link>
}


            <Nav.Link href="/client/pageAide">  <HelpIcon />Aide </Nav.Link>
           
          </Nav>
          <Nav.Link onClick={() =>router.push('/client/cartProducts')}><ShoppingBasketIcon style={{ color:'pink' }}/> Shopping Cart </Nav.Link>

<button className="relative" onClick={() => handleCartClick()}>
<ShoppingCartIcon color="primary"/>
<div className="rounded-full flex justify-center items-center
bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
{cartCount}
</div>
</button>
<CartModal />

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;