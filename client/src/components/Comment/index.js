import { Card } from "antd";
import React, { useState, useEffect } from "react";
import PaginationSet from "../Pagination/index";
import "./style.css";

const { Meta } = Card;

function Comment({ comments }) {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  useEffect( ()=> {
    if (comments) {
      setLoading(!loading)
    }
  }, [comments])
  
  return (
    <div className="comment-box d-flex flex-column justify-content-center align-items-center">
      <ul className="comment-list">
        {currentComments.length !== 0 ? (
          currentComments.map((comment) => (
            <div key={comment._id}>
              <li className="comment-card">
                <Card
                  style={{
                    marginTop: 16,
                  }}
                  loading={loading}
                >
                  <Meta
                    title={comment.username}
                    description={comment.comment}
                  />
                </Card>
              </li>
            </div>
          ))
        ) : (
          <li className="comment-card">
            <Card
              style={{
                marginTop: 16,
              }}
              loading={loading}
            >
              <Meta title="There's no comment yet" description="Leave the first one.." />
            </Card>
          </li>
        )}
      </ul>
      <div className="pagination">
        <PaginationSet
          current={currentPage}
          onChange={setCurrentPage}
          total={comments.length}
          pageSize={commentsPerPage}
          showQuickJumper={false}
        />
      </div>
    </div>
  );
}
export default Comment;
