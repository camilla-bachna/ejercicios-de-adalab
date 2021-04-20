import React, { useState } from 'react';
import '../stylesheets/App.scss';
import Name from './Name';
import Description from './Description';
import Language from './Language';
import Age from './Age';
import Reset from './Reset';
import Preview from './Preview';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [value, setValue] = useState('all ages');

  const handleInput = (inputKey, inputValue) => {
    if (inputKey === 'name') {
      setName(inputValue);
    } else if (inputKey === 'description') {
      setDescription(inputValue);
    } else if (inputKey === 'language') {
      setLanguage(inputValue);
    } else if (inputKey === 'value') {
      setValue(inputValue);
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setName('');
    setDescription('');
    setLanguage('');
    setValue('all ages');
  };

  let ages;
  if (value === 'option 1') {
    ages = 7;
  } else if (value === 'option 2') {
    ages = 12;
  } else if (value === 'option 3') {
    ages = 16;
  } else if (value === 'option 4') {
    ages = 18;
  }

  return (
    <>
      <form className="container" onSubmit={handleForm}>
        <h1 className="title">Movie time</h1>
        <p className="title">
          Fill in the name of a movie, a description and the language in which
          you want to watch the film. Choose an age limit and the genre
        </p>
        <Name value={name} handleInput={handleInput} />
        <Description
          value={
            description || 'please write a description of the movie here...'
          }
          handleInput={handleInput}
        />
        <Language value={language} handleInput={handleInput} />
        <Age handleInput={handleInput} />

        {/* send button */}
        <input type="submit" value="Enviar" className="item" />

        <Reset handleReset={handleReset} />
      </form>

      <Preview
        name={name}
        description={description}
        language={language}
        ages={ages}
      />
    </>
  );
};
export default App;
