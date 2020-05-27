import React, { Component } from 'react'
import { connect } from 'dva'

@connect(({ test }) => ({ test }))
class Login extends Component {
    componentDidMount() {
        console.log(this.props.test)
    }
    render() {
        return (
            <div></div>
        )
    }
}


export default Login