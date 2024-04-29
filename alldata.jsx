import React from 'react'
import'./style.css'


const Alldata = ({employee}) => {

  return (
    <div className='main'>
        {
            
            employee.map((val)=>{
                return(
                    <div key={val.empid} className="card-wrapper">
                        <div className='card-main'>
                           
                            <p align="center"> Empid : {val.empid}</p>
                            <p align="center">Empname : {val.empname}</p>
                            <p align="center">Empphone : {val.empphone}</p>
                            <p align="center">Empaddress : {val.empaddress.country}</p>
                            <p align="center">State : {val.empaddress.state}</p>
                            <p align="center">City :{val.empaddress.city}</p>
                            <p align="center">Area :{val.empaddress.area}</p>
                            <p align="center">Empdeg : {val.empdeg}</p>
                            <p align="center">Empsalary : {val.empsalary}</p>
                            <p align="center">Empdepartment : {val.empdepartment}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Alldata
