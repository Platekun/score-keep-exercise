import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from '../imports/api/players';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        render(<App store={Players} />, window.document.getElementById('root'));
    });
});
