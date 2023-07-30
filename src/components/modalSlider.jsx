import Slider from 'react-slick'

const ModalSlider = ({ modal_images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div>
      <Slider {...settings}>
        {modal_images.map(item => (
          <div key={item}>
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ModalSlider
