export function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          const title = evt.target.title.value;
          const body = evt.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <input type="text" name="title" placeholder="title"></input>
        <br />
        <br />
        <textarea name="body" placeholrder="body"></textarea>
        <br />
        <br />
        <input type="submit"></input>
      </form>
    </article>
  );
}
