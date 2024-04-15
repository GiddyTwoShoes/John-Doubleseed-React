import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card4.css'

const BlogPostCard4 = (props) => {
  return (
    <div className={`blog-post-card4-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src="/incomeintheage-1500w.jpg"
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card4-image"
      />
      <div className="blog-post-card4-container">
        <div className="blog-post-card4-container1">
          <span className="blog-post-card4-text">{props.label}</span>
          <span className="blog-post-card4-text1">{props.when}</span>
        </div>
        <h1 className="blog-post-card4-text2">{props.title}</h1>
        <span className="blog-post-card4-text3">{props.description}</span>
        <div className="blog-post-card4-container2">
          <div className="blog-post-card4-profile">
            <img
              alt={props.profileAlt}
              src={props.profileSrc}
              className="blog-post-card4-image1"
            />
            <span className="blog-post-card4-text4">{props.author}</span>
          </div>
          <span className="blog-post-card4-text5">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  profileAlt: 'profile',
  description:
    'By investing in companies with a strong track record of paying consistent dividends, you can create a portfolio that generates passive income, regardless of your employment status.',
  title:
    'Income in the Age of Automation: Building a Sustainable Portfolio with Dividend Stocks',
  when: '3 days ago',
  author: 'John Doublewood',
  profileSrc: '/newjohndoublewood/2%20edited%202-200w.webp',
  label: 'ENTERPRISE',
}

BlogPostCard4.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  profileAlt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  when: PropTypes.string,
  author: PropTypes.string,
  profileSrc: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard4
