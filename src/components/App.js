import '../assets/css/app.css';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <Main/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
