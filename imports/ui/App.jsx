import React, { Component } from 'react';
import TittleBar from './TittleBar';
import AddPlayer from './AddPlayer';
import PlayersList from './PlayersList';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
        this.handleAddPoint = this.handleAddPoint.bind(this);
        this.handleRemovePoint = this.handleRemovePoint.bind(this);
    }

    handleAddPlayer(name, score) {
        this.props.store.insert({ name, score });
    }

    handleAddPoint(_id, score) {
        this.props.store.update(_id, { $inc: { score: 1 } });
    }

    handleRemovePoint(_id, score) {
        this.props.store.update(_id, { $inc: { score: -1 } });
    }

    handleDeletePlayer(_id) {
        this.props.store.remove({ _id });
    }

    render() {
        const { handleAddPlayer, handleAddPoint, handleRemovePoint, handleDeletePlayer } = this;

        const players = this.props.store.find({}, { sort: { score: -1 } }).fetch();

        return (
            <div>
                <TittleBar tittle={"Score Keep"} />
                <div className="wrapper">
                    <AddPlayer handleAddPlayer={handleAddPlayer} empty={players.length} />
                    <PlayersList
                        onAddPoint={handleAddPoint}
                        onRemovePoint={handleRemovePoint}
                        onDeletePlayer={handleDeletePlayer} players={players}
                        />
                </div>
            </div>
        );
    }
}
