import React, { Component } from "react";
import { connect } from "dva";
import ReactEcharts from 'echarts-for-react';
@connect(({ dataModel }) => ({
    dataModel,
}))
class Version extends Component {


    get list() {
        return this.props.dataModel.list
    }

    get option() {

        let values = {}

        for(let v of this.list) {
            const { version } = v
            if(version in values) values[version]++
            else values[version] = 1
        }

        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: Object.keys(values)
            },
            series: [
                {
                    name: 'HTTP版本号',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: Object.entries(values).map(item => ({
                        value: item[1],
                        name: item[0]
                    }))
                }
            ]
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


export default Version