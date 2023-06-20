import styles from './index.module.css';

export const CheckboxItem = () => (
  <>
    <h3>for、label、classの利用</h3>
    <div class={styles.CheckboxItem}>
      <input id='ok' type='checkbox' />
      <label for='ok'>ここをクリックしてください</label>
    </div>
  </>
);
