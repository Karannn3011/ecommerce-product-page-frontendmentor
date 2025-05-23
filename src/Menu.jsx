export default function Menu(props) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[225px] z-20 bg-white p-6 transform transition-transform duration-300 ease-in-out
        ${props.isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <img
        className="h-[20px]"
        onClick={props.closeMenu}
        src="src/assets/icon-close.svg"
        alt="close"
      />
      <ul className="mt-10 leading-11 text-lg font-semibold">
        <li className="cursor-pointer">Collections</li>
        <li className="cursor-pointer">Men</li>
        <li className="cursor-pointer">Women</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
