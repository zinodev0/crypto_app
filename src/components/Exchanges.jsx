import React from "react";
import { Table, Typography } from "antd";
import { useGetCryptoExchangeQuery } from "../services/cryptoExchangeApi";
import Loader from "./Loader";
import millify from "millify";

const { Title } = Typography;

const Exchanges = () => {
  const { data, isFetching, error, isError, isLoading, isUninitialized } =
    useGetCryptoExchangeQuery();

  // const formattedData = Object.keys(data).map((key) => {
  //   return data[key];
  // });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Website",
      dataIndex: "url",
      key: "url",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Volume",
      dataIndex: "volume_usd",
      key: "volume_usd",
      render: (text) => <p>${millify(text)}</p>,
    },
  ];

  if (isFetching) return <Loader />;
  if (isError) {
    console.log("eeeeeee", error);
  }
  if (isLoading) return "Loadingggg";
  if (isUninitialized) return "Uniniti";

  return (
    <div>
      <Title level={3}>Exchanges</Title>

      <Table
        dataSource={
          data &&
          Object.keys(data).map((key) => {
            return data[key];
          })
        }
        columns={columns}
      />
    </div>
  );
};

export default Exchanges;
