import './App.css';
import { HeaderTag } from './components/molecules/HeaderTag';
import { IssueTable } from './components/organisms/IssueTable';
import { Header } from './components/organisms/layout/Header';
import { SearchArea } from './components/organisms/search/SearchArea';
import { Issue } from './components/pages/Issue';
import { PullRequest } from './components/pages/PullRequest';
import { Router } from './router/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderTag />
      <SearchArea />
      <IssueTable />
      <Issue />
      <PullRequest />
      <Router />
    </div>
  );
}

export default App;
