import logoTitle from "../../assets/logo.png";

function Header() {
  return (
    <header className="w-full flex flex-col items-center py-6">
      <div className="flex items-center gap-3">
        <img src={logoTitle} alt="Dragon Ball Explorer" className="h-50 object-contain" />

      </div>
    </header>
  );
}

export default Header;
