import { useState } from "react";
import Lightbox from "./Lightbox";
import Menu from "./Menu";
import Cart from "./Cart";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxVisible, setLightboxVisisble] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    setLightboxVisisble(!lightboxVisible);
  }
  return (
    <>
      <nav className="sticky z-10 bg-white flex flex-row justify-between items-center w-[100%] p-6">
        <div className="z-10 flex flex-row justify-start gap-x-4 items-center">
          <img
            className="z-10"
            onClick={handleClick}
            src="./src/assets/icon-menu.svg"
            alt="hamburger"
          />
          <img
            src="./src/assets/logo.svg"
            alt="logo"
            className=" z-10 h-[20px]"
          />
        </div>
        <div className="flex flex-row justify-end items-center gap-x-7">
          <img
            className="z-10"
            onClick={() => props.setCartShown((prev) => !prev)}
            src="./src/assets/icon-cart.svg"
            alt="cart"
          />
          <img
            src="./src/assets/image-avatar.png"
            className="h-[30px] z-10"
            alt="avatar"
          />
        </div>
      </nav>

      <Menu
        isOpen={isOpen}
        closeMenu={() => {
          setIsOpen(false);
          setLightboxVisisble(false);
        }}
      />
      <Lightbox lightboxVisible={lightboxVisible} />
      <Cart
        isCartShown={props.isCartShown}
        items={props.items}
        setItems={props.setItems}
        clearItems={() => props.setItems}
      />
    </>
  );
}

export default Header;
