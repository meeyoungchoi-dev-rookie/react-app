import logo from './logo.svg';
import './App.css';

// 사용자 정의 태그 만들기 - 함수정의
function Header(props) {
  console.log('props', props , props.title);
  return <header>
            <h1>
              <a href="/" onClick={(event) => {
                event.preventDefault();//  a태그를 클릭해도 reload가 일어나지 않게 된다
                props.onChangeMode();
              }}>{props.title}</a>
            </h1>
          </header>
}

function Nav(props) {

  const lis = []

  for (let i = 0; i < props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(event.target.id);// 이벤트를 유발시킨 태그의 id 값을 가져온다
      }}>{t.title}</a></li>);
  }

  return <nav>
            <ol>
              {lis}
            </ol>
          </nav>
}

function Article(props) {
  return <article>
            <h2>{props.title}</h2>
            {props.body}
          </article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={() => {
          alert('Header');
      }}>WEB</Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello Web"></Article>
    </div>
  );
}

export default App;