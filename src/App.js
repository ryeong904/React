import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
            props.onSelect(e.id);
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
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  //새로운 상태가 생성됨. 그 안에 있는 값은 새로운 상태의 default 값.
  // 최초 한 번만 WELCOME이고, 바뀔 수 있음
  // 첫번째 바꿀때는 mode, 두번째 바꿀때는 setMode를 사용한다.
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

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB!"></Article>;
  } else if (mode === 'READ') {
    const topic = topics.filter((e) => {
      if (e.id === id) {
        return true;
      } else {
        return false;
      }
    })[0];
    console.log(topic);
    content = <Article title={topic.title} body={topic.body}></Article>;
  }

  return (
    <div>
      <Header
        onSelect={() => {
          // mode = 'WELCOME';
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        data={topics}
        onSelect={(id) => {
          // mode = 'READ';
          setMode('READ');
          setId(id);
        }}
      ></Nav>
      {content}
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
