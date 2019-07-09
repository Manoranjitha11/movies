import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

  // Snapshot for App React Component
describe('>>>APP --- Snapshot',()=> {
    it('+++RENDER WITHOUT CRASH', () => {
        const renderedValue =  renderer.create(<App />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
