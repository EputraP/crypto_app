import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosRankQuery } from "../services/cryptoRank";
import { useGetCryptosExchangesQuery } from "../services/cryptoApi";
import ImgCrypto from "../images/5341451.png";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const {
    data: dataRank = [{ data: [] }],
    isFetching: isFetchingRank,
    isLoading,
    isSuccess,
  } = useGetCryptosRankQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(dataRank.data);
  }, [isFetchingRank]);
  useEffect(() => {
    if (searchTerm !== "") {
      const filteredData = dataRank?.data?.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
    } else {
      setCryptos(dataRank?.data);
    }
  }, [dataRank, searchTerm]);

  if (isFetchingRank) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Input>
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency, index) => {
          if (index < count) {
            return (
              <>
                <Col
                  xs={24}
                  sm={12}
                  lg={6}
                  className="crypto-card"
                  key={currency.id}
                >
                  <Link to={`/crypto/${currency.id}`}>
                    <Card
                      title={`${currency.rank}. ${currency.name}`}
                      extra={<img className="crypto-image" src={ImgCrypto} />}
                      hoverable
                    >
                      <p>Price: {millify(currency.price_usd)}</p>
                      <p>Market Cap: {millify(currency.market_cap_usd)}</p>
                      <p>
                        Daily Change: {millify(currency.percent_change_24h)}%
                      </p>
                    </Card>
                  </Link>
                </Col>
              </>
            );
          }
        })}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
