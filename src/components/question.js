import React from 'react'

import PropTypes from 'prop-types'

import './question.css'

const Question = (props) => {
  return (
    <div className="question-container">
      <span className="question-text heading4">{props.question}</span>
      <span className="question-text1">{props.answer}</span>
    </div>
  )
}

Question.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question
