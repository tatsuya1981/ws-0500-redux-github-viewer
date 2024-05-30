import './App.css';
import { HeaderTag } from './components/molecules/HeaderTag';
import { Header } from './components/organisms/layout/Header';
import { SearchArea } from './components/organisms/search/SearchArea';
import { Issue } from './components/pages/Issue';
import { PullRequest } from './components/pages/PullRequest';
import { Router } from './router/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchArea />
      <Issue />
      <PullRequest />
      <HeaderTag />
      <Router />
    </div>
  );
}

export default App;
