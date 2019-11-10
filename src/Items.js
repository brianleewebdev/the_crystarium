import React from 'react';

import Minions from './Minions';
import Achievements from './Achievements';
import Armoires from './Armoires';
import Bardings from './Bardings';
import Emotes from './Emotes';
import Hairstyles from './Hairstyles';
import Orchestrions from './Orchestrions';
import Titles from './Titles';
import Mounts from './Mounts';

export default class Items extends React.Component {
    
    showCurrentCategory() {
        switch(this.props.currentCategory) {
            case 'mounts': 
                return <Mounts
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'minions':
                return <Minions 
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'achievements':
                return <Achievements 
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'armoires':
                return <Armoires 
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'bardings':
                return <Bardings 
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'emotes':
                return <Emotes 
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'hairstyles':
                return <Hairstyles
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'orchestrions':
                return <Orchestrions 
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            case 'titles':
                return <Titles 
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
            default: 
                return <Mounts
                storedSearch={this.props.storedSearch}
                currentCategory={this.props.currentCategory}
                updateCategory={this.props.updateCategory}
                load={this.loadingEffects} />;
        }
    }

    loadingEffects(category) {
        return(
            <div className="child-loading-message d-flex justify-content-center">
                <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <h3>Loading {category}...</h3>
            </div>
        )
    }

    render() {
        return(
            <React.Fragment>
                <div className="container">
                    {this.showCurrentCategory(this.props.currentCategory)}
                </div>
            </React.Fragment>
        )
    }
}