// Os componenete em react geralemente são divididos em 3 partes principais
// - As importações para a contrução do componenete
// - Estrutura do componente em si
// - Export do componente

import './App.css'
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <main>
      <section id='profile-conteiner'>
        <Profile/>
      </section>
    </main>
  );
}

export default App;
