import React from 'react';
import axios from 'axios';

export default class Orchestrions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        axios.get(`https://ffxivcollect.com/api/orchestrions?language=en`)
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
        if(this.props.currentCategory === "orchestrions") {
            if(this.state.isLoaded !== false) {
                return(
                    <React.Fragment>
                        {results.map((item) => 
                            <div className="row" key={item.id}>
                                <div className="col-md-2">
                                    <div>
                                        <img src={item.icon} alt={item.name} />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div>Orchestrion: {item.name}</div>
                                    <div>Description: {item.description}</div>
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