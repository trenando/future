import React from "react";
import { Link } from "react-router-dom";
import { route } from "../../components/Router/route";
import styles from "./PageNotFound.module.scss";

export const PageNotFound = () => {
  return (
    <section className={styles.section}>
      <div className={styles.error}>
        <span className={styles.error__number}>404</span>
        <span className={styles.error__message}>Данная страница не существует</span>
        <Link to={route.home.link} className={styles.error__link}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};
