import styles from 'flexboxgrid2';

export default function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}
