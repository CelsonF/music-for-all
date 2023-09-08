import Head from "next/head";
import Image from "next/image";
import { IconCursos } from "./components/Icons/iconsHome/iconCursos";
import { IconBlog } from "./components/Icons/iconsHome/iconBlog";
import { IconContact } from "./components/Icons/iconsHome/iconContact";
import { IconCurso } from "./components/Icons/iconsHome/iconCurso";
import styles from "./page.module.css";
import home from "../../public/images/home.png";
import alunos from "../../public/images/alunos.png";
import Link from "next/link";
import cursoviolao from "../../public/images/cursoviolao.jpg";
import piano from "../../public/images/piano.png";
import guitarra from "../../public/images/guitarra.jpg";
import gaita from "../../public/images/gaita.png";
import ukulele from "../../public/images/ukulele.jpg";
import titlecursos2 from "../../public/images/titlecursos2.png";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1 className={styles.title}>Bem vindo à</h1>
            <div>
              <Image
                className={styles.img}
                src={home}
                alt="Music For All Logo"
              />
            </div>
            <h2 className={styles.slogan}>
              Na Music for All, acreditamos que a música é a linguagem universal
              que une corações e almas.
            </h2>

            <div className={styles.buttonGroup}>
              <Link href={"/cursos"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconCursos />
                  </span>
                  <span className={styles.titleButton}>CURSOS</span>
                  <span className={styles.subtitleButton}>
                    Oferecemos uma ampla gama de aulas de instrumentos, para que
                    você possa escolher o que mais lhe inspira.
                  </span>
                </button>
              </Link>

              <Link href={"/blog"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconBlog />
                  </span>
                  <span className={styles.titleButton}>BLOG</span>
                  <span className={styles.subtitleButton}>
                    Um pouco dos nossos conteúdos! <br />
                    para que vc entenda mais dos nossos métodos.
                  </span>
                </button>
              </Link>

              <Link href={"/contato"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconContact />
                  </span>
                  <span className={styles.titleButton}> CONTATO</span>
                  <span className={styles.subtitleButton}>
                    Fale com a gente! Esclareça suas dúvidas. Agende uma aula
                    experimental!
                  </span>
                </button>
              </Link>
            </div>
            <div className={styles.divSubtitle}>
              <span className={styles.subtitle}>
                Seja você um iniciante apaixonado, um aspirante a virtuose ou
                alguém que deseja apenas explorar os benefícios terapêuticos da
                música, Nossa escola de música é o lugar onde os sonhos musicais
                se transformam em realidade.
              </span>
            </div>
          </section>
        </div>

        <div className={styles.containerTwo}>
          <div className={styles.divTitle}>
            <Image
              className={styles.titleCursos}
              src={titlecursos2}
              alt="Titulo  da sessão dois"
            />

            <span className={styles.spanCursos}>
              {" "}
              ESCOLHA O QUE MAIS LHE INSPIRA!
            </span>
          </div>

          <section className={styles.cursosSection}>
            <div className={styles.curso}>
              <Link href={"/violao"}>
                <h1 className={styles.titleCurso}><IconCurso/> VIOLÃO</h1>
                <Image
                  className={styles.imgCursos}
                  src={cursoviolao}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/pianoeteclado"}>
                <h1 className={styles.titleCurso}><IconCurso/> PIANO E TECLADO</h1>
                <Image
                  className={styles.imgCursos}
                  src={piano}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/guitarra"}>
                <h1 className={styles.titleCurso}><IconCurso/> GUITARRA</h1>
                <Image
                  className={styles.imgCursos}
                  src={guitarra}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/gaita"}>
                <h1 className={styles.titleCurso}><IconCurso/> GAITA</h1>
                <Image
                  className={styles.imgCursos}
                  src={gaita}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/ukulele"}>
                <h1 className={styles.titleCurso}><IconCurso/> UKULELE </h1>
                <Image
                  className={styles.imgCursos}
                  src={ukulele}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

           
          </section>
          <p className={styles.textoCursos}>
              Oferecemos uma ampla gama de cursos que abraçam a diversidade da
              música.
            </p>
        </div>

        <div className={styles.containerThree}>
          <section className={styles.ctaText}>
            <h1 className={styles.title3}>Por que Escolher a Music for All?</h1>
            <Image
              className={styles.img2}
              src={alunos}
              alt="Music For All Logo"
            />

            <ul className={styles.lista}>
              <li className={styles.item}>
                Educação Personalizada: Nossos instrutores talentosos e
                dedicados adaptam as aulas de acordo com suas metas e nível de
                habilidade, garantindo que você aproveite ao máximo sua
                experiência musical.
              </li>
              <li className={styles.item}>
                Variedade de Instrumentos: Oferecemos uma ampla gama de aulas de
                instrumentos, desde piano e violino até guitarra e canto, para
                que você possa escolher o que mais lhe inspira.
              </li>
              <li className={styles.item}>
                Aulas para Todas as Idades: De crianças a adultos, todos são
                bem-vindos para aprender, crescer e se expressar através da
                música.
              </li>
              <li className={styles.item}>
                Atmosfera de Apoio: Nossa comunidade de alunos e instrutores se
                une em torno do amor pela música, criando um ambiente onde todos
                se sentem valorizados e encorajados.
              </li>
              <li className={styles.item}>
                Atuações e Eventos: Oferecemos oportunidades emocionantes para
                nossos alunos se apresentarem e compartilharem seu talento com o
                mundo.
              </li>
            </ul>
        
            <h3 className={styles.subtitulo3}>
              Junte-se a Nós na Jornada Musical!
            </h3>
            <p className={styles.paragrafo}>
              Na Music for All, acreditamos que a música está ao alcance de
              todos. Deixe-nos guiá-lo através das maravilhas da música e
              ajudá-lo a descobrir seu potencial musical único. Explore nossos
              cursos, conheça nossos instrutores e mergulhe na magia da música.
              Sua jornada musical começa aqui, na Music for All.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
