import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

import { memo, useMemo } from "react";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
  const elemento = useMemo(() => <CgSearch size={20} color="#4c4d5E" />, []);
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      ></input>
      {elemento}
    </div>
  );
}

export default memo(Buscador);
