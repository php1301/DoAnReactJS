import React, {useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function FormAuth() {
    const [changeForm, setChangeForm] = useState(true)
    return (
        changeForm ? <SignIn setChangeForm={setChangeForm}/> : <SignUp setChangeForm={setChangeForm}/>
    )
}
