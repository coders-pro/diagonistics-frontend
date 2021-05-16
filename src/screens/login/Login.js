import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'antd/lib/button/style'
import { Form, Input, Button } from 'antd'
import { LoginStyle } from './LoginStyle'
import { Link } from 'react-router-dom'
import { login } from '../../actions/userActions'

const Login = ({ location, history }) => {
    const [email_id, setEmail_id] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/login'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email_id, password))
    }
    return (
        <>
            {error && <h6>{error}</h6>}
            {loading && <h6>Processing...</h6>}
            <h1>LOGIN</h1>
            <LoginStyle>

                <Form className="login-form">
                    <Form.Item>
                        <Input value={email_id} onChange={(e) => setEmail_id(e.target.value)} type='email' placeholder='Email' />
                    </Form.Item>
                    <Form.Item>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={submitHandler}>
                            Log in
                        </Button>
                        Or <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Create new account!</Link>
                    </Form.Item>
                </Form>

            </LoginStyle>
        </>
    )
}

export default Login
