import { marked } from 'marked';
import { useState } from "react";
import './App.css';

function App() {
  const stringToPass = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Here's some code, between 2 backticks.
 
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [Cool links](https://github.com/thejohncaleb), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  <img style="width: 400px" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" />
  
  <h2 style='font-family: cursive; text-align: center'>🔥 Crazy Right!! 🔥</h2>`;
  const [markdown, setMarkDown] = useState(stringToPass)
  const updatemarkdown = (e) => {
    setMarkDown(e.target.value)
  }
  const newDate = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
          <span>MK</span>
        <div>
          <h3>Markdown Previewer</h3>
        </div>
        <a href='https://github.com/THEJOHNCALEB/markdown-previewer'><i class="fa fa-github"></i></a>
      </header>
      <div className='container'>
        <div className="editor">
          <textarea id="editor" onChange={updatemarkdown} value={markdown}></textarea>
        </div>
        <div className='previewer'>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} id="preview"></div>
      </div> 
      </div>
      <header className="App-footer">
        <h3>{newDate} &nbsp;|&nbsp; ❤ from <a href='https://linktr.ee/thejohncaleb'>John Caleb</a></h3>
      </header>
    </div>
  );
}

export default App;
