import Head from "next/head";
import styles from "./page.module.css";
import Board from "./components/Board/Board";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Tic Tac Toe Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={styles.heading}>Tic Tac Toe</h2>
      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}
