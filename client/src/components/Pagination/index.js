import { Pagination } from 'antd';
import { useState } from 'react';
import './style.css'

function PaginationSet() {
    const [current, setCurrent] = useState(1);
    const onChange = (page) => {
        setCurrent(page);
    };
    return <Pagination current={current} onChange={onChange} total={30} pageSize={3} showQuickJumper={false} />;
};

export default PaginationSet;