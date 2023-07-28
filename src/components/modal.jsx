const Modal = ({ workItem, handleShow }) => {
  console.log(workItem)
  const { name, category, date, description } = workItem

  return (
    <div className="modal-bg--work bg" id="modal_bg">
      <div className="modal-work" id="modal_1">
        <button
          onClick={handleShow}
          type="button"
          className="modal-work__btn-close"
        >
          <svg>
            <use href="#close"></use>
          </svg>
        </button>

        <div className="modal-work__preview">
          <div className="slider">
            <div>
              <div className="modal-work__preview-item">
                <img
                  src="src/img/works/1-activebox/slide_1.jpg"
                  alt="slide-1"
                />
              </div>
            </div>
            <div>
              <div className="modal-work__preview-item">
                <img
                  src="src/img/works/1-activebox/slide_2.jpg"
                  alt="slide-2"
                />
              </div>
            </div>
            <div>
              <div className="modal-work__preview-item">
                <img
                  src="src/img/works/1-activebox/slide_3.jpg"
                  alt="slide-3"
                />
              </div>
            </div>
            <div>
              <div className="modal-work__preview-item last-slide--align">
                <img
                  src="src/img/works/1-activebox/slide_4.jpg"
                  alt="slide-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal-work__content">
          <h3 className="modal-work__projectname">{name}</h3>
          <h4 className="modal-work__category">
            CATEGORY: {category} <span>|</span> {date}
          </h4>
          <div className="modal-work__used-stack">
            <svg>
              <use href="#html"></use>
            </svg>
            <svg className="scss">
              <use href="#scss"></use>
            </svg>
            <svg className="jquery">
              <use href="#jquery"></use>
            </svg>
            {/* <a href="https://github.com/ZagSerSan/ZagSerSan.github.io/tree/master/portfolio/1-activebox">
                  <svg><use href="#folder"></use></svg>
                </a> */}
            {/* <svg className="react"><use href="#react"></use></svg> */}
          </div>
          <div className="modal-work__client">
            <a href="portfolio/1-activebox/index.html" target="_blank">
              Open website
            </a>
            <a
              href="https://github.com/ZagSerSan/ZagSerSan.github.io/tree/master/portfolio/1-activebox"
              target="_blank"
            >
              View files
            </a>
          </div>
          <div className="modal-work__textbox">
            <p className="modal-work__text"></p>
          </div>
          {/* <div className="modal-work__btnbox">
                <div className="modal-work__btnbox-prev">
                  <button className="modal-work__btn" id="btn_prev" data-openmodal="modal_1" data-prev="modal_4">previous</button>
                </div>
                <div className="modal-work__btnbox-next">
                  <button className="modal-work__btn" id="btn_next" data-openmodal="modal_1" data-next="modal_2">next</button>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Modal
