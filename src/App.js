import { useState } from 'react';
import './App.css';
import { generatePassword } from './utils/passwordGenerator';

function App() {
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(length, includeNumbers, includeSymbols);
        setPassword(newPassword);
    };

    return (
        <div className="container-fluid">

            <div className="App">
                <h1>Password Generator</h1>
                <div>
                    <label>
                        Length:
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            min="1"
                            max="50"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Include Numbers:
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={(e) => setIncludeNumbers(e.target.checked)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Include Symbols:
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={(e) => setIncludeSymbols(e.target.checked)}
                        />
                    </label>
                </div>
                <button className='glow-on-hover' onClick={handleGeneratePassword}>Generate Password</button>
                {password && (
                    <div>
                        <h2>Generated Password:</h2>
                        <p>{password}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
