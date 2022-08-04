import mountain from '../assets/mountain.png'
import {copyrightYear} from '../components/GeneralText'
import { flexCenter, flexEvenly } from './cssStyles'

const Footer=()=>{
    return(
        <div className="container-fluid footer">
            <div className="row text-center">
                <div className="col-sm">
                    <img src={mountain} alt="Mountnable"/>
                    <br/>
                    <b>Mountnable</b>
                </div>
                <div className="col-sm">
                    <b>+263 772 542 373</b>
                    <br/>
                    <b>mountnable@zohomail.com</b>
                    <div className={`${flexEvenly} p-2`}>
                        <div>
                            <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/instagram.png" alt="instagram" />
                        </div>
                        <div>
                            <img className="Sirv" src="https://holatomp.sirv.com/Bellprize/facebook-app-symbol.png"  alt="facebook" />
                        </div>
                        <div>
                            <img className="Sirv" data-src="https://holatomp.sirv.com/Bellprize/linkedin.png" alt="linkedin" />
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <b>© {copyrightYear}</b>
                    <br/>
                    <b>Designed by <a href="http://aurorasystems.cf" target="_blank">Aurora</a></b>
                </div>
            </div>
        </div>
    )
}

export default Footer