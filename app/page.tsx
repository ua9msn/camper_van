import Image from "next/image";
import { Header } from "../components/Header";
import styles from "./page.module.css";

const imageLoader = ({ src, width }: { src: string; width: number }) => {
  return `https://placehold.co/${width}x${400}`;
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <article>
        
      </article>
    </main>
  );
}
