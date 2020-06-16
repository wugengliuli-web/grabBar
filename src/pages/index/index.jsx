import React, { Component } from "react";
import { connect } from "dva";
import styles from "./index.less";
import { Table } from "antd";
import Link from 'umi/link'
@connect(({ dataModel }) => ({
  dataModel,
}))
class Login extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "dataModel/getState",
    });
  }

  get loading() {
    return this.props.dataModel.state === "loading";
  }

  get dataSource() {
      const { list } = this.props.dataModel
      return list.map((item, index) => ({
        key: index,
        type: item.type,
				version: item.version,
				Host: item.Host,
				look: index
      }))
  }

  columns = [
    {
      title: "type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "version",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "Host",
      dataIndex: "Host",
      key: "Host",
		},
		{
			title: "look",
			dataIndex: "look",
			key: "look",
			render: id => <Link to={`/detail/${id}`}>查看</Link>
		}
  ];

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.left}></div>
        <div className={styles.right}>
            <Table className={styles.table} loading={this.loading} dataSource={this.dataSource} columns={this.columns} />
        </div>
      </div>
    );
  }
}

export default Login;
