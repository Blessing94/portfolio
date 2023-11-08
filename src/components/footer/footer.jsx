import "./footer.css";
import { BsFacebook } from 'react-icons/bs';
import { AiFillCodepenCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
const Footer =() => {
    return (
<div className="footer">
        <div className="footer-links">
        <ul>
        <li><a href="https://www.facebook.com/"><i class="fab" aria-hidden="true"><BsFacebook/></i></a></li>
        <li><a href="https://www.linkedin.com/in/blessing-mutero-961316173/"><i class="fab" aria-hidden="true"><BsLinkedin/></i></a></li>
        <li><a href="https://codepen.io/"><i class="fab" aria-hidden="true"><AiFillCodepenCircle/></i></a></li> 
        <li><a href="https://twitter.com/"><i class="fab" aria-hidden="true"><BsTwitter/></i></a></li>
        <li><a href="https://github.com/"><i class="fab" aria-hidden="true"><BsGithub/></i></a></li>
      </ul>
        </div>
        <div className="footer-text">
        <p>@ 2023 Blessing Mutero.</p>
        </div>
</div>

   
    )
}
 export default Footer;