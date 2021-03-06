import React from 'react';
import FooterComp from './FooterComponent';
import './Footer.scss'

const Footer: React.FC = () => (
  <FooterComp>
    <ul className="footer__git-links">
      <li><a href="https://github.com/kli2m">kli2m</a></li>
      <li><a href="https://github.com/sovanmarat">SovanMarat</a></li>
      <li><a href="https://github.com/tv-dem">tv-dem</a></li>
      <li><a href="https://github.com/funfordima">funfordima</a></li>
    </ul>
    <div className="footer__rs-link"><a href="https://rs.school/">RsSchool</a></div>
  </FooterComp>);
export default Footer;
