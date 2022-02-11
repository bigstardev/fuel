import React from 'react'
import { useState, useEffect } from 'react';
import '../../assets/css/base.css';
import './questionlist.css'
import Question from '../question/Question';
import Button from '../elements/button/Button';
import useQuestionList from '../hooks/useQuestionList/useQuestionList';
export default function QuestionList({ changeTitle }) {
    const [isUpdated, setIsUpdated] = useState(false)

    const contentType = {
        AddQuestion: "+ ADD QUESTION",
        SaveShare: "SAVE & SHARE"

    }

    //custom hook for control question list
    const { questionList, addQuestion, removeQuestion, updateQuestionList } = useQuestionList()

    useEffect(() => {

    }, [isUpdated, updateQuestionList])

    const AddQuestion = () => {


        setIsUpdated(!isUpdated)
        addQuestion()

    }
    const SaveShare = () => {
        console.log("===============final result============", questionList)
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center ">

                {questionList.map((question, index) =>
                    <Question
                        key={index}
                        index={index}
                        question={question}
                        totalNumber={questionList.length}
                        changeTitle={changeTitle}
                        questionList={questionList}
                        removeQuestion={removeQuestion}
                        updateState={setIsUpdated}
                        isUpdated={isUpdated}
                        updateQuestion={updateQuestionList}
                    />)}
            </div>



            <div style={{ maxWidth: "712px", width: "70%", marginTop: "16px" }}>
                <Button
                    content={contentType.AddQuestion}
                    type="add"
                    onClick={AddQuestion}
                />
                <Button
                    content={contentType.SaveShare}
                    type="save"
                    onClick={SaveShare}
                />

            </div>
        </div>

    )
}
