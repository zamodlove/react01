

const Item = (props) => {
  const{title,Amount} =props

    
  return (
   <li>  {title}<span>{Amount}</span></li>
    
  )
}

export default Item




