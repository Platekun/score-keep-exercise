import React, { Component } from 'react';

export default class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderInitialMessage = this.renderInitialMessage.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        const { name, score } = this.refs;
        this.props.handleAddPlayer(name.value.trim(), score.value.trim());

        name.value = "";
        score.value = "";
    }

    renderInitialMessage() {
        return !this.props.empty ? (
            <div>
                <div className="item">
                    <p className="item__message">Here you can add new players!</p>
                </div>
            </div>
        ) : '';
    }

    render() {
        const { renderInitialMessage } = this;

        return (
            <div>
                {renderInitialMessage()}
                <div className="item">
                    <form onSubmit={this.handleSubmit} className="form">
                        <input type="text" className="form__input" defaultValue="" ref="name" placeholder="Name:" />
                        <input type="number" className="form__input" defaultValue="0" ref="score" placeholder="Score:" />
                        <input type="submit" className="form__input" name="submit" className="button" />
                    </form>
                </div>
            </div>
        );
    }
}