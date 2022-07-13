import { useState } from 'react'
import './Fromcomponent.css'


const FromComponent = () => {


    const[title,setTitle] = useState('')
    const[amount,setamount]=useState('')


    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    const inputAmount = (event) => {
        setamount(event.target.value)
    }


    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            title:title,
            amount:amount

            


        }
        console.log(itemData);

    }




    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="from-control">
                    <label> ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการด้วยนะจร๊ะ" onChange={inputTitle} />
                </div>
                <div className="from-control">
                    <label> จำนวน</label>
                    <input type="number" placeholder="(ระบุจำนวนด้วยนะจร๊ะ" onChange={inputAmount} />
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มข้อมูล เด้อ</button>
                </div>

            </form>

        </div>
    )



}


export default FromComponent;