import React from 'react';
import axios from 'axios';

export default class Armoires extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        axios.get(`https://ffxivcollect.com/api/armoires?language=en`)
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

        if(this.props.currentCategory === "armoires") {
            if(this.state.isLoaded !== false) {
                return(
                    <React.Fragment>
                        {results.map((item) => 
                            <div className="row" key={item.id}>
                                <div className="col-md-1">
                                    <div>
                                        
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div>Armoire Item: {item.name}</div>
                                    <div>Armoire Type: {item.category.name}</div>
                                    {item.sources.map((source, index) =>
                                        <div key={index}>Obtained through {source.text}</div>
                                    )}
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