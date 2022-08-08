import { Fade } from "react-awesome-reveal";
import { Carousel } from "react-bootstrap";
import { flexCenter } from "../components/cssStyles";

const Services=()=>{
    return(
        <div>
            <Fade direction="down">
            <div className="row page">
                <div className={`col-sm ${flexCenter} order-md-2`}>
                    <h1 className="display-1">Construction Works</h1>
                </div>
                <div className="col-sm">
                    <Carousel>
                        <Carousel.Item>
                            <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/roof.jpg" alt="" />
                            <Carousel.Caption>
                                <b>Roofing</b>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/construction-silhouette.jpg" alt="" />
                            <Carousel.Caption>
                                <b>Building</b>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/389.jpg" alt="" />
                            <Carousel.Caption>
                                <b>Paving</b>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                </div>
            </Fade>
            <Fade direction="down">
                <div className="row page">
                    <div className={`col-sm ${flexCenter}`}>
                        <h1 className="display-1">Renovations</h1>
                    </div>
                    <div className="col-sm">
                        <Carousel>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/8217.jpg" alt="" />
                                <Carousel.Caption>Fitted Kitchens</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/2050.jpg" alt="" />
                                <Carousel.Caption>Interior Decor</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/people-painting-house-wall.jpg" alt="" />
                                <Carousel.Caption>Painting</Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </Fade>
            <Fade direction="down">
                <div className="row page">
                    <div className={`col-sm ${flexCenter} order-md-2`}>
                        <h1 className="display-1">Sports Facilities</h1>
                    </div>
                    <div className="col-sm">
                        <Carousel>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/aerial-shooting-outdoor-basketball-court.jpg" alt="" />
                                <Carousel.Caption>Basketball Court</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/umbrella-chair.jpg" alt="" />
                                <Carousel.Caption>Swimming Pools</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/tennis-court.jpg" alt="" />
                                <Carousel.Caption>Tennis Ball Court</Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Services;