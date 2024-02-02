import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
          <span className="blog-post-card2-text1">{props.when}</span>
        </div>
        <h1 className="blog-post-card2-text2">{props.title}</h1>
        <span className="blog-post-card2-text3">{props.description}</span>
        <div className="blog-post-card2-container2">
          <div className="blog-post-card2-profile">
            <img
              alt="profile"
              src="/john%20doubleseed-200h.jpg"
              className="blog-post-card2-image1"
            />
            <span className="blog-post-card2-text4">{props.author}</span>
          </div>
          <span className="blog-post-card2-text5">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  title: 'How I Helped a Company Increase Its Revenue by 25% in One Year',
  label: 'ENTERPRISE',
  profileSrc: 'df3b55d8-ab02-4bd8-97df-7948ed24aa73',
  profileAlt: 'profile',
  imageAlt: 'image',
  rootClassName: '',
  imageSrc: '/increaseinrevenue-1500w.jpg',
  description:
    'By assessing, identifying, comparing and projecting, we can project a large revenue by following these steps:',
  when: '10 years ago',
  author: 'John Doublewood',
}

BlogPostCard2.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  profileSrc: PropTypes.string,
  profileAlt: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  when: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard2
