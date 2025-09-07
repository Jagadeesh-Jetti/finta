import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img src="/logo.svg" height={50} width={59} alt="logo" />
      </Link>
    </div>
  );
};
