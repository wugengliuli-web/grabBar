import React, { Component } from "react";
import { connect } from "dva";
import ReactEcharts from 'echarts-for-react';
@connect(({ dataModel }) => ({
    dataModel,
}))
class Path extends Component {


    get list() {
        return this.props.dataModel.list
    }

    get option() {

        let values = {}

        for(let v of this.list) {
            const { path } = v
            if(path in values) values[path]++
            else values[path] = 1
        }

        return {
            xAxis: {
                type: 'category',
                data: Object.keys(values)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: Object.values(values),
                type: 'bar'
            }]
        };
        
    }


    render() {
        return (
            <div>
                <ReactEcharts  option={this.option}/>
            </div>
        )
    }
}


export default Path