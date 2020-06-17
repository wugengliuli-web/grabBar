import React, { Component } from "react";
import { connect } from "dva";
import ReactEcharts from 'echarts-for-react';
@connect(({ dataModel }) => ({
    dataModel,
}))
class Type extends Component {


    get list() {
        return this.props.dataModel.list
    }

    get option() {

        let values = {}

        for(let v of this.list) {
            const { type } = v
            if(type in values) values[type]++
            else values[type] = 1
        }

        return {
            title: {
                text: '抓包分析类型',
                subtext: '类型占比图形',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: Object.keys(values)
            },
            series: [
                {
                    name: '类型占比',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: Object.entries(values).map(item => ({
                        value: item[1],
                        name: item[0]
                    })),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }


    render() {
        return (
            <div>
                <ReactEcharts  option={this.option}/>
            </div>
        )
    }
}


export default Type