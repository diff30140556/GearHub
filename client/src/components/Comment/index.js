import { Avatar, Card, Skeleton, Switch } from "antd";
import { useState } from "react";
import PaginationSet from "../Pagination/index";
import "./style.css";
const { Meta } = Card;

function Comment({ comments }) {
  const [loading, setLoading] = useState(true);
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
        {comments.length !== 0 ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <li className="comment-card">
                <Card
                  style={{
                    marginTop: 16,
                  }}
                  loading={loading}
                >
                  <Meta title={comment.username} description={comment.comment} />
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
              <Meta title="testing" description="testing" />
            </Card>
          </li>
        )}
      </ul>
      <div className="pagination">
        <PaginationSet />
      </div>
    </div>
  );
}
export default Comment;
