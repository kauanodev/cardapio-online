import "./Header.css";

export default function Header({ nome }) {
  return (
    <div>
      <header>
        <span id="search"> Search</span>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/IFood_logo.svg/1280px-IFood_logo.svg.png"
          width={100}
          id="logo"
        />
        <span id="cart">cart</span>
      </header>
    </div>
  );
}
