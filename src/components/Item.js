import PropTypes from 'prop-types'

const Item = (props) => {
  const{title,Amount} =props
  
  return (
   <li>  {title}<span>{Amount}</span></li>
    
  )
}

Item.prototype={
  title:PropTypes.string.isRequired,
  Amount:PropTypes.number.isRequired,

}

export default Item




