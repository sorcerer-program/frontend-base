import {Link} from "react-router-dom";

function Nav() {
   return (
       <nav>
           {/*<a href="/">Home</a>*/}
           <a href="/about">About</a>
           <a href="/contact">Contact</a>
           {/* use link instead of <a></a> can avoid refresh*/}
           <Link to={"/"}>Home</Link>
           <div className={"nav-users"}>
               {/*<Link to={"/users/梁晨"}>梁晨</Link>*/}
               {/*<Link to={"/users/sorcerer"}>sorcerer</Link>*/}
           </div>
       </nav>
   )
}
export default Nav;