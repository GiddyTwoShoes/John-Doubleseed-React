import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card3.css'

const BlogPostCard3 = (props) => {
  return (
    <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src="/beatthemarket-1500w.png"
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card3-image"
      />
      <div className="blog-post-card3-container">
        <div className="blog-post-card3-container1">
          <span className="blog-post-card3-text">{props.label}</span>
          <span className="blog-post-card3-text1">{props.when}</span>
        </div>
        <h1 className="blog-post-card3-text2">{props.title}</h1>
        <span className="blog-post-card3-text3">{props.description}</span>
        <div className="blog-post-card3-container2">
          <div className="blog-post-card3-profile">
            <img
              alt={props.profileAlt}
              src={props.profileSrc}
              className="blog-post-card3-image1"
            />
            <span className="blog-post-card3-text4">{props.author}</span>
          </div>
          <span className="blog-post-card3-text5">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard3.defaultProps = {
  description: 'A simple, practical approach to beating the market',
  profileSrc: '/newjohndoublewood/2%20edited%202-200w.webp',
  rootClassName: '',
  imageAlt: 'image',
  title: 'Forget the Experts: How I Beat the Market (and You Can Too)',
  label: 'ENTERPRISE',
  author: 'John Doublewood',
  when: '5 years ago',
  imageSrc: '4ddb7a05-e4cb-460c-9177-cfb24d3e14e8',
  profileAlt: 'profile',
}

BlogPostCard3.propTypes = {
  description: PropTypes.string,
  profileSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  author: PropTypes.string,
  when: PropTypes.string,
  imageSrc: PropTypes.string,
  profileAlt: PropTypes.string,
}

export default BlogPostCard3
