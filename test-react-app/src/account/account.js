import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Account extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.info);
  }

  renderTable() {

    let info = this.props.info;
    return <table>{
        Object.entries(info).map(([key, value]) => {
      return (

          <tr>
            <td>{key}</td>
              <td>{value}</td>
          </tr>
      )
    })}
    </table>
  }

  render() {
    return <div>
        <Link to={"/items-list"}>back</Link>
          {this.renderTable()}
    </div>;
  }
}

export default Account;
