import React from 'react';
import axios from 'axios';

export default class Achievements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        axios.get(`https://ffxivcollect.com/api/achievements?language=en`)
        .then(res => {
            this.setState({
                isLoaded: true,
                data: res.data.results
            })
        })
        .catch(error => console.log(error.res))
    }

    render() {
        const searchText = this.props.storedSearch;

        let results = this.state.data.filter(item => {
            return item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        })

        if(this.props.currentCategory === "achievements") {
            if(this.state.isLoaded !== false) {
                return(
                    <React.Fragment>
                        <div className="row">
                            {results.map((item) => 
                                <div className="col-md-3">
                                    <div className="row" key={item.id}>
                                        <div className="col-md-1">
                                            <div>
                                                <img src={item.icon} alt={item.description} />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <div>Achievement: {item.name}</div>
                                            <div>Points earned: {item.points}</div>
                                            <div>Category: {item.category.name}</div>
                                            <div>Achievement Type: {item.type.name}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
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
            return <div />
        }
    }
}