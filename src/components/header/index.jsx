const Header = () => {
  return (
    <div className="container header">
      <div className="social-links">
        <ul>
          <li className="social-icon icon-facebook">
          </li>

          <li className="social-icon icon-instagram">
            {/* <span className="icon-instagram"></span> */}
          </li>

          <li className="social-icon icon-telegram">
            {/* <span className="icon-telegram"></span> */}
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="/images/my-invest.png" alt="" />
      </div>
      <div className="academy">
        <button>
          <img src="/images/icons/academy.svg" alt="" />
          <span>ACADEMY</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
