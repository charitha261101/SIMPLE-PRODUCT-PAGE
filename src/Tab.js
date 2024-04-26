import { useState } from "react";
function Tableusingallex(){
    const [tableData, setTableData] = useState([])
const[data, setData] = useState({
    firsname:'',
    emailid:'',
    salary:''
});
const{firsname,emailid,salary} = data;
const handleChange = e =>{
    setData({...data,[e.target.name]:[e.target.value]});
   
}
const handleSubmit = e =>{
    e.preventDefault();
    const checkEmptyInput = !Object.values(data).every(res=>res==="")
    if(checkEmptyInput)
    {
        // setTableData({...tableData,data});
     const newData = (data1)=>([...data1, data])
     setTableData(newData);
     const emptyInput= {firsname:'', emailid:'', salary:''}
     setData(emptyInput)
    }
}
    return(
        <div>
            <form>
               First Name : <input type = "text" name="firsname" value={firsname} onChange={handleChange}/><br/>
                Email id:<input type = "text" name ="emailid" value={emailid} onChange={handleChange}/><br/>
                Salary :<input type = "text" name="salary" value={salary} onChange={handleChange} /><br/>
                <button type="btn" onClick={handleSubmit}>Submit</button>

            </form>
            <table className= 'table'>
        <thead>
            <tr>
            <th>S.N</th>
            <th> First Name</th>
            <th>Email id</th>
            <th>Salary</th>
            </tr>
        </thead>
        <tbody>
        {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.firsname}</td>
                            <td>{data.emailid}</td>
                            <td>{data.salary}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
        </div>
    )
}
export default Tableusingallex;