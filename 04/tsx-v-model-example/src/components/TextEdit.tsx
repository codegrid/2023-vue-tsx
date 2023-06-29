import { computed, defineComponent } from 'vue';
import './style.css';

export const TextEdit = defineComponent({
  emits: ['changeText'],
  props: {
    text: { type: String },
  },
  setup(props, { emit }) {
    const text = computed({
      get: () => props.text,
      set: (newCount) => emit('changeText', newCount),
    });
    return () => (
      <div>
        {/* テキストボックス */}
        <div>
          <input type='text' v-model={text.value} />
        </div>

        {/* ラジオボタン */}
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
  },
});

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
//       <div>
//         <input type='text' v-model={text.value} />
//       </div>
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
//         <div><input type='text' v-model={[text.value, ['lazy']]} /></div>

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
