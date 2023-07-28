const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__col">
            <div className="about__photo">
              <img src="src/img/about/photo.png" alt="designer_photo" />
            </div>
          </div>
          <div className="about__col">
            <h3 className="about__suptitle">ABOUT ME</h3>
            <h2 className="about__title">WHO AM I</h2>
            <div className="about__text">
              I was born in Ukraine. After school i attended Kamienski technikum
              in the profession of power engineer. At the time of admission to
              the university, I decided to change my specialization to IT. After
              studies and consideration he stopped at the front end. At that
              time, I did not have a good opportunity to study in IT, so I was
              self-taught. In 2023, he began to seriously think about raising
              his qualifications and on January 20, he took a course from
              Vladilen Minin on the Junior Frontend (React) developer profile.
              At the moment, I have completed 2/3 of the course and after
              completing it, I will try to go into it in more detail. But I am
              also looking for a job in advance and I am open to offers.
            </div>
            <div className="about-btns">
              {/* <button type="button" className="about-btns__item btn-black" id="btn_hireme">HIRE ME</button> */}
              <a
                href="https://drive.google.com/drive/folders/1HKMRvPkR9TdaQ-3hU_OKvDMTbN0abX8l?usp=sharing"
                target="_blank"
                type="button"
                className="about-btns__item btn-black"
                id="btn_resume"
              >
                SEE MY CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
