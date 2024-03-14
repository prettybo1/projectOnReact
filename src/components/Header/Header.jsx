import logo from "/logo.webp";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <img src={logo} alt="" />

      <ul className="nav-menu">
        <li><b>Наш асортимент</b></li>
        <li><b>Патріотичні</b></li>
        <li><b>Коллаборації</b></li>
        <li><b>Набори</b></li>
        <li><b>SALE</b></li>
        <li><b>Індивідуальний дизайн</b></li>
      </ul>

      <div className="login-wishlist">
        <ul>
          <li><b>Вхід</b></li>
          <li><b>Бажання</b></li>
        </ul>
      </div>

    </header>
  );
}
