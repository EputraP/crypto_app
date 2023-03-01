import { Select, Typography } from "antd";
import { Card, Row, Col, Input, Avatar } from "antd";
import React from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNews";

const demoImage = "https://cryptonews.net/i/ad-logo-2.png";
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const count = simplified ? 6 : 20;
  const {
    data: dataNews,
    isFetching: isFetchingRank,
    isLoading,
    isSuccess,
  } = useGetCryptosNewsQuery();
  // console.log(dataNews?.results);
  // console.log(!dataNews?.results);
  if (!dataNews?.results) return <div>Loading</div>;
  return (
    <Row gutter={[24, 24]}>
      {dataNews.results.map((news, i) => {
        // console.log(i, "", count);
        if (i < count) {
          return (
            <>
              <Col xs={24} sm={12} lg={8}>
                <Card hoverable className="news-card">
                  <a href={news.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-tittle" level={4}>
                        {news.title}
                      </Title>
                      <img
                        src={demoImage}
                        alt="news"
                        style={{ height: "100px", width: "100px" }}
                      ></img>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </a>
                </Card>
              </Col>
            </>
          );
        }
      })}
    </Row>
  );
};

export default News;
