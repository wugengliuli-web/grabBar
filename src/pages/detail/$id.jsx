import React, { Component } from "react";
import { connect } from "dva";
import { List, Typography } from 'antd';

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
        return Object.entries(list[this.id])
    }

    render() {

        return (
            <div>
                <List
                    header={<div>数据展示</div>}
                    bordered
                    dataSource={this.info}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark>[{item[0]}]</Typography.Text> {item[1]}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}


export default Detail