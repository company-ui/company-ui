import React, { useState } from 'react';
import { AutoComplete } from '../../packages/react/src/main';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('ibm');

  return (
    <div className="App">
      <AutoComplete
        popupAppendToBody={false}
        defaultValue={inputValue}
        value={inputValue}
        onChange={setInputValue}
      ></AutoComplete>
      {inputValue}
    </div>
  );
}

export default App;
