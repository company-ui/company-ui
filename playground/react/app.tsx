import React, { useState } from 'react';
import { AutoComplete } from '../../packages/react/src/main';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('ibm');

  const handleInput = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <AutoComplete
        defaultValue={inputValue}
        value={inputValue}
        api="qcc_open"
        historyStorageKey="qcc-open-company-history"
        submitButtonLabel="查一查"
        autoFocus={false}
        onChange={setInputValue}
        onInput={handleInput}
      />
      {inputValue}
    </div>
  );
}

export default App;
