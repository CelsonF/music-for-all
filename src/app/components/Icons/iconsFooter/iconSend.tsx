import { SVGProps } from "react";
import styles from "./styles.module.css";

export const IconSend = (props: SVGProps<SVGSVGElement>) => {
  return (
    <span title="Clique aqui para nos enviar um e-mail">
      <svg
        className={styles.iconSend}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
        <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
      </svg>
    </span>
  );
};
