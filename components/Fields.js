'use client'
import React, { useEffect, useState } from 'react'
import { calculateMarks, calculateGrade, calculatePointers, calculateSGPA,inputArray, courseChecker } from './Calculations.js'
import Image from 'next/image.js';
import Info from './Info.js';
import { Colours,getColour } from './Calculations.js';
import Navbar from './Navbar.js';


const Field = ({course}) => {

    const [arr, setArr] = useState(courseChecker(course));
    const [sgpaArr, setSgpaArr] = useState([0, 0]);
    const [colourChecker, setColourChecker] = useState(Colours[0]);

    const addField = () => {
        setArr([...arr, {
            id: `${arr.length + 1}`,
            subject: {
                SubjectLabel: "Subject Name",
                SubjectType: "text",
                SubjectValue: "",
                credits: 0,
                CreditLabel: "Credits",
                CreditType: "number"
            },
            final:{
                label: "Marks marks ( /100)",
                type: "number",
                value: 0
            },
            internal:{
                label: "Internal marks ( /25)",
                type: "number",
                value: 0
            },
            midterm:{
                label: "Midterm marks ( /50)",
                type: "number",
                value: 0
            },
            total:{
                marks: calculateMarks(0, 0, 0),
                grade: calculateGrade(calculateMarks(0, 0, 0)),
                credits: 0,
                colour: Colours[4]
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
            item.total.colour = getColour(item.total.grade);
            item.total.credits = item.subject.credits * item.total.pointers;
            return item;
        }
        )
        setArr(updatedArr);
        setSgpaArr(calculateSGPA(arr));
    }

    useEffect(() => {
        if((sgpaArr[1]/sgpaArr[0]*10) >= 9){
            setColourChecker(Colours[0]);
        }
        else if((sgpaArr[1]/sgpaArr[0]*10) >= 8){
            setColourChecker(Colours[1]);
        }
        else if((sgpaArr[1]/sgpaArr[0]*10) >= 7){
            setColourChecker(Colours[2]);
        }
        else if((sgpaArr[1]/sgpaArr[0]*10) >= 6){
            setColourChecker(Colours[3]);
        }
        else{
            setColourChecker(Colours[4]);
        }
        console.log(arr);
    }, [colourChecker, sgpaArr])

  return (
    <div id='pdf' className='flex flex-col'>
        <Navbar />
        {arr.map(item => (
            <div key={item.id} className='flex text-[15px] mt-3'>
                <div className='mt-5 sm:space-x-1 flex flex-col sm:flex-row flex-1 justify-center items-center'>
                    <div className='w-[230px] my-3'>
                        <label>{item.subject.SubjectLabel}</label>
                        <input
                            type={item.subject.SubjectType}
                            value={item.subject.SubjectValue}
                            onChange={(e) => handleChange(e, item.id)}
                            name='SubjectValue'
                            placeholder='Data Structures'
                        />
                    </div>
                    <div className='w-[230px] my-3'>
                        <label>Subject {item.subject.CreditLabel}</label>
                        <input
                            type={item.subject.CreditType}
                            value={item.subject.credits}
                            onChange={(e) => handleChange(e, item.id)}
                            name='credits'
                        />
                    </div>
                    <div className='w-[230px] my-3'>
                        <label className='flex items-center space-x-0'>
                            {item.final.label}
                            <Info 
                                recommendation={'This marks are round off to 50 marks'} 
                                direction={"top"} 
                                width={"150"}
                                padding={1}
                            />
                        </label>
                        <input
                            type={item.final.type}
                            value={item.final.value}
                            onChange={(e) => handleChange(e, item.id)}
                            name='final'
                        />
                    </div>
                    <div className='w-[230px] my-3'>
                        <label>{item.internal.label}</label>
                        <input
                            type={item.internal.type}
                            value={item.internal.value}
                            onChange={(e) => handleChange(e, item.id)}
                            name='internal'
                        />
                    </div>
                    <div className='w-[230px] my-3'>
                        <label className='flex items-center'>
                            {item.midterm.label}
                            <Info 
                                recommendation={'This marks are round off to 25 marks'} 
                                direction={"top"} 
                                width='150'
                                padding={1}
                            />
                        </label>
                        <input
                            type={item.midterm.type}
                            value={item.midterm.value}
                            onChange={(e) => handleChange(e, item.id)}
                            name='midterm'
                        />
                    </div>

                    <div style={{borderColor:item.total.colour,borderWidth:'3px'}} className={`w-[100px] font-extrabold my-3 text-center border-[3px]`}>
                        <label>Total</label>
                        <p>{item.total.marks}</p>
                    </div>
                    
                    <div style={{borderColor:item.total.colour,borderWidth:'3px'}} className='w-[100px] font-extrabold my-3 text-center border-[3px] border-[#4b74dc]'>
                        <label>Grade</label>
                        <p>{item.total.grade}</p>
                    </div>
                </div>
            </div>
        ))}

        <div className='mt-6 text-[16px] flex justify-center items-center' >
            <button className='ml-0 mr-3 border-[#4dbe31] border-2 p-1 px-3 hover:rounded-lg' onClick={addField}>Add Subject</button>
            <button className='border-[#e94c4c] border-2 p-1 px-3 hover:rounded-lg' onClick={deleteField}>Remove Subject</button>
            <Info 
                recommendation={'While entering lab marks you can add the total marks to the internal marks'} 
                direction={"top"} 
                width={"150"}
                padding={"10px"}
            />
        </div>
        <div className=' font-extrabold text-lg my-3 flex flex-col justify-center items-center'>
            <h2>Total Credits: {
                sgpaArr[0] === 0 ? 0 : sgpaArr[0]
            }</h2>
            <h2>Your Credits: {sgpaArr[1]}</h2>
            <h2 style={{borderColor:colourChecker,borderWidth:'3px'}} className='mt-3 px-3'>SGPA: {
                    sgpaArr[0] === 0 ? 0 : sgpaArr[1]/sgpaArr[0]*10
                }
            </h2>
        </div>
        <link type="image/png" sizes="120x120" rel="icon" href=".../icons8-github-120.png"></link>
    </div>
  )
}

export default Field
