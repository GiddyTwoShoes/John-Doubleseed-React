import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card31.css'

const TestimonialCard31 = (props) => {
  return (
    <header
      className={`testimonial-card31-testimonial-card ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="testimonial-card31-icon">
        <path
          d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"
          className=""
        ></path>
      </svg>
      <div className="testimonial-card31-testimonial">
        <span className="testimonial-card31-text">{props.quote}</span>
        <img
          alt={props.pictureAlt}
          src={props.pictureSrc}
          className="testimonial-card31-image"
        />
        <span className="testimonial-card31-text1">{props.name}</span>
        <span className="testimonial-card31-text2">
          {props.descriptionText}
        </span>
      </div>
    </header>
  )
}

TestimonialCard31.defaultProps = {
  pictureAlt: 'profile',
  quote:
    "Investing used to be a scary monster lurking in the shadows, always ready to pounce. Then I met John Doubleseed. He wasn't just a financial analyst, he was a financial Jedi Master, wielding his knowledge like a lightsaber against market uncertainty.",
  name: 'Robert Dwight',
  rootClassName: '',
  pictureSrc: '/robert%20dwight-200h.png',
  descriptionText: 'Client, XYZ Investments',
}

TestimonialCard31.propTypes = {
  pictureAlt: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  pictureSrc: PropTypes.string,
  descriptionText: PropTypes.string,
}

export default TestimonialCard31
