import React, { useState, useEffect } from "react";
import GoodsTable from "./../components/GoodsTable";
import { getPeople as getGoods } from "../components/utils";

const index = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGoods()
      .then((data) => {
        setGoods(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let filteredGoods = goods;

  const pagination = {
    showSizeChanger: false,
    total: filteredGoods.length
  };

  return (
    <div>
      <h3>People</h3>
      <GoodsTable
        goods={filteredGoods}
        pagination={pagination}
        loading={loading}
      />
    </div>
  );
};

export default index;
