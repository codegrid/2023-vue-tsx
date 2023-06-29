import { withModifiers } from 'vue';

export const ModifierForm = () => {
  const onSubmit = () => {
    alert('submit');
  };
  return (
    <>
      <h3>preventモディファイアを使ったフォーム</h3>
      <form onSubmit={withModifiers(onSubmit, ['prevent'])}>
        <button type='submit'>送信する</button>
      </form>
    </>
  );
};
