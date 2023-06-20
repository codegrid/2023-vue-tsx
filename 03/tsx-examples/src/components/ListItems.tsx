export const ListItems = (props: { listItems: string[] }) => (
  <>
    <h3>v-forに替わるArray#mapによるリスト表示</h3>
    <ul>
      {props.listItems.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </>
);
