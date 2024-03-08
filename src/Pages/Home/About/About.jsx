import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Pizza from '../../../assets/about/pizza.png'
// import Salad from '../../../assets/about/salad.png';
// import Delivery from '../../../assets/about/delivery-bike.png'
import './About.css'

const About = () => {
    // Mock Data Cards
    const mockData = [
        {
            image: 'https://i.ibb.co/GR8Xy4L/pizza.png',
            title: "Original",
            paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
        },
        {
            image: 'https://i.ibb.co/g9KkdjY/salad.png',
            title: "Qualty Foods",
            paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
        },
        {
            image: 'https://i.ibb.co/7WC0zwJ/delivery-bike.png',
            title: "Fastest Delivery",
            paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
        },
        // Add more mock data objects as needed
    ];
    return (
        <>
            <section className="about_section" id="about">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2>The Burger tests better when you eat.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eligendi provident quisquam perferendis, vitae ex tenetur omnis corrupti ratione animi? Blanditiis quasi ducimus, facere placeat delectus ex eos rem accusamus!
                            </p>
                            <Link to='/' className="btn order_now btn_red">
                                Explore Full Menu
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </section >
            <section className="about_wrapper">
                <Container>
                    <Row className="justify-content-md-center">
                        {mockData.map((cardData, index) => (
                            <Col md={4} lg={4} className="md-mb-4 " key={index}>
                                <div className="about_box text-center">
                                    <div className="about_icon">
                                        <img src={cardData.image} className="img-fluid" alt="icon" />
                                        <h4>{cardData.title}</h4>
                                        <p>{cardData.paragraph}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </section>
        </>
    );
};

export default About;