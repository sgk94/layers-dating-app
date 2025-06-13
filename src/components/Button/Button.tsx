import type { ReactNode } from 'react';
import styles from './Button.module.scss';
import { logout } from '../../utils/authHelpers';

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={logout} className={styles.button}>
        {children}
      </button>
    </div>
  );
}
