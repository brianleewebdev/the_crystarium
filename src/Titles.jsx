import React from 'react';
import axios from 'axios';

export default class Titles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        axios.get(`https://ffxivcollect.com/api/titles?language=en`)
        .then(res => {
            this.setState({
                isLoaded: true,
                data: res.data.results
            })
        })
        .catch()
    }

    render() {
        const searchText = this.props.storedSearch;

        let results = this.state.data.filter(item => {
            return item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        })
        if(this.props.currentCategory === "titles") {
            if(this.state.isLoaded !== false) {
                return(
                    <React.Fragment>
                        {results.map((item) => 
                            <div className="row" key={item.id}>
                                <div className="col-md-2">
                                    <div>
                                        
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div>Title: {item.name}</div>
                                    <div>Female Title: {item.female_name}</div>
                                    <div>
                                        <div>Achievement Required: {item.achievement.name}</div>
                                        <div>Achievement Type: {item.achievement.category.name}</div>
                                        <div>Achievement Objectives: {item.achievement.description}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                )
            } else {
                return(
                    <React.Fragment>
                        {this.props.load(this.props.currentCategory)}
                    </React.Fragment>
                )
            }
            
        } else {
            return null;
        }
    }
}