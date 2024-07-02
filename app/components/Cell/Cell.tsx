import React from "react";
import styles from "./Cell.module.css";

interface CellProps {
  value: string;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div className={`${styles.cell} ${value}`} onClick={onClick} data-cell>
      {value === "x" && (
        <>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </>
      )}
      {value === "circle" && (
        <>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </>
      )}
    </div>
  );
};

export default Cell;
