import Auth from "../../utils/auth";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutation";
import { Form, Button, Input } from "antd";
import "./style.css";
const { TextArea } = Input;

function CommentForm() {
    const [userComment, setUserComment] = useState('')
    const [addAComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = (e) => {
        setUserComment(e.target.value);
      };
  

    const handleCreateComment = async () => {
        try {
            // const response = await addAComment(
            //     { variables: { 
            //       comment: userComment, 
            //       productId: product_id,
            //       userId: user_id,
            //       categoryId: category_id
            //     } }
            // );

          window.location.reload();
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
