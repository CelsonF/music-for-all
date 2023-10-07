import styles from "./styles.module.css";
import Image from "next/image";
import areaaluno from "../../../public/images/areaaluno.png";
import areaalunomobile from "../../../public/images/areaalunomobile.png";
export default function VideoAulas() {
  return (
    <main>
      <Image
        className={`${styles.areaaluno} animated-item`}
        src={areaaluno}
        alt="Music For All Logo"
        loading="lazy"
        placeholder="blur"
      />

      <Image
        className={styles.imgMobile}
        src={areaalunomobile}
        alt="foto home mobile"
        width={390}
        height={382}
        loading="lazy"
        placeholder="blur"
      />

      <div className={styles.containerAulas}>
        <div className={`${styles.divvideo} animated-item`}>
          <h1 className={`${styles.titles} animated-item`}>Vídeo Aulas</h1>
          <iframe
            className={`${styles.video} animated-item`}
            width="700"
            height="394"
            src="https://www.youtube.com/embed/9srQ84b4iYw?si=zXsgwHrYPNuZ42q2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <p className={`${styles.subtitles} animated-item`}>
          Observar a performance de nossos alunos é uma experiência
          verdadeiramente inspiradora, e isso nos lembra de um importante
          aspecto da jornada musical: o talento é algo que merece ser nutrido e
          cultivado. Ele não é apenas uma habilidade, mas um presente especial
          que deve ser compartilhado com o mundo. É com grande honra que fazemos
          parte deste processo de crescimento como músicos, junto com cada um de
          nossos alunos{" "}
        </p>
      </div>
    </main>
  );
}
