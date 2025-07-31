import styles from "./page.module.css";
import React from "react";


export default function Home() {
    return (<div className={styles.page}>
            <main className={styles.main}>
                <h1>Welcome to todolist</h1>
                <a className={styles.todolistButton} href="/todolist">Start Here</a>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>

    );
}
