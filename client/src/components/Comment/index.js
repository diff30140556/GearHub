import { Avatar, Card, Skeleton, Switch } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

function Comment() {
    const [loading, setLoading] = useState(true);
    const onChange = (checked) => {
        setLoading(!checked);
    };
    return (
        <div className="comment-box d-flex flex-column justify-content-center align-items-center">
            <p className='text-white'>Click the btn to switch the status for now, need to implement loading status using Reducer or useState after</p>
            <Switch checked={!loading} onChange={onChange} />
            <ul className="comment-list">
                <li className="comment-card">
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                        loading={loading}
                    >
                        <Meta
                            title="User Name"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla rem, sint ad perferendis, provident architecto similique vel distinctio dolore fugiat dicta tempore"
                        />
                    </Card>
                </li>
                <li className="comment-card">
                    <Card
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}

                    >
                        <Skeleton loading={loading} active>
                            <Meta
                                title="User Name"
                                description="eveniet neque quasi nostrum. Expedita facere voluptas adipisci fugit distinctio repellat harum optio"
                            />
                        </Skeleton>
                    </Card>
                </li>
            </ul>



        </div>
    );
};
export default Comment;