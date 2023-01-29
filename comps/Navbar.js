import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-lg">
        <Link href="/" className="navbar-brand">
          <span className="fw-bold"> Toby's blog </span>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" href="/create">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
