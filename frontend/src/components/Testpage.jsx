import React, { useState, useEffect } from 'react'

// import { testquestion } from './questions'

const Testpage = () => {
    const testquestion = [
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
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [quizDuration, setQuizDuration] = useState(60); // 5 minutes in seconds
    const [timeRemaining, setTimeRemaining] = useState(quizDuration);
    const [marksReceived, setMarksReceived] = useState(0);
    const [isTestEnded, setIsTestEnded] = useState(false);
  
    const startQuiz = () => {
        setIsQuizStarted(true);
        toggleFullscreen();
    };
  

    const exitQuiz = () => {
        setIsQuizStarted(false);
        toggleFullscreen(); // Exit fullscreen mode when quiz ends
    };

    const handleFullscreenChange = () => {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
          if (isQuizStarted) {
            calculateMarks();
            setIsTestEnded(true);
          }
        }
    };
    
    
    const handleOptionSelect = (option) => {
        const updatedOptions = [...selectedOption];
        updatedOptions[currentQuestionIndex] = option;
        setSelectedOption(updatedOptions);
    };
  
    const calculateMarks = () => {
        let marks = 0;
        testquestion.forEach((question, index) => {
          if (question.correctAnswer === selectedOption[index]) {
            marks++;
          }
        });
        setMarksReceived(marks);
    };

    
    
    const nextQuestion = () => {
        console.log(selectedOption);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    };



    const formatTimeInMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    

    useEffect(() => {
      if (isQuizStarted && timeRemaining > 0) {
        const timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 1000);
  
        return () => clearInterval(timer);
        }
        else if (isQuizStarted && timeRemaining === 0) {
            calculateMarks();
            setIsTestEnded(true);
          setIsQuizStarted(false);
          exitQuiz();
          }
      
    }, [isQuizStarted, timeRemaining]);
  
    useEffect(() => {
      if (isQuizStarted && currentQuestionIndex >= testquestion.length) {
        // Quiz has ended, you can display results or a summary here
        calculateMarks();
        setIsTestEnded(true);
          setIsQuizStarted(false);
          exitQuiz();
      }
    }, [isQuizStarted, currentQuestionIndex, testquestion]);


    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    
        return () => {
          document.removeEventListener('fullscreenchange', handleFullscreenChange);
          document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
          document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
        };
      }, []);

    
    
    function toggleFullscreen() {
        if (
          !document.fullscreenElement &&
          /* alternative standard method */ !document.mozFullScreenElement &&
          !document.webkitFullscreenElement
        ) {
          // current working methods
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      }
  
    return (
        <div className="p-5 border-slate-700 h-full flex flex-col gap-3 rounded-xl border bg-slate-900 ">
            <div className='flex'>
                <h1 className='text-xl px-5'>Practice Test</h1>
            </div>
            

        {isQuizStarted ? (
          <div className='container w-96 mx-auto'>
            <p className='m-5 border border-gray-500 mx-auto'>Time remaining: {formatTimeInMinutes(timeRemaining)} seconds</p>
                    
            {currentQuestionIndex < testquestion.length ? (
            <div>
              <p>{testquestion[currentQuestionIndex].question}</p>
              <ul>
                {testquestion[currentQuestionIndex].answers.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name="options"
                        value={option}
                        checked={selectedOption[currentQuestionIndex] === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button className='btn bg-sky-500' onClick={nextQuestion}>Next Question</button>
            </div>
          ) : (
            <div>
              <p>Test Ended</p>
              <p>Marks received: {marksReceived}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          {isTestEnded ? (
            <div>
              <p>Test Ended</p>
              <p className='w-64 bg-sky-800'>Marks received: {marksReceived}</p>
            </div>
          ) : (
            <div className='w-3/5 m-auto p-10 bg-[#3769ff4a] rounded-xl'>
              <h1 className='text-lg'>Test Will Started Soon.</h1>
              <ol className='list-disc rounded-lg my-10 p-5 px-10 border'>
                <h1 className='text-lg'>Instructions</h1>
                <li className=''>Attend all questions</li>
                <li className=''>Each question have 2 marks each</li>
                <li className=''>Read question properly before typing answer</li>
                <li className=''>Don't change the screen</li>
                <li className=''>Avoid answering more questions</li>
              </ol>
              <button className='btn capitalize font-medium bg-blue-600 text-white border-none ' onClick={startQuiz}>Start Quiz</button>
            </div>
          )}
        </div>
      )}
    </div>
    );
  
}

export default Testpage