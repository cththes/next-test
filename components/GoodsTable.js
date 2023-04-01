import React from "react";
import { Table } from "antd";
import styles from '../styles/GoodsTable.module.css'

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Brand",
    dataIndex: "birth_year"
  }
];

const GoodsTable = ({ goods, pagination, loading }) => {
  const dataSource = goods.map((item) => ({
    key: item.name,
    ...item
  }));

  return (
    <div>
      <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      loading={loading}
      className={styles.table}
    />
    </div>
  );
};

export default GoodsTable;
