import PropTypes from 'prop-types'

const Item = (props) => {
  const{title,Amount} =props
  const status = Amount<0 ? "รายจ่าย": "รายรับ"
  
  return (
   <li>  {title}{status}<span>{Amount}</span></li>
    
  )
}

Item.prototype={
  title:PropTypes.string.isRequired,
  Amount:PropTypes.number.isRequired,

}

export default Item




