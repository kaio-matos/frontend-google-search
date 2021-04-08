import './style/App.css';
import './style/Account.css';
import './style/Search.css';
import './style/Settings.css';
import Account from "./components/Account"
import Search from "./components/Search"
import Settings from "./components/Settings"

function App() {
  return (
    <section>
      <header>
        <Account className="account"></Account>
      </header>
      <main>
        <Search className="search"></Search>
      </main>
      <footer>
        <Settings className="settings"></Settings>
      </footer>
    </section>
  );
}

export default App;