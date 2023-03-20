import Link from "next/link";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

import { getTestContent } from "../lib/getTestContent";

const Home = async () => {
  const testEntries = await getTestContent();

  return (
    <main className={styles.main}>
      <div className={styles.flexColumn}>
        <p>jomoz</p>
        {testEntries.map(({ slug, title }) => {
          return (
            <Link key={slug} href={`/${slug}`}>
              <h2>{title}</h2>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
