import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

import TodoList from './components/TodoList'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
    
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up'component={SignUp}/>
        
       
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
