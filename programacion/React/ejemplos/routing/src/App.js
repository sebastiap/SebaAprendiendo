import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//Componentes Generales
import Header from "./components/layout/header"
import Hero from './components/layout/hero';
import Footer from "./components/layout/footer";

//Componentes Individuales
import BlogDetails from './components/common/BlogDetail';

//Paginas Virtuales
import BlogPage from './components/pages/blogs';
import TopGames from './components/pages/top';
import NotFound from "./components/pages/notFound"

function App() {

  return (

    // Tengo que cubrir todo con Router para aclarar que estoy usando Router
    <Router>
      <Header />
      {/* Todo lo que esta dentro del switch cambia segun la ruta
      cada pieza de codiga cubierta por etiquetas route sera una ruta diferente */}
      <Switch>
        <Route exact path="/">
        <Hero/>
        </Route>
        <Route path="/top">
          <TopGames/>
        </Route>
        <Route exact path="/blog">
          <BlogPage/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      {/* Aca termina el switch  */}
      <Footer />
    </Router>
  );
}
export default App;
