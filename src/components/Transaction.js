
import Item from './Item'
import './transation.css'
import {v4 as uuidv4} from 'uuid';



const Transaction = () => {

    const data = [
      
      {title:"ค่ารักษาพยายยบาล ", Amount:"20,000"},
      {title:"ค่าบัตรเครดิต ", Amount:"7,000"},
      {title:"ค่าผ่อนรถ ", Amount:"10,000"},  
      {title:"ค่าน้ำมัน ", Amount:"50,000"},
      {title:"ค่าเช่าบ้าน ", Amount:"80,000"},
      {title: "ค่าแต่งคอม ", Amount:"300,000"}

    ]

  return (
    <ul className ="item-list"> 
        
        {data.map((fingle)=>{
          return<Item {...fingle}   key={uuidv4()}/>


        })}
    </ul>




  )
}

export default Transaction







