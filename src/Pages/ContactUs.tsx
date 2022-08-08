import { flexEvenly } from "../components/cssStyles";

const ContactUs=()=>{
    return(
        <div className="container">
            <div className="page d-flex flex-column align-items-center">
                <div className="">
                    <h1 className="display-1">Contact Us</h1>
                </div>
                <div className="text-center">
                    <p>+263 77 254 2373</p>
                    <p>mountnable@zohomail.com</p>
                    
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
                <div className="container-fluid">
                <iframe
                    src="https://tally.so/embed/mZjZb0?alignLeft=1&hideTitle=1&transparentBackground=1"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    title="Get In Touch">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;