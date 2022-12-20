import styles from './alert.module.css';
import clsx from "clsx";

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'text-green-500',
        [styles.error]: type === 'text-red-500',
      })}
    >
      {children}
    </div>
  );
}