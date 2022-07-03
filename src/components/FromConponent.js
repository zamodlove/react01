const FromComponent = () => {

    return (
        <div>
            <from>
                <div className="from-control">
                    <label> ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการด้วยนะจร๊ะ"></input>
                </div>
                <div className="from-control">
                    <label> ชื่อรายการ</label>
                    <input type="number" placeholder="ระบุจำนวนด้วยนะจร๊ะ"></input>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล เด้อ</button>
                </div>





            </from>

        </div>
    )

}



export default FromComponent