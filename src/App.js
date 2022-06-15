import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';
import { Nav } from './Nav';
import { Article } from './Article';
import { Create } from './Create';

function App() {
  const [mode, setMode] = useState('WELCOME'); //삭제 예정
  const [id, setId] = useState(null); //삭제 예정
  //새로운 상태가 생성됨. 그 안에 있는 값은 새로운 상태의 default 값.
  // 최초 한 번만 WELCOME이고, 바뀔 수 있음
  // 첫번째 바꿀때는 mode, 두번째 바꿀때는 setMode를 사용한다.
  const [nextId, setNextId] = useState(3);
  const [topics, setTopics] = useState([
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
  ]);

  return (
    <div>
      <HeaderStyled onSelect={headerHandler()}></HeaderStyled>
      <Nav data={topics} onSelect={navHandler()}></Nav>
      <Routes>
        <Route
          path="/"
          element={<Article title="Welcome" body="Hello, WEB!"></Article>}
        ></Route>
        <Route
          path="/create"
          element={<Create onCreate={onCreateHandler()} />}
        ></Route>
        <Route
          path="read/:topic_id"
          element={<Read topics={topics}></Read>}
        ></Route>
      </Routes>
      <ButtonGroup>
        <Button component={Link} to="/create" onClick={createHandler()}>
          Create
        </Button>
        <Button>Update</Button>
      </ButtonGroup>
      <Button
        component={Link}
        to="/delete"
        variant="outlined"
        onClick={deleteHandler()}
      >
        Delete
      </Button>
    </div>
  );

  function Read(props) {
    const params = useParams();
    const id = Number(params.topic_id);
    const topic = props.topics.filter((e) => {
      if (e.id === id) {
        return true;
      } else {
        return false;
      }
    })[0];
    return <Article title={topic.title} body={topic.body}></Article>;
  }

  function onCreateHandler() {
    return (title, body) => {
      setTopics(() => {
        const newTopics = [...topics];
        newTopics.push({ id: nextId, title, body });
        return newTopics;
      });
      setId(nextId);
      setMode('READ');
      setNextId(nextId + 1);
    };
  }

  function navHandler() {
    return (id) => {
      // mode = 'READ';
      setMode('READ');
      setId(id);
    };
  }

  function deleteHandler() {
    return () => {
      const newTopics = topics.filter((e) => {
        if (e.id === id) {
          return false;
        } else {
          return true;
        }
      });
      setTopics(newTopics);
      setMode('WELCOME');
    };
  }

  function createHandler() {
    return () => {
      setMode('CREATE');
    };
  }

  function headerHandler() {
    return () => {
      // mode = 'WELCOME';
      setMode('WELCOME');
    };
  }
}

export default App;
