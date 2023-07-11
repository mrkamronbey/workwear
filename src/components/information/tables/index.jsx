import React from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
import "./style.css";

const Tables = () => {
  const { t } = useTranslation();
  const columns = [
    {
      title: t("Custumer.16"),
      dataIndex: "size",
      align: "center",
    },
    {
      title: t("Custumer.17"),
      dataIndex: "cm",
      align: "center",
    },
    {
      title: t("Custumer.18"),
      dataIndex: "cm1",
      align: "center",
    },
    {
      title: t("Custumer.19"),
      dataIndex: "cm2",
      align: "center",
    },
    {
      title: t("Custumer.20"),
      dataIndex: "cm3",
      align: "center",
    },
  ];
  const data = [
    {
      key: "1",
      size: "44/46",
      cm: "87-94",
      cm1: "76-83",
      cm2: "93-99",
      cm3: "160-165",
    },
    {
      key: "2",
      size: "48/50",
      cm: "95-102",
      cm1: "84-91",
      cm2: "100-105",
      cm3: "165-170",
    },
    {
      key: "3",
      size: "52/54",
      cm: "103-110",
      cm1: "92-99",
      cm2: "106-111",
      cm3: "170-175",
    },
    {
      key: "4",
      size: "56/58",
      cm: "111-118",
      cm1: "100-107",
      cm2: "118-120",
      cm3: "175-180",
    },
    {
      key: "5",
      size: "60/62",
      cm: "119-126",
      cm1: "108-113",
      cm2: "121-128",
      cm3: "180-185",
    },
  ];
  const arr = [1, 2, 3, 4];

  // {
  //   arr.map(() => {
  //     data.push({
  //       key: "1",
  //       size: "88/92",
  //       cm: "87-94",
  //       cm1: "88-95",
  //       cm2: "89-96",
  //       cm3: "90-97",
  //     });
  //   });
  // }
  return (
    <>
      <Table
        scroll={{
          x: 1000,
        }}
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
      />
    </>
  );
};

export default Tables;
