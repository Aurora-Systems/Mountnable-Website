import { flexCenter, imgBg } from "../components/cssStyles"
import logo from '../assets/logo.png'
import { Fade } from "react-awesome-reveal"

const About=()=>{
    return(
        <div>
            <Fade direction="down">
                <div className="row">
                    <div className={`page ${flexCenter}`} style={imgBg('https://anacrold.sirv.com/Website/umbrella-chair.jpg')}>
                        <div className="text-center opacityBg">
                            <img src={logo} height="100"/>
                            <h1><b>About Us</b></h1>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade direction="down">
                <div className="row page">
                <div className={`col-sm ${flexCenter} order-md-2`}>
                        <div>
                        <h1 className="dispaly-1">Who Are We?</h1>
                        <p className="ps-2">Formerly known as Enitre Home we thought it would be time for a makeover. With over 22 years of experience we are quite sure we can tackle any project head forward with the customers intrest at heart. We belive in surpassing our limit to give you the best service. Our track record is impeccable with over 165 projects completed to date. Start your next project with us, satisfaction guranteed.</p>
                        </div>
                        <div>
                        <button className="btn generalBtn" data-tally-open="wzxLjk" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Contact</button></div>
                    </div>
                    <div className="col-sm" style={imgBg('https://anacrold.sirv.com/Website/man-with-painting-roll.jpg')}></div>
                </div>
            </Fade>
            <Fade direction="down">
                <div className="page">
                    <img className="Sirv" data-src="https://anacrold.sirv.com/Website/paving-slabs-stacked-pallet-road-repair-process-closeup-selective-focus-tiles-seasonal-reconstruction-pavement-walking-paths-parks.jpg" alt="" />
                </div>
            </Fade>
        </div>
        
    )
}

export default About