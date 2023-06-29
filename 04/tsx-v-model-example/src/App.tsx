import { defineComponent, ref } from 'vue';
import { TextEdit } from './components/TextEdit';

export default defineComponent({
  setup() {
    const text = ref('apple');
    const changeText = (newText: string) => (text.value = newText);
    return () => (
      <div>
        <fieldset>
          <legend>Root Component</legend>
          <div>
            text.value is 「<span style='color:red'>{text.value}</span>」
          </div>
          <fieldset>
            <legend>TextEdit Component</legend>
            <TextEdit text={text.value} onChangeText={changeText} />
          </fieldset>
        </fieldset>
      </div>
    );
  },
});
