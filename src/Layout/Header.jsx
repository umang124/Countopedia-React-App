import logo from "../images/react.png";

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 text-white-50">React Course - Countopedia</span>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader />
    </div>
  );
};
export default Header;
