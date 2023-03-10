import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useGetCryptosDetailsQuery } from "../services/cryptoApi";

// import {
//   useGetCryptoDetailsQuery,
//   useGetCryptoHistoryQuery,
// } from "../services/cryptoApi";
// import Loader from "./Loader";
// import LineChart from "./LineChart";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptosDetailsQuery(coinId);

  console.log(data);
  return <div>CryptoDetails{coinId}</div>;
};

export default CryptoDetails;
