import Header from './header';
import Experience from './experience';
import Skills from './Skills';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <Header />
      <hr />
      <Experience />
      <hr />
      <Skills />
    </div>
  );
}

 export default App;