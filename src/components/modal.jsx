const Modal = () => {
  return (
    <div className='modal-bg--work display bg' id="modal_bg">
     
      {/* ActiveBox */}
      <div className="modal-work" id="modal_1">
          {/* <div className="modal-work" id="modal_1"> */}
          
          <button type="button" className="modal-work__btn-close" id="btn_work_close">
            <svg><use href="#close"></use></svg>
          </button>
    
          <div className="modal-work__preview">
            <div className="slider">
    
                <div>
                  <div className="modal-work__preview-item">
                      <img src="src/img/works/1-activebox/slide_1.jpg" alt="slide-1"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="src/img/works/1-activebox/slide_2.jpg" alt="slide-2"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="src/img/works/1-activebox/slide_3.jpg" alt="slide-3"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item last-slide--align">
                      <img src="src/img/works/1-activebox/slide_4.jpg" alt="slide-4"/>
                  </div>
                </div>
    
            </div>
          </div>
    
          <div className="modal-work__content">
            <h3 className="modal-work__projectname">ActiveBox</h3>
            <h4 className="modal-work__category">CATEGORY: Lending <span>|</span> 2022</h4>
            <div className="modal-work__used-stack">
                <svg><use href="#html"></use></svg>
                <svg className="scss"><use href="#scss"></use></svg>
                <svg className="jquery"><use href="#jquery"></use></svg>
                {/* <a href="https://github.com/ZagSerSan/ZagSerSan.github.io/tree/master/portfolio/1-activebox">
                  <svg><use href="#folder"></use></svg>
                </a> */}
                {/* <svg className="react"><use href="#react"></use></svg> */}
            </div>
            <div className="modal-work__client">
                <a href="portfolio/1-activebox/index.html" target="_blank">Open website</a>
                <a href="https://github.com/ZagSerSan/ZagSerSan.github.io/tree/master/portfolio/1-activebox" target="_blank">View files</a>
            </div>
            <div className="modal-work__textbox">
                <p className="modal-work__text">This site was my first project. At that time, I was just starting to learn the basics of layout using a design template. But then, after consolidating the old and gaining new knowledge, I decided to redo it again with better practice. After finishing the course, I want to change it to react.js</p>
                {/* <p className="modal-work__text">Данный сайт был моим первым проектом. В это время я только начинал изучать основы вёрстки по шаблону дизайна. Но потом, после закрепления старых и получения новых знаний, я решил переделать его снова с более лучшей практикой. После окончания курса хочу переделать его на react.js</p> */}
            </div>
            <div className="modal-work__btnbox">
                <div className="modal-work__btnbox-prev">
                  <button className="modal-work__btn" id="btn_prev" data-openmodal="modal_1" data-prev="modal_4">previous</button>
                </div>
                <div className="modal-work__btnbox-next">
                  <button className="modal-work__btn" id="btn_next" data-openmodal="modal_1" data-next="modal_2">next</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Modal