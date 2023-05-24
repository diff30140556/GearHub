import { Pagination } from "antd";
import { useState } from "react";
import "./style.css";

function PaginationSet({
  current,
  onChange,
  total,
  pageSize,
  showQuickJumper,
}) {
  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={total}
      pageSize={pageSize}
      showQuickJumper={showQuickJumper}
    />
  );
}

export default PaginationSet;
