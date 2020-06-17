import React, { Component } from "react";
import { connect } from "dva";
import ReactEcharts from 'echarts-for-react';
@connect(({ dataModel }) => ({
    dataModel,
}))
class Host extends Component {


    get list() {
        return this.props.dataModel.list
    }

    get option() {

        let values = {}
        let values2 = {}
        for(let v of this.list) {
            const { Host, version } = v
            if(Host in values) values[Host]++
            else values[Host] = 1

            if(version in values2) values2[version]++
            else values2[version] = 1
        }

        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: Object.keys(values2)
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: Object.keys(values)
            },
            series: Object.entries(values2).map(item => ({
                name: item[0],
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: Object.values(values)
            }))
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


export default Host