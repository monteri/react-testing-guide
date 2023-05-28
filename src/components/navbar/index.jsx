import ReactSVG from '../../assets/react.svg'
import { Link } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <div className="navbar" style={{ display: 'flex' }}>
      <Link to='/'>
        <div style={{ backgroundImage: `url(${ReactSVG})`, width: '36px', height: '32px' }}>

        </div>
      </Link>
      {links.map(link => (
        <Link
          data-testid="navbar-link"
          key={link.title}
          to={link.href}
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
};

export default Navbar;