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
      <nav className="sticky z-10 bg-white flex flex-row justify-between items-center h-auto w-[100%] p-6 lg:px-15 lg:py-0">
        <div className="z-10 flex flex-row justify-start gap-x-4 items-center">
          <img
            className="z-10 lg:hidden"
            onClick={handleClick}
            src="./assets/icon-menu.svg"
            alt="hamburger"
          />
          <img
            src="./assets/logo.svg"
            alt="logo"
            className="z-10 h-[20px] lg:mt-5 lg:my-7"
          />
          <div className="hidden lg:flex flex-row items-center gap-x-5 text-sm ml-8 text-dark-grayish-blue font-semibold">
            <p className="flex justify-center items-center cursor-pointer  border-b-white border-b-5  hover:border-b-orange  h-[70px] hover:text-black">Collections</p>
            <p className="flex justify-center items-center cursor-pointer  border-b-white border-b-5  hover:border-b-orange  h-[70px] hover:text-black">Men</p>
            <p className="flex justify-center items-center cursor-pointer  border-b-white border-b-5  hover:border-b-orange  h-[70px] hover:text-black">Women</p>
            <p className="flex justify-center items-center cursor-pointer  border-b-white border-b-5  hover:border-b-orange  h-[70px] hover:text-black">About</p>
            <p className="flex justify-center items-center cursor-pointer  border-b-white border-b-5  hover:border-b-orange  h-[70px] hover:text-black">Contact</p>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-x-7 lg:gap-x-12">
          <div>
          <img
            className="cart-icon z-10 cursor-pointer after:content"
            onClick={() => props.setCartShown((prev) => !prev)}
            src="./assets/icon-cart.svg"
            alt="cart"
          ></img><span className="absolute  bg-orange text-white px-[6px] top-[15px] translate-x-[12px] rounded-full text-xs">{props.items}</span></div>
          <img
            src="./assets/image-avatar.png"
            className="h-[30px] z-10 cursor-pointer border-2 border-transparent hover:border-orange rounded-full "
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
