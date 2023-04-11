import './App.css';
import Index from "./components/Simpsons";
import Ricks from "./components/Ricks";


// 1. Описати всю сім'ю сімпсонів (5 персонажів)

 const App = () => {

  return (
    <div>
        <Index/>
        <Ricks/>
    </div>
  );
}


// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів
export default App;
