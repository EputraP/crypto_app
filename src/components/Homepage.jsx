import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { News, Cryptocurrencies } from "./";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  if (isFetching) return "Loading...";
  const globalStats = data[0];

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Coins Count"
            value={millify(globalStats.coins_count)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Active Markets"
            value={millify(globalStats.active_markets)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Mcap"
            value={millify(globalStats.total_mcap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Volume"
            value={millify(globalStats.total_volume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Average Change Percent"
            value={millify(globalStats.avg_change_percent)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
