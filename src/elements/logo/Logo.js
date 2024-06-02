import PropTypes from "prop-types";
import React from 'react';
import Link from "next/link";

const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <Link href={"/"}>
                <img className="logo-light" src={image} alt="Corporate Logo" />
                <img className="logo-dark" src={image2} alt="Corporate Logo" />
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
