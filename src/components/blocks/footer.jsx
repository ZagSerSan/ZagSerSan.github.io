import IconSVG from "../iconSVG"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__col">
            <div className="copyright">
              © 2023 Serhii Zahorskyi - Portfolio
            </div>
            <div className="social footer">
              <a
                href="https://www.linkedin.com/in/zagsersan/"
                target="_blank"
                className="social__item linkedin"
              >
                <IconSVG iconName='mail'/>
              </a>
              <a
                href="https://t.me/ZagSerSan"
                target="_blank"
                className="social__item telegram"
              >
                <IconSVG iconName='telegram'/>
              </a>
              <a
                href="https://viber.click/48577782439"
                target="_blank"
                className="social__item viber"
              >
                <IconSVG iconName='viber'/>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100036791829059"
                target="_blank"
                className="social__item facebook"
              >
                <IconSVG iconName='facebook'/>
              </a>
              <a
                href="https://www.instagram.com/zagsersan/"
                target="_blank"
                className="social__item instagram"
              >
                <IconSVG iconName='instagram'/>
              </a>
              <a
                href="https://github.com/ZagSerSan"
                target="_blank"
                className="social__item github"
              >
                <IconSVG iconName='github'/>
              </a>
              <a
                href="https://www.linkedin.com/in/zagsersan/"
                target="_blank"
                className="social__item linkedin"
              >
                <IconSVG iconName='linkedin'/>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <nav className="nav footer">
              <a
                href="#work"
                className="nav__link navlinkJS"
                data-scroll="work"
              >
                WORK
              </a>
              <a
                href="#about"
                className="nav__link navlinkJS"
                data-scroll="about"
              >
                ABOUT ME
              </a>
              {/* <button type="button" className="nav__link btn-black" id="btn_hireme">HIRE ME</button> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
