import React, { Component } from 'react';

class Account extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.info);
  }

  returnToList = (e) => {

    e.preventDefault();
    this.props.returnBack();
  }

  renderTable() {

    let info = this.props.info;
    return Object.entries(info).map(([key, value]) => {
      return (
          <tr>
            <td>{key}</td>
              <td>{value}</td>
          </tr>
      )
    })
  }

  render() {
    return <div>
      <a href="#" onClick={this.returnToList}>back</a>
      <table>
          {this.renderTable()}
      </table>
    </div>;
  }
}

export default Account;
