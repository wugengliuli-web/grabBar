import React, { Component } from "react";
import { connect } from "dva";
import styles from "./index.less";


@connect(({ dataModel }) => ({
    dataModel,
}))
class Detail extends Component {


    get id() {
        const { match: { params: { id } } } = this.props
        return Number(id)
    }

    get info() {
        
        const { dataModel: { list } } = this.props
        return list[this.id]
    }

    render() {
        console.log(this.info)
        return (
            <div>aaa</div>
        )
    }
}


export default Detail