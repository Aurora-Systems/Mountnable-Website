import { flexCenter, imgBg } from '../components/cssStyles';
import { Fade } from 'react-awesome-reveal';
import { companyName } from '../components/GeneralText';
import { Carousel } from 'react-bootstrap';
import fif from '../assets/fif.png'
import kdv from '../assets/kdv.jpg'
import bul from '../assets/bul.jpg'
const Home=()=>{

    return(
        <div className=''>
            <Fade direction="down" cascade={true}>
            <div className='row page'>
                <div className={`col-sm ${flexCenter} order-md-2`}>
                    <div className="text-center">
                        <h1 className="display-1">{companyName}</h1>
                        <p>Civil Engineering <b>•</b> Renovations <b>•</b> Construction</p>
                    </div>
                </div>
                <div className="col-sm order-md-1" style={imgBg('https://holatomp.sirv.com/Bellprize/10654.jpg')}>
                </div>
            </div>
            </Fade>
            <Fade direction="down" cascade={true}>
            <div className='row page'>
                <div className={`col-sm ${flexCenter}`}>
                    <div>
                        <h1 className="display-1">Renovations</h1>
                        <p>Need a fresh new look, maybe splash in a new coat of paint or get a few items for the house.</p>
                    </div>
                </div>
                <div className="col-sm" style={imgBg('https://holatomp.sirv.com/Bellprize/2050.jpg')}>
                    
                </div>
            </div>
            </Fade>
            <Fade direction="down" cascade={true}>
            <div className="row page">
                <div className={`col-sm ${flexCenter} order-md-2`}>
                    <div>
                        <h1 className="display-1">Sports Facilities</h1>
                        <p>Need a tennis court, swimming pool, basketball court? </p>
                    </div>
                </div>
                <div className="col-sm" style={imgBg('https://holatomp.sirv.com/Bellprize/2148905539.jpg')}></div>
               
            </div>
            </Fade>
            <Fade direction="down" cascade={true}>
                <div className='page'>
                    <h1 className="display-1 text-center">Our Top Clients</h1>
                    <div className={`${flexCenter}`}>
                        <Carousel>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/FIF.png" alt="" />
                                <Carousel.Caption>
                                    <h3>FIF College</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/kdv.jpg" alt="" />
                               <Carousel.Caption>
                                    <h3>KDV</h3>
                               </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/bul.jpg" alt="" />
                               <Carousel.Caption>
                                    <h3>Bulawayo Sports Club</h3>
                               </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                        
                </div>
            </Fade>
        </div>
    )
}

export default Home;