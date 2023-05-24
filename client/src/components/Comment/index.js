import { Avatar, Card, Skeleton, Switch } from "antd";
import { useState } from "react";
import PaginationSet from "../Pagination/index";
import "./style.css";
const { Meta } = Card;

function Comment({ comments }) {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 1;
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <div className="comment-box d-flex flex-column justify-content-center align-items-center">
      <p className="text-white">
        Click the btn to switch the status for now, need to implement loading
        status using Reducer or useState after
      </p>
      <Switch checked={!loading} onChange={onChange} />
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
              <Meta title="User Name" description="Comments" />
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
