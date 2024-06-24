import Image from "next/image";
import Logo from "../../public/images/Logo_MOPA.png"
import styles from "./page.module.css";
import FormHome from "@/components/FormHome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <header className={styles.Header}>
        <Image
          className={styles.Logo}
          src={Logo}
          alt="Logo do sistema: MOPA"
          width={150}
          height={120}
          priority
        ></Image>
    </header>
    <body className={styles.body}>
      <div className={styles.formContent}>
        <FormHome/>
      </div>
      <Footer/>
    </body>
   </>
  );
}
