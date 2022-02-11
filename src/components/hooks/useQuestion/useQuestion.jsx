import { useState } from 'react';


export default function useQuestion(changeTitle, question, updateState, isUpdated) {

    const [values, setValues] = useState(question)

    const handleChange = (event) => {

        setValues(values => ({ ...values, [event.target.name]: event.target.value }))
        changeTitle(values.question)
        updateState(!isUpdated)
    }

    return { values, handleChange }

}
