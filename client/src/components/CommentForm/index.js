import Auth from "../../utils/auth";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutation";
import { Form, Button, Input } from "antd";
import "./style.css";
const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const onFinish = (values) => {
  console.log("Success:", values);
};


function CommentForm() {
    const [userComment, setUserComment] = useState('')
    const [addAComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserComment({
          ...userComment,
          [name]: value,
        });
      };

    const handleCreateComment = async (e) => {
        e.preventDefault();
        try {
            const response = await addAComment(
                { variables: { comment: userComment, productId: "646afd0d97d142d3ae4ff68b", userId: "646afd0d97d142d3ae4ff677", categoryId: "646afd0d97d142d3ae4ff6a3" } }
            )

            console.log(response)
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
        onFinish={onFinish}
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
