import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'


const Modules = () => {
  return (
    <div>
      <h1 className="text-lg m-5">Semester 1</h1>
      <div className="p-5 border-slate-700 flex flex-col gap-3 rounded-md border bg-slate-900 ">
        {
            Data.map((item)=>{
                return <ModuleComp key={item.id} props={item} />
            })
        }
      </div>
    </div>
  );
};

export default Modules;


const ModuleComp =({props})=>{
    const {id,name, subModule, duration} = props
    const [Accordin, setAcordin] = useState(false)

    const navigate = useNavigate()
    const SubjectId = useParams()

    const handleAccordin = ()=>{
        if(Accordin === true){
            setAcordin(false)
        }
        if(Accordin === false){
            setAcordin(true)
        }
    }
    return(
        <>
        <div onClick={handleAccordin} className="bg-slate-800 flex justify-between p-5 rounded-lg">
            <div className="flex items-center">
                <ChevronDoubleDownIcon className="w-5 opacity-20" />
             <h1 className="px-5 text-white font-medium">{name}</h1>
            </div>
             <button 
                onClick={()=>navigate(`/admin/classroom/${SubjectId.id}/modules/${id}/test`)}
                className="btn-sm bg-blue-800 rounded-md">take a test
            </button>
        </div>
        {
            Accordin ? (
                subModule.map((item)=>{
                    return <SubModule props={item} />
                })
            ) : null
        } 
        </>
    )
}


const SubModule =({props})=>{
    const {name, duration}= props
    return (
        <>
        <div className="p-5 py-3 flex justify-between items-center rounded-md text-slate-400 bg-[#161b2d]">
            <h1>{name}</h1>
            <h1 className="text-[0.8rem]">{duration}</h1>
        </div>
        </>
    )
}



const Data = [
    {
        id: "01",
        name : "Fundamentals of computer",
        duration : "12-july-2023",
        subModule : [
            {
                name:'operarting System',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'Number System',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'binary System',
                duration:"1 july to 8 julay 2023"
            }
        ],
        testquestion : [
            {
                "question": "What is the capital city of Switzerland?",
                "answers": ["Geneva", "Zurich", "Bern", "Lausanne"],
                "correctAnswer": "Bern"
            },
            {
                "question": "What is the world's largest river by volume?",
                "answers": ["The Nile", "The Amazon", "The Congo", "The Yangtze"],
                "correctAnswer": "The Amazon"
            },
            {
                "question": "What is the most populous city in the world?",
                "answers": ["Tokyo", "Beijing", "Mumbai", "New York"],
                "correctAnswer": "Tokyo"
            },
            {
                "question": "How large an area does Asia cover in km³?",
                "answers": [
                    "44.58 million",
                    "52.64 million",
                    "41.59 million",
                    "48.41 million"
                ],
                "correctAnswer": "44.58 million"
            },
            {
                "question": "Which of these is not one of the 7 wonders of the ancient world?",
                "answers": [
                    "The Great Pyramid of Giza",
                    "The Statue of Zeus at Olympia",
                    "The Parthenon",
                    "The Colossus of Rhodes"
                ],
                "correctAnswer": "The Parthenon"
            },
        ]
    },
    {
        id: "09",
        name : "C proramming",
        duration : "12-july-2023",
        subModule : [
            {
                name:'conditional statements',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'iteration in c',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'file handeling in c',
                duration:"1 july to 8 julay 2023"
            }
        ]
    },
    {
        id: "11",
        name : "Discreate mathematics",
        duration : "12-july-2023",
        subModule : [
            {
                name:'Set throry',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'Probability and distribution',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'Regreation analysis',
                duration:"1 july to 8 julay 2023"
            }
        ]
    },
    {
        id: "91",
        name : "Machine learning core basiscs",
        duration : "12-july-2023",
        subModule : [
            {
                name:'python programming',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'maths for Machine learning',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'classification and mappping',
                duration:"1 july to 8 julay 2023"
            }
        ]
    },
    {
        id: "16",
        name : "Linux fundamentals and basiscs",
        duration : "12-july-2023",
        subModule : [
            {
                name:'operarting System',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'operarting System',
                duration:"1 july to 8 julay 2023"
            },
            {
                name:'operarting System',
                duration:"1 july to 8 julay 2023"
            }
        ]
    },
    
]