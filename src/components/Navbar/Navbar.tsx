import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button/Button';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <Link className={styles.navbar__links} to="/">
          Home
        </Link>

        <Link className={styles.navbar__links} to="/chat">
          Chat
        </Link>

        <Link className={styles.navbar__links} to="/profile">
          Profile
        </Link>

        {user && <Button>Log Out</Button>}
      </nav>
    </header>
  );
}
