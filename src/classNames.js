import styles from '../styles/flexboxgrid2.scss';

export default function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}
