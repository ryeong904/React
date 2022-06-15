import { Link } from 'react-router-dom';

// 반드시 대문자로 시작하기
export function Header(props) {
  return (
    <header className={props.className}>
      <h1>
        <Link
          to="/"
          onClick={(evt) => {
            props.onSelect();
          }}
        >
          WWW
        </Link>
      </h1>
    </header>
  );
}
