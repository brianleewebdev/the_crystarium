import React from 'react';
import styles from './search.module.scss';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.changeEndpoint = this.changeEndpoint.bind(this);
    }

    changeEndpoint = (e) => {
        this.props.updateCategory(e.target.innerText.toLowerCase());
        let subMenu = document.getElementsByClassName('nav-link');
        
        let i;
        for(i = 0; i < subMenu.length; i++) {
            subMenu[i].classList.remove('active')
        }
        e.target.classList.add('active')
    }

    render() {
        return(
            <React.Fragment>
                <div className={styles.itemCategory}>
                    <h3 className={styles.title}>{this.props.currentCategory}</h3>
                </div>
                <div className={styles.searchBarContainer}>
                    <nav className={styles.navBar + " navbar navbar-expand-lg navbar-dark bg-dark"}>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse"
                            data-target=".sub-nav-menu"
                            aria-controls="sub-nav-menu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse sub-nav-menu"> 
                            <div className={styles.navBarNav + ' navbar-nav'}>
                                <div className={styles.navLink + " nav-link nav-item active"} onClick={this.changeEndpoint}>mounts</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>minions</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>achievements</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>armoires</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>bardings</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>emotes</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>hairstyles</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>orchestrions</div>
                                <div className={styles.navLink + " nav-link nav-item"} onClick={this.changeEndpoint}>titles</div>
                            </div>
                        </div>
                    </nav>
                    <div className={styles.searchContainer}>
                        <input 
                            className={styles.searchBar} 
                            type="text" 
                            placeholder={'Search ' + this.props.currentCategory.charAt(0).toUpperCase() + this.props.currentCategory.slice(1) + '...'}
                            onChange={(e) => this.props.updateSearchText(e.target.value)}
                            spellCheck="false"
                        />
                        <div className={styles.searchBtn}></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}