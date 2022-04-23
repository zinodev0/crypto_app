import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

const { Title } = Typography;

const Hompage = () => {
  const { data, isFetching, isLoading, isError, isUninitialized, error } =
    useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return <Loader />;
  if (isLoading) return "Loadingggg";
  if (isError) {
    console.log("eeeeeee", error);
    console.log("bbb", process.env.REACT_APP_RAPIDAPI_KEY);
    console.log(typeof process.env.REACT_APP_RAPIDAPI_KEY);
  }
  if (isUninitialized) return "Uniniti";

  return (
    <>
      <Title level={2} className="heading">
        {" "}
        Global Crypto Stats{" "}
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.total}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
            prefix={"$"}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total 24h Volume "
            value={millify(globalStats.total24hVolume)}
            prefix={"$"}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market"
            value={millify(globalStats.totalMarkets)}
            prefix={"$"}
          />{" "}
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          {" "}
          Top 10 Cryptocurrencies in the world{" "}
        </Title>
        <Title level={3} className="show-more">
          {" "}
          <Link to="/cryptocurrencies">Show More </Link>{" "}
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          {" "}
          Latest Crypto News{" "}
        </Title>
        <Title level={3} className="show-more">
          {" "}
          <Link to="/news">Show More </Link>{" "}
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Hompage;
