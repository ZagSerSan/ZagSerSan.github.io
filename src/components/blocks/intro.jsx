const Intro = () => {
  return (
    <div className="intro" id="intro">
        <div className="container">
           <div className="intro__inner">
              <div className="intro-content">
                 <div>
                    <h2 className="intro-content__greeting">Hello, I’m</h2>
                    <h1 className="intro-content__name">Serhii Zahorskyi</h1>
                    <p className="intro-content__prof">Frontend developer</p>
                    <div className="social">
                       <a href="https://www.facebook.com/profile.php?id=100036791829059" target="_blank" className="social__item facebook"><svg><use href="#facebook"></use></svg></a>
                       <a href="https://www.instagram.com/zagsersan/" target="_blank" className="social__item instagram"><svg><use href="#instagram"></use></svg></a>
                       <a href="https://t.me/ZagSerSan" target="_blank" className="social__item telegram"><svg><use href="#telegram"></use></svg></a>
                       <a href="https://viber.click/48577782439" target="_blank" className="social__item viber"><svg><use href="#viber"></use></svg></a>
                       <a href="https://github.com/ZagSerSan" target="_blank" className="social__item github"><svg><use href="#github"></use></svg></a>
                       <a href="https://www.linkedin.com/in/zagsersan/" target="_blank" className="social__item linkedin"><svg><use href="#linkedin"></use></svg></a>
                    </div>
                    {/* <button type="button" className="btn-black" id="btn_hireme">HIRE ME</button> */}
                    {/* <button type="button" className="btn-black" id="btn_resume">SEE MY RESUME</button> */}
                 </div>
              </div>
              <div className="intro-photo">
                 <img src="src/img/intro/photo.png" alt="photo" />
              </div>
           </div>
        </div>
     </div>
  )
}

export default Intro
