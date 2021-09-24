import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        // <>
        //     <nav>
        //         <div>
        //             <Link to = '/'>
        //                 JAVIS <i className = 'fab fa-accusoft' />
        //             </Link>
        //             <div onClick = {handleClick}>
        //                 <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
        //             </div>
        //             <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
        //                 <li>
                            
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </>
        <>
        </>
    )
}