import './style.css'
// import { ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Collapse } from 'antd';
import { useState } from 'react';
import Comment from '../../components/Comment/index'
import CommentForm from '../../components/CommentForm/index'
const { Panel } = Collapse;

const data = {
    name: "MSI - Vector 15.6 inch 165hz Gaming Laptop",
    price: 2069.99,
    quantity: 10,
    description: "Game like a pro with this MSI Vector GP66 gaming laptop. The Intel Core i7 HX processor and 32GB of RAM run graphic-intensive games smoothly, while the 1TB SSD offers rapid start-ups and ample storage space. This MSI gaming laptop has an NVIDIA GeForce RTX 3070ti graphics card, which produces detailed images on the 15.6-inch QHD 165hz for advanced gameplay..",
    isNew: true,
    image: ["laptop1.jpg"],
    specification: {
        brand: "MSI",
        processor: "Intel Core i7",
        memory: "32GB RAM",
        storage: "1TB SSD"
    }
};

const specification = data.specification


function ProductPage() {
    // const [size, setSize] = useState('large'); // default is 'middle'
    return (
        <main>
            <div className="wrap">
                <div className="productPage-section py-5 px-md-5">
                    <Row>
                        <Col sm={12} lg={7}>
                            <h4 className='text-white mb-5 d-flex justify-content-end'>{data.name}</h4>
                            <div className="productPage-img">
                                <img src="https://i.imgur.com/3ICVUYL.png" alt="product" />
                            </div>
                        </Col>
                        <Col sm={12} lg={5}>
                            <div className="product-description">
                                <div className="productPage-info mb-5">
                                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente porro aut quia dolore, fuga, similique labore sed obcaecati illo explicabo ad quod rerum doloribus optio quasi repellat eaque nostrum nam! Facilis adipisci saepe quas voluptatibus dignissimos quod voluptatem, est distinctio, ducimus pariatur, perspiciatis blanditiis nesciunt iusto delectus temporibus beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis assumenda a magnam placeat totam dicta soluta incidunt quae, exercitationem unde illo iste sint facere deleniti voluptatem vero vitae ab ratione! Voluptatum ducimus dolor magnam, dolorem ad facilis iste autem perferendis. Quae distinctio beatae dolorum quibusdam eveniet. Dolor distinctio ipsum perferendis a fuga praesentium reiciendis obcaecati cum rerum quae dolore, recusandae consequuntur earum sed officia iste quas explicabo minima, ipsa illum, cupiditate saepe vel ad? Veniam dicta obcaecati aliquam maxime eum delectus eveniet corrupti explicabo! Consequatur beatae aut dolorum, numquam itaque temporibus officiis. Accusamus pariatur a molestiae quae suscipit illum minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro, modi totam aspernatur natus, quo perspiciatis consectetur nam hic reprehenderit saepe enim minus numquam, aut debitis quos corrupti nostrum ab. Animi sequi accusantium porro velit officiis rem in. Deleniti minima provident cum blanditiis eveniet, sed expedita nam obcaecati rem commodi magni perferendis quos. Esse illo modi obcaecati blanditiis cum debitis, a officiis earum laboriosam repellendus nisi corporis ducimus consequatur? Tempora modi, repellat impedit ad delectus quaerat mollitia odit repudiandae assumenda illum aliquid velit quod soluta ipsa magnam nobis. Itaque blanditiis praesentium eveniet animi ipsam quisquam aspernatur. Aspernatur quibusdam veniam similique rerum fugit, libero reprehenderit, nihil nemo quia officia quos molestiae quas ad ipsum exercitationem quisquam porro praesentium illum perspiciatis ipsa voluptatem. Eos eaque ducimus quis sint nulla dolores, alias atque odio dolorem ab sunt ullam temporibus totam deserunt aliquid delectus necessitatibus eius. Porro dicta, odit adipisci, vel repellendus facilis nobis accusamus explicabo sit possimus eius amet dolorem. Recusandae quibusdam ea ex magni soluta, accusamus tempora dolorem voluptates maiores nihil eos! Delectus molestias omnis distinctio perspiciatis adipisci optio, nulla ea unde numquam repudiandae earum atque soluta ut explicabo maiores dolore fuga voluptas dolor eos doloremque. Quo quia dolorum modi inventore ad!</p>
                                </div>
                                <div className="productPage-btn  flex-md-row d-flex align-items-center justify-content-center">
                                    <div className="quantity-btn">
                                        <Button className='minus-btn'>-</Button>
                                        <Button className='primary-btn' type="primary">100</Button>
                                        <Button className='plus-btn'>+</Button>
                                    </div>
                                    <div className="cart-btn-box">
                                        <Button className='cart-btn' type="primary" shape="round" icon={<ShoppingCartOutlined className='btn-icon' />} size={'large'}>
                                            add to cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="product-detail-info px-3 py-5 px-md-5">
                    <Collapse accordion className='collapse-form w-sm-100 w-md-75 mx-auto'>
                        <Panel header="Overview" key="1">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, non blanditiis adipisci provident animi, voluptatem accusantium tenetur vero nesciunt obcaecati numquam, iste at quasi asperiores nobis delectus quos vitae distinctio!</p>
                        </Panel>
                        <Panel header="specification" key="2">
                            <Table striped className='text-white' responsive>
                                <tbody>
                                    <tr>
                                        <td>brand</td>
                                        <td>{specification.brand}</td>
                                    </tr>
                                    <tr>
                                        <td>processor</td>
                                        <td>{specification.processor}</td>
                                    </tr>
                                    <tr>
                                        <td>memory</td>
                                        <td>{specification.memory}</td>
                                    </tr>
                                    <tr>
                                        <td>storage</td>
                                        <td>{specification.storage}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eius repellat unde delectus minima consequatur, earum nostrum dolorum culpa sit, officiis, repellendus at natus! Odio magni eaque corporis quas perspiciatis.</p>
                        </Panel>
                    </Collapse>
                </div>

                <div className="comment-section px-3 py-5 px-lg-5">
                    <Row>
                        <Col sm={12} md={7} className='d-flex justify-content-end'>
                            <Comment />
                        </Col>
                        <Col sm={12} md={5}>
                            <CommentForm />
                        </Col>
                    </Row>
                </div>
            </div>
        </main>
    )
};
export default ProductPage;