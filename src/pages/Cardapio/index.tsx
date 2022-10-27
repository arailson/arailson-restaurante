import styles from "./Cardapio.module.scss";

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <img  alt="logo do restaurante" src="../../assets/logo.svg"/>
      </nav>
    </main>
  );
}
