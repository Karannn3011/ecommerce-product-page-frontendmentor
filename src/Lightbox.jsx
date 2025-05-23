export default function Lightbox({ lightboxVisible }) {
  return (
    <div
      className={`fixed inset-0 bg-black/75 z-10 transition-opacity duration-300 ease-in-out
        ${lightboxVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    ></div>
  );
}