import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

// 반드시 대문자로 시작하기
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(evt) => {
            evt.preventDefault();
            console.log('evt', evt);
            console.log(props);
            props.onSelect();
          }}
        >
          Web
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const list = props.data.map((e) => {
    return (
      <li key={e.id}>
        <a
          href={'/read/' + e.id}
          onClick={(evt) => {
            evt.preventDefault();
            props.onSelect();
          }}
        >
          {e.title}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    {
      id: 1,
      title: 'html',
      body: 'html is ..',
    },
    {
      id: 2,
      title: 'css',
      body: 'css is ..',
    },
  ];

  function createHandler() {
    alert('create!');
  }

  return (
    <div>
      <Header
        onSelect={() => {
          alert('Header!!');
        }}
      ></Header>
      <Nav
        data={topics}
        onSelect={() => {
          alert('nav!!');
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>
      <Article title="HTML" body="HTML is ..."></Article>
      <ButtonGroup>
        <Button
          onClick={() => {
            alert('create!');
          }}
        >
          Create
        </Button>
        <Button>Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}

export default App;
