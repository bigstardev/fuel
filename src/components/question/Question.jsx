import { useEffect } from 'react';
import useQuestion from '../hooks/useQuestion/useQuestion';
import remove from '../../assets/img/delete.png';
import up from '../../assets/img/up.png';
import down from '../../assets/img/down.png';
import Input from '../elements/input/Input'
import Select from '../elements/select/Select'

import './question.css'

export default function Question({ index, totalNumber, changeTitle, question, removeQuestion, updateState, isUpdated, updateQuestion }) {

    const { values, handleChange } = useQuestion(changeTitle, question, updateState, isUpdated);

    useEffect(() => {
        updateQuestion(index, values);
    }, [isUpdated])

    return (
        <div className="d-flex flex-column align-items-start question-body">
            <div className="w-100">
                <label htmlFor="question">Question</label>
                <Input
                    id="question"
                    type="text"
                    value={values.question}
                    placeholder="What do you want to ask?"
                    onChange={handleChange}
                    name="question"

                />
            </div>
            <div className="borderLine mt-16" ></div>

            <div className="w-100 mt-16">
                <label >Answer</label>
                <Select />
                <Input
                    id="answer"
                    type="text"
                    value={values.answer}
                    placeholder="Short answer text"
                    background="rgba(0, 0, 0, 0.04)"
                    onChange={handleChange}
                    name="answer"

                />
            </div>
            <div className="borderLine mt-16" ></div>
            <div className="d-flex flex-row align-items-center justify-content-space w-100 mt-16">
                <div style={{ fontSize: "14px" }}>{index + 1} Of {totalNumber}</div>
                <div className="d-flex flex-row align-items-center justify-content-center">
                    <div><img src={up} alt="" set="" className="mx-1" style={{ cursor: 'pointer' }} /></div>
                    <div><img src={down} alt="" set="" className="mx-1" style={{ cursor: 'pointer' }} /></div>
                    <div><img src={remove} alt="" set="" className="mx-1" style={{ cursor: 'pointer' }}
                        onClick={() => {
                            removeQuestion(index)
                            updateState(!isUpdated)
                        }} /></div>
                </div>
            </div>
        </div>
    )
}
