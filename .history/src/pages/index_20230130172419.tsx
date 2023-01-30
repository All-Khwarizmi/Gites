import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Test from "./Test";
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Test />
    </>
  );
};

export default Home;
