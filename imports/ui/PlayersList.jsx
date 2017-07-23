import React, { Component } from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default props =>
    <ul>
        <FlipMove easing="ease-out">
            {
                props.players.map((player, index) => (
                    <Player
                        key={player._id}
                        position={index}
                        onPointAdded={props.onAddPoint}
                        onPointReduced={props.onRemovePoint}
                        onDeletePlayer={props.onDeletePlayer}
                        {...player}
                        />
                ))
            }
        </FlipMove>
    </ul>;