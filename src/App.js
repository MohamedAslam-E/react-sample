//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import StudentTable from './components/StudentTable';


// const App = () => {
//   state = {
//     mystring: 'messi',
//     two: 'ronaldo'
//   };

//   return (
//     <div className="App">
//       <h1>{this.state.two}</h1>
//     </div>
//   );
// }

//  class App extends Component {
//   state = {
//         mystring: 'messi',
//         two: 'ronaldo'
//       };
//     render(){
//       return (
//         <div className="App">
//           <h1>{this.state.two}</h1>
//         </div>
//       );
//     }
//  }

const App =()=> (
  <div>
     <NavBar />
      <div className="container-fluid main-container">
        <div className="row main-row">
          <SideBar />
          <StudentTable />
        </div>
      </div>
  </div>
);

export default App;
