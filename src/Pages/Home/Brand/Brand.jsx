import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Brand.css';
import { Link } from 'react-router-dom';
// import StoreIOS from '../../../assets/shop/appstore.png';
// import StoreGoogle from '../../../assets/shop/googleplay.png';
// import DownloadImage from '../../../assets/shop/e-shop.png';
// import Brand1 from 'https://i.ibb.co/qmzZMsJ/brand-16.png'
// import Brand2 from '../../../assets/brands/brand-12.png'
// import Brand3 from '../../../assets/brands/brand-13.png'
// import Brand4 from '../../../assets/brands/brand-14.png'
// import Brand5 from '../../../assets/brands/brand-15.png'
// import Brand6 from '../../../assets/brands/brand-16.png'
// import Brand7 from '../../../assets/brands/brand-17.png'
// import Brand8 from '../../../assets/brands/brand-18.png'

const Brand = () => {
    return (



        <>
            <section className="shop_section" id='shop'>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p>
                                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius
                            </p>
                            <Link to="/">
                                <img
                                    src='https://i.ibb.co/1vtY4vK/appstore.png'
                                    alt="IOS"
                                    className="img-fluid store me-3"
                                />
                            </Link>
                            <Link to="/">
                                <img
                                    src=' https://i.ibb.co/cCHpjj6/googleplay.png'
                                    alt="Android"
                                    className="img-fluid store me-3"
                                />
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <img src='https://i.ibb.co/j61xDFV/e-shop.png' alt="e-shop" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="brand_section">
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/qmzZMsJ/brand-16.png' className="img-fluid" alt="brand-1" />
                                        </div>
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/rMy9xvF/brand-17.png' className="img-fluid" alt="brand-2" />
                                        </div>
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/7JJBNwN/brand-18.png' className="img-fluid" alt="brand-3" />
                                        </div>
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/DGp3XYv/brand-11.png' className="img-fluid" alt="brand-4" />
                                        </div>
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/LN2wJrr/brand-12.png' className="img-fluid" alt="brand-5" />
                                        </div>

                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/Pt0j9PZ/brand-13.png' className="img-fluid" alt="brand-6" />
                                        </div>
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/pzgmYfN/brand-14.png' className="img-fluid" alt="brand-6" />
                                        </div>
                                        <div className="brand_img">
                                            <img src='https://i.ibb.co/Thr7j5d/brand-15.png' className="img-fluid" alt="brand-6" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>


    );
};

export default Brand;