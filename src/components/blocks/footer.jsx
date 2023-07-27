const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
           <div className="footer__inner">
              
              <div className="footer__col">
                 <div className="copyright">© 2023 Serhii Zahorskyi - Portfolio</div>
                 <div className="social footer">
                    <a href="https://www.facebook.com/profile.php?id=100036791829059" target="_blank" className="social__item facebook"><svg><use href="#facebook"></use></svg></a>
                    <a href="https://www.instagram.com/zagsersan/" target="_blank" className="social__item instagram"><svg><use href="#instagram"></use></svg></a>
                    <a href="https://t.me/ZagSerSan" target="_blank" className="social__item telegram"><svg><use href="#telegram"></use></svg></a>
                    <a href="https://viber.click/48577782439" target="_blank" className="social__item viber"><svg><use href="#viber"></use></svg></a>
     
                    <a href="https://github.com/ZagSerSan" target="_blank" className="social__item github"><svg><use href="#github"></use></svg></a>
                    <a href="https://www.linkedin.com/in/zagsersan/" target="_blank" className="social__item linkedin"><svg><use href="#linkedin"></use></svg></a>
                 </div>
              </div>
              <div className="footer__col">
                 <nav className="nav footer">
                    <a href="#work" className="nav__link navlinkJS" data-scroll="work">WORK</a>
                    <a href="#about" className="nav__link navlinkJS" data-scroll="about">ABOUT ME</a>
                    {/* <button type="button" className="nav__link btn-black" id="btn_hireme">HIRE ME</button> */}
                 </nav>
              </div>
              
           </div>
        </div>
     </div>
  )
}

export default Footer
