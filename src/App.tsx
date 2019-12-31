import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-input/search-input.component";


export interface Monster {
    key: string,
    name: string,
    email: string
}

interface MonsterState {
    monsters: Monster[],
    searchInput: string
}

class App extends Component<any, MonsterState> {
    constructor(props: any) {
        super(props);

        this.state = {
            monsters: [],
            searchInput: '',
        };
    }

    componentDidMount(): void {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                const monsterState = {monsters: []};
                monsterState.monsters = json.map((obj: any) => {
                    return {key: obj.id, name: obj.name, email: obj.email};
                });
                this.setState(monsterState);
            });
    }

    render() {
        const {monsters, searchInput} = this.state;
        const filteredMonsters = monsters.filter(value => value.name.toLowerCase().includes(searchInput.toLowerCase())
            || value.email.toLowerCase().includes(searchInput.toLowerCase()));

        return (
            <div className="App">
                <h1>Some Monsters</h1>
                <SearchBox placeholder={'search for monsters'} onChange={(event => this.setState({searchInput: event.currentTarget.value}))}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    };
}

export default App;
