import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Row, Col } from "antd";

import ExampleFlagComponent from "./components/example-flag-component";
import CountrySelector from "./components/country-selector";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scratchmap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Row>
        <Col span={24}>col-24</Col>
      </Row> */}
      {/* <ExampleFlagComponent/> */}
      <CountrySelector />
    </>
  );
}
