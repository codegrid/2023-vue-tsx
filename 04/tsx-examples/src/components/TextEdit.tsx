// import { computed, defineComponent } from 'vue';

// export const TextEdit = defineComponent({
//   emits: ['changeText'],
//   props: {
//     text: { type: String },
//   },
//   setup(props, { emit }) {
//     const text = computed({
//       get: () => props.text,
//       set: (newText) => emit('changeText', newText),
//     });
//     return () => (
//       <div>
//         {/* テキストボックス */}
//         <input type='text' v-model={text.value} />

//         {/* ラジオボタン */}
//         <label>
//           <input type='radio' v-model={text.value} value='orange' />
//           orange
//         </label>
//         <label>
//           <input type='radio' v-model={text.value} value='apple' />
//           apple
//         </label>
//         <label>
//           <input type='radio' v-model={text.value} value='ringo' />
//           ringo
//         </label>
//       </div>
//     );
//   },
// });

// import { computed } from 'vue';

// export const TextEdit = (props: {
//   text: string;
//   onChangeText: (newText: string) => void;
// }) => {
//   const text = computed({
//     get: () => props.text,
//     set: (newText) => props.onChangeText(newText),
//   });
//   return (
//     <div>
//       <input type='text' v-model={text.value} />
//       <label>
//         <input type='radio' v-model={text.value} value='orange' />
//         orange
//       </label>
//       <label>
//         <input type='radio' v-model={text.value} value='apple' />
//         apple
//       </label>
//       <label>
//         <input type='radio' v-model={text.value} value='ringo' />
//         ringo
//       </label>
//     </div>
//   );
// };

import { SetupContext, computed } from 'vue';

export const TextEdit = (
  props: {
    text: string;
    onChangeText: (newText: string) => void;
  },
  {
    emit,
  }: SetupContext<{
    changeText: (newText: string) => void;
  }>
) => {
  const text = computed({
    get: () => props.text,
    set: (newText) => emit('changeText', newText),
  });
  return (
    <div>
      <h3>v-modelを使ったフォーム</h3>
      <input type='text' v-model={text.value} />
      <label>
        <input type='radio' v-model={text.value} value='orange' />
        orange
      </label>
      <label>
        <input type='radio' v-model={text.value} value='apple' />
        apple
      </label>
      <label>
        <input type='radio' v-model={text.value} value='ringo' />
        ringo
      </label>
    </div>
  );
};
TextEdit.emits = {
  sendMessage: (value: unknown) => typeof value === 'string',
};

// import { computed, defineComponent } from 'vue';

// export const TextEdit = defineComponent({
//   emits: ['changeText'],
//   props: {
//     text: { type: String },
//   },
//   setup(props, { emit }) {
//     const text = computed({
//       get: () => props.text,
//       set: (newCount) => emit('changeText', newCount),
//     });
//     return () => (
//       <div>
//         {/* テキストボックス */}
//         <input type='text' v-model={[text.value, ['lazy']]} />

//         {/* ラジオボタン */}
//         <label>
//           <input type='radio' v-model={text.value} value='orange' />
//           orange
//         </label>
//         <label>
//           <input type='radio' v-model={text.value} value='apple' />
//           apple
//         </label>
//         <label>
//           <input type='radio' v-model={text.value} value='ringo' />
//           ringo
//         </label>
//       </div>
//     );
//   },
// });
