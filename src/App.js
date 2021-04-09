import FabButton from './components/FabButton';
import Todo from './components/Todo';
import './styles/Card.css';
import './styles/Main.css';
function App() {
  const getRandomColor = () => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      const colorCode = `rgb(${r}, ${g}, ${b})`;
      return colorCode;
  }
  return (
    <div className="App">
      <div className="card">
        <FabButton />
        <header>
          <div class="header-grid">
            <div className="date-container">
              <h3 className="date">Friday, 9th</h3>
              <p className="month">April</p>
            </div>
            <div className="option-holder">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div className="content-grid">
            <div className="tab">
              <h2 className="tab-number">20</h2>
              <div className="month">Total</div>
            </div>
            <div className="tab middle">
            <h2 className="tab-number">5</h2>
              <div className="month">Done</div>
            </div>
            <div className="tab">
            <h2 className="tab-number">15</h2>
              <div className="month">Due</div>
            </div>
          </div>
        </header>
        <div className="title">Today's Task</div>
        <div className="todo-holder">
          <Todo colorCode={getRandomColor()} complete={false}/>
          <Todo colorCode={getRandomColor()} complete={true}/>
          <Todo colorCode={getRandomColor()} complete={true}/>
          <Todo colorCode={getRandomColor()} complete={false}/>
          <Todo colorCode={getRandomColor()} complete={false}/>
          <Todo colorCode={getRandomColor()} complete={false}/>
        </div>
      </div>
    </div>
  );
}

export default App;
