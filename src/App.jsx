import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core React Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem,) =>
            (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )
            )}

            { /*
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            */ }

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTopic === "components"} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isActive={selectedTopic === "jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isActive={selectedTopic === "props"} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isActive={selectedTopic === "state"} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ?
            <p>Please select a topic.</p>
            : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
            )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
