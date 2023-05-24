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
  const handlePageChange = (page) => {
    onChange(page);
  };

  return (
    <Pagination
      current={current}
      onChange={handlePageChange}
      total={total}
      pageSize={pageSize}
      showQuickJumper={showQuickJumper}
    />
  );
}

export default PaginationSet;
