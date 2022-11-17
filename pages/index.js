import Head from 'next/head';

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(
        'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
      );

      setPokemon(await res.json());
    }
    getPokemon();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}
