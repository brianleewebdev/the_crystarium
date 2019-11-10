import React from 'react';
import axios from 'axios';

export default class Mounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get(`https://ffxivcollect.com/api/mounts?language=en`)
        .then(res => {
            this.setState({
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
        if(this.props.currentCategory === "mounts") {
            if(this.state.isLoaded !== false) {
                return(
                    <React.Fragment>
                        {results.map((item) => 
                            <div className='row' key={item.id}>
                                <div className="col-md-4">
                                    <img src={item.image} alt={item.description} />
                                </div>
                                <div className="col-md-8">
                                    <div className='titlegroup'>
                                        <img src={item.icon} alt={item.name} />
                                        <h5>{item.name}</h5>
                                    </div>
                                    <div>Hover Text: {item.description}</div>
                                    <div>Item Description: {item.enhanced_description}</div>
                                    <div>Flying Mount: {item.flying.toString()}</div>
                                    <div>Patch Update: {item.patch}</div>
                                    {item.sources.map((source, i) => 
                                        <div key={i}>
                                            <div>Source Type: {source.type}</div>
                                            <div>Source: {source.text}</div>
                                        </div>
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