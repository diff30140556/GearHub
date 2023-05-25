import Auth from "../../utils/auth";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_COMMENT } from "../../utils/mutation";
import { QUERY_ONE_PRODUCT } from "../../utils/queries";
import { Form, Button, Input } from "antd";
import { ADD_COMMENTS } from "../../utils/action";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
const { TextArea } = Input;

function CommentForm() {
  const [state, dispatch] = useStoreContext();
  const {comments} = state;

  const [userComment, setUserComment] = useState('')
  const [addAComment, { error }] = useMutation(ADD_COMMENT);
  const { itemId, idCategory } = useParams();
  

  const handleChange = (e) => {
    setUserComment(e.target.value);
  };

  const addComment = async () => {
    dispatch({
      type: ADD_COMMENTS,
      comment: { userComment }
    });
    console.log(state);
  }

  const handleCreateComment = async () => {
    try {
      addComment()
      const response = await addAComment(
        {
          variables: {
            comment: userComment,
            productId: itemId,
            categoryId: idCategory
          }
        }
      );
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="comment-form">
      <Form
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
        className="mx-auto mt-5 mt-md-0"
      >
        <Form.Item name="comment">
          <TextArea
            showCount
            maxLength={1000}
            style={{
              height: 300,
              resize: "none",
            }}
            onChange={handleChange}
            placeholder="Log in to leave comment..."
            required
          />
        </Form.Item>
        <Form.Item className="d-flex justify-content-end justify-content-md-start mt-5">
          {Auth.loggedIn() ? (
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleCreateComment}
            >
              Submit
            </Button>
          ) : null}
        </Form.Item>
      </Form>
    </div>
  );
}

export default CommentForm;
