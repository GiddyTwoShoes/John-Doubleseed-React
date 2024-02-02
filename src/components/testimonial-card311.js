import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card311.css'

const TestimonialCard311 = (props) => {
  return (
    <header
      className={`testimonial-card311-testimonial-card ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="testimonial-card311-icon">
        <path
          d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"
          className=""
        ></path>
      </svg>
      <div className="testimonial-card311-testimonial">
        <span className="testimonial-card311-text">{props.quote}</span>
        <img
          alt={props.pictureAlt}
          src={props.pictureSrc}
          className="testimonial-card311-image"
        />
        <span className="testimonial-card311-text1">{props.name}</span>
        <span className="testimonial-card311-text2">
          {props.descriptionText}
        </span>
      </div>
    </header>
  )
}

TestimonialCard311.defaultProps = {
  rootClassName: '',
  descriptionText: 'Senior Financial Analyst, GPMG',
  name: 'Vikram Aditya',
  pictureAlt: 'profile',
  pictureSrc: '/vikram%20aditya-200h.png',
  quote:
    "His success isn't just measured in returns, it's measured in lives transformed. He celebrates every milestone, big and small, and reminds me that even the occasional market dip is just a temporary blip on the path to long-term success.",
}

TestimonialCard311.propTypes = {
  rootClassName: PropTypes.string,
  descriptionText: PropTypes.string,
  name: PropTypes.string,
  pictureAlt: PropTypes.string,
  pictureSrc: PropTypes.string,
  quote: PropTypes.string,
}

export default TestimonialCard311
