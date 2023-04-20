import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div>
        <div>
          <h2>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/Layout'}>Layout</Link>
              </li>
              <li>
                <Link to={'/About'}>About</Link>
              </li>
            </ul>
          </h2>
        </div>
      <div>
        <h2>View</h2>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/Layout'} element={<Layout/>}>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'comments'} element={<Comments/>}>
              <Route path={':postId'} element={<Posts/>}/>
            </Route>

          </Route>
          <Route path={'/About'} element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
