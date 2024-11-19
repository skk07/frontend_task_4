import React from 'react';
import './Nav.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navs({ cartItemCount, setShowCartModal }) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <div className="profile-container">
          <Link to="/wishlist">
            <FiHeart className="nav-icons" />
          </Link>
          <a href="#" onClick={() => setShowCartModal(true)}>
            <AiOutlineShoppingCart className="nav-icons" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navs;



// function Navs({ cartItemCount, setShowCartModal }) {
//   return (
//     <Navbar bg="light" data-bs-theme="light">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <div className="profile-container">
//           <a href="#">        
//                           {/* Whishlist icon */}
//             <FiHeart className="nav-icons" />
//           </a>
//           <a href="#" onClick={() => setShowCartModal(true)}>
//             <AiOutlineShoppingCart className="nav-icons" />
//             {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
//           </a>
//         </div>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navs


/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <div className='profilr-container'>
         <a href="#">
          <FiHeart className="nav-icons" />
           </a>
         <a href="#">
           <AiOutlineShoppingCart className="nav-icons" />
         </a>
         <a href="#">
           <AiOutlineUserAdd className="nav-icons" />
         </a>
       </div>
        </Container>
      </Navbar>
     */