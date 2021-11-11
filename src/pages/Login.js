import React from 'react'
import Header from '../components/global/Header'
import DocumentTitle from 'react-document-title'

function Login() {
    return (
        <div className="wrapper">
            <DocumentTitle title='Logga in' ></DocumentTitle>
            
            <Header title="Logga in"/>
        </div>
    )
}

export default Login
