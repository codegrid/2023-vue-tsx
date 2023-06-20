import { defineComponent, ref } from 'vue';

export const Expander = defineComponent({
  setup() {
    const isOpen = ref(true);
    const toggle = () => (isOpen.value = !isOpen.value);
    return () => (
      <div>
        <h3>v-ifに替わる式による開閉</h3>
        {/* .valueは省略できない */}
        <button onClick={toggle}>{isOpen.value ? '閉じる' : '開く'}</button>
        {/* v-ifに替わり 真偽値 && JSX と記述する */}
        {isOpen.value && (
          <div>
            <p>contents</p>
          </div>
        )}
      </div>
    );
  },
});

// export const Expander = defineComponent({
//   setup() {
//     const isOpen = ref(true);
//     const toggle = () => (isOpen.value = !isOpen.value);
//     const contentsNode = (
//       <div>
//         <p>contents</p>
//       </div>
//     );
//     return () => (
//       <div>
//         <h3>v-ifに替わる式による開閉</h3>
//         <button onClick={toggle}>{isOpen.value ? '閉じる' : '開く'}</button>
//         {/* .valueは省略できない */}
//         {/* v-ifに替わり 真偽値 && JSX と記述する */}
//         {isOpen.value && contentsNode}
//       </div>
//     );
//   },
// });
