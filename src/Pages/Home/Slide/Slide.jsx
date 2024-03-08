
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
// import { Props } from '../src/components/Carousel';

// import img1 from '../../../assets/home/01.jpg'
// import img2 from '../../../assets/home/02.jpg'
// import img3 from '../../../assets/home/03.png'
// import img4 from '../../../assets/home/04.jpg'
// import img5 from '../../../assets/home/05.png'

const Slide = () => {
    return (
        <section className="h-50">
            <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop={true}>
                <div>
                    <img src='https://i.ibb.co/BtbYYfp/03.png' />
                </div>
                <div>
                    <img src='https://i.ibb.co/259pxzk/02.jpg' />
                </div>
                <div>
                    <img src='https://i.ibb.co/f1cm35J/01.jpg' />
                </div>
                <div>
                    <img src='https://i.ibb.co/w4sF5GW/04.jpg' />
                </div>
                <div>
                    <img src='https://i.ibb.co/kgj9RLN/05.png' />
                </div>
                <div>
                    <img src='https://i.ibb.co/JC1Kxrr/06.png' />
                </div>
            </Carousel>
        </section>
    );
};

export default Slide;