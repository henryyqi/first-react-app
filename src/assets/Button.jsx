import PropTypes from 'prop-types'

const Button = ({
    color='steelblue',
    text='',
    onClick
}) => {
  return (
      <button onClick={onClick} style={{backgroundColor: color}} className='button'>{text}</button>
  )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button