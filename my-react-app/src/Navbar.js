import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav> 
        <ul> 
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/projects">Project Gallery</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
        </ul>

    </nav>

    )
}

export default Navbar; 

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container-fluid">
//             {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>

//     <div class="collapse navbar-collapse" id="navbarText">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//        <Link to="/Homepage"><div>Home</div></Link>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//       </ul>
//       <span class="navbar-text">
//         Navbar text with an inline element
//       </span>
//     </div>
//   </div>
// </nav>