import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/SpaceX.png';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="d-flex align-items-center mb-3 p-4 bg-transparent"
      style={{ height: '40px', margin: '0 12%' }}>
      <img
        src={logo}
        alt="logo"
        style={{ width: '200px', cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
    </nav>
  );
};

export default Navbar;
