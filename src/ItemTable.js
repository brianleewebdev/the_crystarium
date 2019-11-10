import React from 'react';
import axios from 'axios';

import Search from './Search';
import Items from './Items';

export default class ItemTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchingText: '',
            mountsData: [],
            selectedCategory: 'mounts',
            tableLoaded: false
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange = (searchingText) => {
        this.setState({searchingText})
    }

    updateCategory = (category) => {
        this.setState({selectedCategory: category})
    }

    componentDidMount() {
        axios.get(`https://ffxivcollect.com/api/mounts?language=en`)
        .then(response => {
            this.setState({
                mountsData: response.data.results,
                tableLoaded: true
            })
        })
        .catch(error => console.log(error));
    }

    render() {
        if(this.state.tableLoaded) {
            return(
                <div className="itemTable">
                    <Search 
                        updateSearchText={this.handleSearchChange}
                        currentCategory={this.state.selectedCategory}
                        updateCategory={this.updateCategory}
                    />
                    <Items 
                        storedSearch={this.state.searchingText}
                        currentCategory={this.state.selectedCategory}
                        updateCategory={this.updateCategory}
                    />
                </div>
            )
        } else {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="loading-container">
                                <h2 className="loading-message">Loading Crystarium Database...</h2>
                                <div className="spinner-border text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}