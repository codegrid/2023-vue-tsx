import { defineComponent, ref } from 'vue';

export const ExpanderVShow = defineComponent({
  setup() {
    const isOpen = ref(true);
    const toggle = () => (isOpen.value = !isOpen.value);
    return () => (
      <div>
        <h3>v-showによる開閉</h3>
        <button onClick={toggle}>{isOpen.value ? '閉じる' : '開く'}</button>
        {/* .valueは省略できない */}
        <div v-show={isOpen.value}>
          <p>contents</p>
        </div>
      </div>
    );
  },
});
