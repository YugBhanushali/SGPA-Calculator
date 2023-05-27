'use client'
import React, { useState } from 'react'
import { calculateMarks, calculateGrade, calculatePointers, calculateSGPA,inputArray } from './Calculations.js'

const Field = () => {
    
    const [arr, setArr] = useState(inputArray);

    const [sgpaArr, setSgpaArr] = useState([0, 0]);

    const addField = () => {
        setArr([...arr, {
            id: `${arr.length + 1}`,
            subject: {
                SubjectLabel: "Subject Name:",
                SubjectType: "text",
                SubjectValue: "",
                credits: 0,
                CreditLabel: "Credits:",
                CreditType: "number"
            },
            final:{
                label: "Marks out of 100:",
                type: "number",
                value: 0
            },
            internal:{
                label: "Internal marks out of 25:",
                type: "number",
                value: 0
            },
            midterm:{
                label: "Midterm marks out of 50:",
                type: "number",
                value: 0
            },
            total:{
                marks: calculateMarks(0, 0, 0),
                grade: calculateGrade(calculateMarks(0, 0, 0)),
                credits: 0
            }
        }])
    }

    //delete the last field
    const deleteField = () => {
        const updatedArr = arr.slice(0, arr.length - 1);
        setArr(updatedArr);
        setSgpaArr(calculateSGPA(updatedArr));
    }

    const handleChange = (e, id) => {
        console.log(e.target.value, id, e.target.name);
        const updatedArr = arr.map(item => {
            if (item.id === id) {
                if (e.target.name === "SubjectValue") {
                    item.subject.SubjectValue = e.target.value;
                } else if (e.target.name === "credits") {
                    item.subject.credits = e.target.value;
                } else if (e.target.name === "final") {
                    item.final.value = e.target.value;
                } else if (e.target.name === "internal") {
                    item.internal.value = e.target.value;
                } else if (e.target.name === "midterm") {
                    item.midterm.value = e.target.value;
                }
            }
            item.total.marks = calculateMarks(item.final.value, item.internal.value, item.midterm.value);
            item.total.grade = calculateGrade(item.total.marks);
            item.total.pointers = calculatePointers(item.total.grade);
            return item;
        }
        )
        setArr(updatedArr);
        setSgpaArr(calculateSGPA(arr));
    }
  return (
    <div className='flex flex-col'>
        <h1 className='text-[20px] font-bold text-center'>SGPA Calculator</h1>
        {arr.map(item => (
            <div key={item.id} className='flex text-[16px] mt-3'>
                <div className='flex space-x-1'>
                    <div className='w-[230px]'>
                        <label>{item.subject.SubjectLabel}</label>
                        <input
                            type={item.subject.SubjectType}
                            value={item.subject.SubjectValue}
                            onChange={(e) => handleChange(e, item.id)}
                            name='SubjectValue'
                            placeholder='Enter Subject Name'
                        />
                    </div>
                    <div className='w-[230px]'>
                        <label>Subject {item.subject.CreditLabel}</label>
                        <input
                            type={item.subject.CreditType}
                            value={item.subject.credits}
                            onChange={(e) => handleChange(e, item.id)}
                            name='credits'
                        />
                    </div>
                    <div className='w-[230px]'>
                        <label>{item.final.label}</label>
                        <input
                            type={item.final.type}
                            value={item.final.value}
                            onChange={(e) => handleChange(e, item.id)}
                            name='final'
                        />
                    </div>
                    <div className='w-[230px]'>
                        <label>{item.internal.label}</label>
                        <input
                            type={item.internal.type}
                            value={item.internal.value}
                            onChange={(e) => handleChange(e, item.id)}
                            name='internal'
                        />
                    </div>
                    <div className='w-[230px]'>
                        <label>{item.midterm.label}</label>
                        <input
                            type={item.midterm.type}
                            value={item.midterm.value}
                            onChange={(e) => handleChange(e, item.id)}
                            name='midterm'
                        />
                    </div>

                    <div className={`w-[100px] text-center border-[3px] border-[#31ee31]`}>
                        <label>Total</label>
                        <p>{item.total.marks}</p>
                    </div>
                    
                    <div className='w-[100px] text-center border-[3px] border-[#31ee31]'>
                        <label>Grade</label>
                        <p>{item.total.grade}</p>
                    </div>
                </div>
            </div>
        ))}

        <div className='mt-6 text-[16px] flex justify-center items-center' >
            <button className='ml-0 mr-3 border-[#4dbe31] border-2 p-1' onClick={addField}>Add Field</button>
            <button className='border-[#e94c4c] border-2 p-1' onClick={deleteField}>Remove field</button>
        </div>
        <div className=' font-extrabold text-lg my-3 flex flex-col justify-center items-center'>
            <h2>Total Credits: {
                sgpaArr[0] === 0 ? 0 : sgpaArr[0]
                
            }</h2>
            <h2>Your Credits: {sgpaArr[1]}</h2>
            <h2>SGPA: {
                    sgpaArr[0] === 0 ? 0 : sgpaArr[1]/sgpaArr[0]*10
                }
            </h2>
        </div>
    </div>
  )
}

export default Field
