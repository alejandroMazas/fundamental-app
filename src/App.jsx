
import CoreConceptsFeature from './components/CoreConceptsFeature.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConceptsFeature />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
