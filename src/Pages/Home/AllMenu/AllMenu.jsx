import { Col, Container, Row } from "react-bootstrap";
// import Image1 from '../../../assets/menu/burger-11.jpg'
// import Image2 from '../../../assets/menu/burger-12.jpg'
// import Image3 from '../../../assets/menu/burger-13.jpg'
// import Image4 from '../../../assets/menu/burger-14.jpg'
// import Image5 from '../../../assets/menu/burger-15.jpg'
// import Image6 from '../../../assets/menu/burger-16.jpg'
// import Image7 from '../../../assets/menu/burger-17.jpg'
// import Image8 from '../../../assets/menu/burger-18.jpg'
import SingleMenu from "./SingleMenu";
import './Menu.css';
import { Link } from "react-router-dom";

const renderRatingIcons = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (rating > 0.5) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--;
        } else if (rating > 0 && rating < 1) {
            stars.push(<i key={"half"} className="bi bi-star-half"></i>);
            rating--;
        } else {
            stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
        }
    }
    return stars;
};



const AllMenu = () => {
    // Mock Data Cards
    const mockData = [
        {
            id: "0001",
            image: 'https://i.ibb.co/F7nMKTt/burger-11.jpg',
            title: "Crispy Chicken",
            paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
            rating: 5,
            price: 99.15,
        },
        {
            id: "0002",
            image: 'https://i.ibb.co/h1fcCHB/burger-12.jpg',
            title: "Ultimate Bacon",
            paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
            rating: 4.5,
            price: 99.32,
        },
        {
            id: "0003",
            image: 'https://i.ibb.co/rFvbFgG/burger-13.jpg',
            title: "Black Sheep",
            paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
            rating: 4,
            price: 69.15,
        },
        {
            id: "0004",
            image: 'https://i.ibb.co/6DpkbDk/burger-14.jpg',
            title: "Vegan Burger",
            paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
            rating: 3.5,
            price: 99.25,
        },
        {
            id: "0005",
            image: 'https://i.ibb.co/p2qpJS7/burger-15.jpg',
            title: "Double Burger",
            paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
            rating: 3.0,
            price: 59.25,
        },
        {
            id: "0006",
            image: 'https://i.ibb.co/Y82x6VH/burger-16.jpg',
            title: "Turkey Burger",
            paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
            rating: 3,
            price: 79.18,
        },
        {
            id: "0007",
            image: 'https://i.ibb.co/X7nBbQX/burger-17.jpg',
            title: "Smokey House",
            paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
            rating: 2.5,
            price: 99.19,
        },
        {
            id: "0008",
            image: 'https://i.ibb.co/tcZ5Cfj/burger-18.jpg',
            title: "Classic Burger",
            paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
            rating: 2.0,
            price: 89.12,
        },
        // Add more mock data objects as needed
    ];

    return (
        <section className="menu_section" id="menu">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className="para">
                        <h2>Our Crazy Items</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium a minima quas exercitationem nesciunt commodi error in, repellat dolores.S</p>
                    </Col>
                </Row>
                <Row>
                    {
                        mockData.map((cardData, index) => (
                            <SingleMenu
                                key={index}
                                image={cardData.image}
                                rating={cardData.rating}
                                title={cardData.title}
                                paragraph={cardData.paragraph}
                                price={cardData.price}
                                renderRatingIcons={renderRatingIcons}
                            />
                        ))
                    }
                </Row>
                <Row className="pt-5">
                    <Col lg={5} sm={6}>
                        <div className="ads_box ads_img1 mb-5 mb-md-0">
                            <h4 className="mb-0">GET YOUR FREE</h4>
                            <h5 >CHEESE FIVE</h5>
                            <Link to='/' className="btn btn_red px-4 rounded-0">Learn More</Link>
                        </div>
                    </Col>
                    <Col lg={7} sm={6}>
                        <div className="ads_box ads_img2">
                            <h4 className="mb-0">GET YOUR FREE</h4>
                            <h5 >CHEESE FIVE</h5>
                            <Link to='/' className="btn btn_red px-4 rounded-0">Learn More</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AllMenu;