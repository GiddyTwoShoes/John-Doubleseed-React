import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card21.css'

const BlogPostCard21 = (props) => {
  return (
    <div className={`blog-post-card21-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card21-image"
      />
      <div className="blog-post-card21-container">
        <div className="blog-post-card21-container1">
          <span className="blog-post-card21-text">{props.label}</span>
          <span className="blog-post-card21-text1">{props.when}</span>
        </div>
        <h1 className="blog-post-card21-text2">{props.title}</h1>
        <span className="blog-post-card21-text3">{props.description}</span>
        <div className="blog-post-card21-container2">
          <div className="blog-post-card21-profile">
            <img
              alt="profile"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/abdd0e40-46e2-4176-bb0b-aad642d14a53/2e1f7520-78fd-4246-8fbe-d4520e1a931e?org_if_sml=1135198&amp;force_format=original"
              className="blog-post-card21-image1"
            />
            <span className="blog-post-card21-text4">{props.author}</span>
          </div>
          <span className="blog-post-card21-text5">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard21.defaultProps = {
  profileSrc: 'df3b55d8-ab02-4bd8-97df-7948ed24aa73',
  rootClassName: '',
  imageSrc: 'b4fef073-c8f6-4da9-af7c-79434ba6a69a',
  imageAlt: 'image',
  author: 'John Doublewood',
  description:
    'By assessing, identifying, comparing and projecting, we can project a large revenue by following these steps:',
  profileAlt: 'profile',
  when: '10 years ago',
  title: 'How I Helped a Company Increase Its Revenue by 25% in One Year',
  label: 'ENTERPRISE',
}

BlogPostCard21.propTypes = {
  profileSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  profileAlt: PropTypes.string,
  when: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard21
