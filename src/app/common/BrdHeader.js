// import 'bootstrap/dist/css/bootstrap.css'
import './../../assets/scss/header/_header.scss'
import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./../../elements/logo/Logo";
import Nav from './BrdNav';
import MobileMenu from './Brd__MobileMenu';
import useStickyHeader from "./useStickyHeader";
// import './../assets/scss/style.css';
import './../../assets/scss/style.css'


const HeaderOne = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;
    
    const checkChange = (value) => {
      setCheck(value);
    };

    return (
        <>
            <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-lg-3 col-md-6 col-4">
                            <Logo 
                                image={`./images/logo/brd-logo.png`}
                                image2={`./images/logo/brd-logo.png`}
                            />
                        </div>
                        <div className="col-lg-9 col-md-6 col-8 position-static">
                            <div className="header-right">
                                <nav className="mainmenu-nav d-none d-lg-block">
                                    <Nav />
                                </nav>
                                {/* <div className="header-btn">
                                    <a className={`btn-default ${btnStyle}`} target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">BUY NOW</a>
                                </div> */}
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                    </div>
                                </div>
                                {/* <Darkmode /> */}
                            </div>  
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
        </>
    )
}
export default HeaderOne;