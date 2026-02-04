'use client'

import styles from "./page.module.scss";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import logo from "@assets/images/logo.png";
import background from "@assets/images/background4.png";
import linkedin from "@assets/images/linkedin.svg";
import github from "@assets/images/github.svg";
import whatsapp from "@assets/images/whatsapp.svg";
import instagram from "@assets/images/instagram.svg";

export default function BioPage() {
  return (
    <main className={styles.container}>
      {/* Imagem de fundo */}
      <div className={styles.backgroundImage}>
        <ExportedImage
          src={background}
          alt="Background Image"
          fill
          priority
        />
      </div>

      <section className={styles.card}>
        <header>
          <ExportedImage
            src={logo}
            alt="Hortência Côrtes Logo"
            width={120}
            height={120}
            priority
          />

          <div>
            <h1>Hortência Côrtes</h1>
            <p>
              <LaptopMacIcon />
              Desenvolvedora Front-end & Web
            </p>
          </div>


          <div className={styles.description}>
            {/* <div> */}
              <div>
              <FlashOnIcon />
                <p>
                  Criação de sites 
                </p>

              </div>
                  <span>
                    Modernos, responsivos, bem estruturados e otimizados para SEO.
                  </span>
                  <span>
                    Para quem quer presença online profissional.
                  </span>
            {/* </div> */}
          </div>
        </header>

        <div className={styles.buttons}>
          <Link
            href="https://www.linkedin.com/in/hortenciacortes/"
            target="_blank"
          >
            <button className="hc-button-primary">
              <ExportedImage
                src={linkedin}
                alt="Linkedin Icon"
                width={20}
                height={20}
              />
              Linkedin
            </button>
          </Link>

          <Link
            href="https://github.com/hortenciacortes"
            target="_blank"
          >
            <button className="hc-button-primary">
              <ExportedImage
                src={github}
                alt="GitHub Icon"
                width={20}
                height={20}
              />
              GitHub
            </button>
          </Link>

          <Link
            href="https://wa.me/5569999898567?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
          >
            <button className="hc-button-primary">
              <ExportedImage
                src={whatsapp}
                alt="WhatsApp Icon"
                width={20}
                height={20}
              />
              WhatsApp
            </button>
          </Link>

          <Link href="https://instagram.com/hortenciacorts" target="_blank">
            <button className="hc-button-primary">
              <ExportedImage
                src={instagram}
                alt="Instagram Icon"
                width={20}
                height={20}
              />
              Perfil pessoal
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
