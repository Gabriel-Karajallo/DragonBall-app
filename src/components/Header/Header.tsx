import logoTitle from "../../assets/logo.png";

function Header() {
  return (
    <header className="w-full flex flex-col items-center py-6">
      <div className="flex items-center gap-3">
        <img src={logoTitle} alt="Dragon Ball Explorer" className="h-50 object-contain" />

      </div>
      <p className="text-blue-400 mt-2 font-semibold">
        Hecho por Gabriel Karajallo
      </p>
    </header>
  );
}

export default Header;
