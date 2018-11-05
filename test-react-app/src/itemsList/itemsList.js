import React, { Component } from 'react';
import Account from '../account';

class ItemsList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data: [],
        isOpen: false,
        activeItemId: null,
        selectedItemInfo: {},
        responseSuccess: false
      };
  }

  componentDidMount() {
      this.getData();
      console.log('11');
  }

   getData = () => {

       fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
           .then(res => res.json())
           .then(json => {
               this.setState({ data: json, responseSuccess: true });
           }).catch(err => {
           this.setState({ responseSuccess: false });
       })
  }

  showItemInfo = (id) => {

      let data = this.state.data;
      let selectedData = data.find(item => item.id === id);

      this.setState({
          activeItemId: id,
          selectedItemInfo: selectedData
      })
  }

  showList = () => {
      this.setState({
          activeItemId: null,
          selectedItemInfo: {}
      })
  }

  renderList = () => {

      let state = this.state;

      return state.responseSuccess ? state.data.map(item => <li key={item.id} onClick={() => this.showItemInfo(item.id)}>{item.name}</li>) :
          (<div>during some error we cannot show data!</div>)
  }


  render() {

    let listOfItemsTemplate = (<div>
      <ul>
          {this.renderList()}
      </ul>
    </div>);

    let itemDetailsTemplate = (<Account info={this.state.selectedItemInfo} returnBack={this.showList}/>);

    return this.state.activeItemId ? itemDetailsTemplate : listOfItemsTemplate;
  }
}

export default ItemsList;
