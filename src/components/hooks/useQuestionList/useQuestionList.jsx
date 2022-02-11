import { useState, } from "react";

const useQuestionList = () => {
    const [questionList, setQuestionList] = useState([{ question: " ", answer: "" }]);
    const addQuestion = () => { setQuestionList([...questionList, { question: " ", answer: "" }]) }
    const updateQuestionList = (index, value) => {
        let temp = questionList;
        temp[index] = value;
        setQuestionList(temp)
    }
    const removeQuestion = (index) => {
        let templist = questionList

        templist.splice(index, 1)
        setQuestionList(templist)

    }


    return { addQuestion, removeQuestion, questionList, updateQuestionList }
}


export default useQuestionList