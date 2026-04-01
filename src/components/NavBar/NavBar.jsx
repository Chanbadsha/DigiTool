const NavBar = ({ navlink }) => {
  return (
    <div>
      <li>
        <a className="font-semibold text-base text-black" href={navlink.path}>
          {navlink.name}
        </a>
      </li>
    </div>
  );
};

export default NavBar;
