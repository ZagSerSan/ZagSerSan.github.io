import { useState } from "react"

const Header = () => {
  const [fixed, setFixed] = useState(false)
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav')

  window.addEventListener("scroll", (e) => {
      window.scrollY > 400 ? setFixed(true) : setFixed(false)
  })

  // console.log(scroll)
  // const handleScroll = () => {
  //   setScroll(window.scrollY);
  // }

  // button hireme in media440px
  // let btnHeader_hierme = document.querySelector('.btnHeaderJS');

  const handleBurger = () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
  }

  return (
    <header className={'header' + (fixed ? ' fixed' : '')}>
      <div className="container">
        <div className="header__inner">
          <div className="header-logo">
            <img src="src/img/header/logo-icon2.png" alt="logo" />
            <div className="header-logo__content">
              <div className="header-logo__name">Serhii Zahorskyi</div>
              <div className="header-logo__prof">Frontend dev</div>
            </div>
          </div>
          <div className="header__nav">
            <nav className="nav">
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
              <a
                href="https://drive.google.com/drive/folders/1HKMRvPkR9TdaQ-3hU_OKvDMTbN0abX8l?usp=sharing"
                target="_blank"
                className="nav__link cv"
              >
                SEE MY CV
              </a>
            </nav>
            <a
              href="https://drive.google.com/drive/folders/1HKMRvPkR9TdaQ-3hU_OKvDMTbN0abX8l?usp=sharing"
              target="_blank"
              type="button"
              className="nav__link btn-black"
              id="btn_hireme"
            >
              SEE MY CV
            </a>
            <div onClick={handleBurger} className="burger">
              <div className="burger__icon">line</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
