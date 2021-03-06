import React, { useState, useEffect } from 'react'
import { Dropdown } from './Dropdown';
import { Input } from './Input';


export const Login = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [fieldType, setFieldType] = useState('password');
    const [comment, setComment] = useState('');
    const [longComment, setLongComment] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Facebook');
    const elements = [
        { value: 'Facebook', name: 'Facebook' },
        { value: 'Instagram', name: 'Instagram' },
        { value: 'SnapChat', name: 'SnapChat' },

    ]



    useEffect(() => {
        console.log("username", username)
        console.log('password', password)
    }, [username, password])


    function setToogle() {
        setFieldType(
            fieldType === 'password' ? 'text' : 'password'
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}\nComment: ${comment}\nSelected App: ${selectedOption}`)
    }


    return (
        <div id='login' >
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='Enter your username'
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}

                />
                <Input
                    type={fieldType}
                    name='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    setToggle={setToogle}
                    mouseDown={() => { setFieldType('text') }}
                    mouseUp={() => { setFieldType('password') }}
                />
                <Input
                    type='text'
                    name='comment'
                    placeholder='Enter Comment'
                    value={comment}
                    onChange={(e) => { setComment(e.target.value) }}
                    renderTextArea={longComment}
                    changeInput={() => { setLongComment(!longComment) }}

                />
                <Dropdown
                    elements={elements} onChange={(e) => { setSelectedOption(e.target.value) }}
                />

                <button className='action-button'>Sign in</button>
            </form>
        </div>
    )
}