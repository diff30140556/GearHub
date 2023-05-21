import { Form, Button, Input } from 'antd';
import './style.css'
const { TextArea } = Input;

const onChange = (e) => {
    console.log('Change:', e.target.value);
};

const onFinish = (values) => {
    console.log('Success:', values);
};

const CommentForm = () => (
    <div className="comment-form">
        <Form
            style={{
                maxWidth: 600,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item name="comment">
                <TextArea
                    showCount
                    maxLength={1000}
                    style={{
                        height: 300,
                        resize: 'none',
                    }}
                    onChange={onChange}
                    placeholder="Log in to leave comment..."
                required/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    </div>
);
export default CommentForm;