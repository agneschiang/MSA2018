import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ThirdComponent from './components/ThirdComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThirdComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
