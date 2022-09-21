import { useState } from 'react';
import ReactPlayer from 'react-player';
import { questions } from '../utils/question'

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  
  const handleAnswerButton = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;

    if (isCorrect) {
      setScore(score + 1); 
    }
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return ( 
    <div className='lg:w-full md:w-5/6 mb-10'>
      <div className='bg-[#1a2e3f] text-[#c9daf8] shadow-md rounded-lg py-10 px-5'>
        {
          showScore ? (
            <div className='font-bold text-3xl py-5 text-center'>
              {
                score > 8 ? (
                  <div>
                    ¡CONGRATULATIONS! <br/>¡¡Has llegado hasta el final!!
                  </div>
                ) : (
                  <div>
                    ¡GAME OVER! <br/>¡¡Has llegado hasta el final!!
                  </div>
                )
              }
              <div className='py-5'>
                Tu Puntacion: {score} de {questions.length}
              </div>
              <div>
              <button onClick={() => window.location.reload(false)} className='rounded-lg w-full p-3 mb-5 mx-3 text-[c9daf8] bg-[#1a2e3f] border-4 border-[#83b2fd] hover:bg-[#83b2fd] hover:text-[#1a2e3f] transition-all'>Volver a Intentarlo</button>
              </div>
            </div>
          ) : (
            <>
              <div className='font-bold text-3xl pb-2'>
                Pregunta {currentQuestion + 1 } de {questions.length}
              </div>
              <div >
                <div className='items-center mt-5 mb-10 ml-60'>
                  <button onClick={() => setIsVideo(false)} className='rounded-lg w-40 p-1 text-[c9daf8] bg-[#1a2e3f] border-4 border-[#83b2fd] hover:bg-[#83b2fd] hover:text-[#1a2e3f] transition-all'>Video</button>
                  <button onClick={() => setIsVideo(true)} className='rounded-lg w-40 p-1 mx-3 text-[c9daf8] bg-[#1a2e3f] border-4 border-[#83b2fd] hover:bg-[#83b2fd] hover:text-[#1a2e3f] transition-all'>Imagen</button>
                </div>
              </div>
              <div className='flex'>
                <div className='lg:w-2/3 px-20'>
                  {
                    !isVideo ? (
                      <div>
                        <ReactPlayer 
                          url={questions[currentQuestion].questionvideo}
                          controls
                        />
                      </div>
                    ) : (
                      <div>
                        {
                          currentQuestion >= 6 && currentQuestion <= 7 ? (
                            <div>
                              <img src='src/assets/question_7_8.png' />
                              <img src={questions[currentQuestion].questionImage} />
                            </div>
                          ) : (currentQuestion >= 8 && currentQuestion <=12) ? ( 
                            <div>
                              <img src='src/assets/question_9_13.png' />
                              <img src={questions[currentQuestion].questionImage} />
                            </div>
                          ) : (
                            <div>
                              <img src={questions[currentQuestion].questionImage} />
                            </div>
                          )
                        }
                      </div> 
                    )
                  }
                </div>
                <div className='lg:w-1/3 px-5'>
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button onClick={() => handleAnswerButton(answerOption.isCorrect)} className='rounded-lg w-full p-3 mb-5 text-[c9daf8] bg-[#1a2e3f] border-4 border-[#83b2fd] hover:bg-[#83b2fd] hover:text-[#1a2e3f] transition-all'>{answerOption.answerText}</button>
                  ))}
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Questions