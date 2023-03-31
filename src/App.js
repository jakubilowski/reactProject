import './App.css';
import logo from './logo.svg';
import SideBar from './components/Sidebar/Sidebar';
import Search from './components/Search/Search';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Component3 from './components/Component3/Component3';
import Component4 from './components/Component4/Component4';
import Component5 from './components/Component5/Component5';

function App() {
  return (
    <div class="myContainer">
  <div className="sidebar">
     <SideBar/>
  </div>
  <div class="header rounded">
    <Search/>
  </div>
  <div class="content">
  <ul class="flex-container">
  <Component1/>
  <Component2/>
  <Component3/> 
  <Component4/>
  <div className='mycl'> 
  <Component5/>
  </div>
    </ul>
  </div>
</div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import HelloWorld from './components/HelloWorld';
// import ImieNazwisko from './components/ImieNazwisko/ImieNazwisko';
// import NrAlbumu from './components/Album/NrAlbumu';
// import NrGrupy from './components/Grupa/NrGrupy';
// import Counter from './components/Counter/Counter';

// function App() {
//   return (
//     <div className="App">
//       <HelloWorld name = "Jakub"/>
//       <ImieNazwisko surname = "Iłowski"/>
//       <NrAlbumu nrAlbumu = "64258" />
//       <NrGrupy nrGrupy = "1.1" />
//       <Counter />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edytujj <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
