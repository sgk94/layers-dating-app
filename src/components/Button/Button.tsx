import type { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <button className={styles.buttonContainer}>{children}</button>;
}
