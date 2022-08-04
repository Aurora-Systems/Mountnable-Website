import { flexCenter, imgBg } from "../components/cssStyles"
import mountain from '../assets/mountain.png'
import { Fade } from "react-awesome-reveal"

const About=()=>{
    return(
        <div>
            <Fade direction="down">
                <div className="row">
                    <div className={`page ${flexCenter}`} style={imgBg('https://holatomp.sirv.com/Bellprize/389.jpg')}>
                        <div className="text-center opacityBg">
                            <img src={mountain}/>
                            <h1>About Us</h1>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade direction="down">
                <div className="row page">
                <div className={`col-sm ${flexCenter} order-md-2`}>
                        <div>
                        <h1 className="dispaly-1">Who Are We?</h1>
                        <p className="ps-2">Formerly known as Bellprize we thought it would be time for a makeover. With over 22 years of experience we are quite sure we can tackle any project head forward with the customers intrest at heart. We belive in surpassing our limit to give you the best service. Our track record is impeccable with over 165 projects completed to date. Start your next project with us, satisfaction guranteed.</p>
                        </div>
                        <div><button className="btn generalBtn">Contact</button></div>
                    </div>
                    <div className="col-sm" style={imgBg('https://holatomp.sirv.com/Bellprize/2594.jpg')}></div>
                </div>
            </Fade>
            <Fade direction="down">
                <div className="page">
                    <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/1846.jpg" alt="" />
                </div>
            </Fade>
        </div>
        
    )
}

export default About