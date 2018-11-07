import React, { Component } from 'react';
import Account from '../account';
import { Route, Link } from 'react-router-dom';

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

        return data.find(item => item.id === id);
    }

    renderList = () => {

        let state = this.state;

        return (
            <ul>
                {state.data.map(item => <li key={item.id}><Link to={`/items-list/item/${item.id}`}>{item.name}</Link></li>)}
            </ul>);

    }

    renderErrorMessage = () => {

        return (<div>during some error we cannot show data!</div>)
    }

    render() {
        return <div>
            {this.state.responseSuccess ? this.renderList() : this.renderErrorMessage()}
            <Route path={"/items-list/item/:id"} render={(props) => {
                const detailInfo = this.showItemInfo(props.match.params.id);
                return <Account {...props} info={detailInfo}/>}}/>
        </div>
    }
}

export default ItemsList;
