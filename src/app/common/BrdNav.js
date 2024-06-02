import React from 'react';
import Link from 'next/link';
// import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><Link href="/">Home</Link></li>
            <li><Link href='/#about' >About</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/portfolio">Our Work</Link></li>
            <li><Link href="/contact">Contact</Link></li>

        </ul>
    )
}
export default Nav;
