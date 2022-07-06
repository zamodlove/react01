const FromComponent = () => {

    const inputANT = (event) => {

        console.log("FUCK YOU");

    }

    return (
        <div>
            <from>
                <div className="from-control">
                    <label> ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการด้วยนะจร๊ะ" onChange={inputANT}/>
                </div>
                <div className ="from-control">
                    <label> จำนวน</label>
                    <input type ="number" placeholder="(ระบุจำนวนด้วยนะจร๊ะ"/>
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มข้อมูล เด้อ</button>
                </div>

            </from>

        </div>
    )



}


export default FromComponent