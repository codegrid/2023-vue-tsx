import { defineComponent, ref } from 'vue';
import { TextEdit } from './components/TextEdit';
import { ModifierForm } from './components/ModifierForm';
import { AppLayout } from './components/AppLayout';

export default defineComponent({
  setup() {
    const text = ref('apple');
    return () => (
      <>
        <h1>.tsx based</h1>
        <TextEdit
          onChangeText={(newText) => (text.value = newText)}
          text={text.value}
        />
        <div>text.value is 「{text.value}」</div>

        <ModifierForm />

        <AppLayout>
          {{
            header: () => <p>headerにこの部分が差し込まれる</p>,
            default: () => <p>defaultにこの部分が差し込まれる</p>,
          }}
        </AppLayout>
      </>
    );
  },
});

// const text = ref('apple');

// export default () => {
//   return (
//     <>
//       <h1>.tsx based</h1>
//       <TextEdit
//         onChangeText={(newText) => {
//           console.log('onChangeText');
//           text.value = newText;
//         }}
//         text={text.value}
//       />
//       <hr />
//       {text.value}

//       <ModifierForm />

//       <AppLayout>
//         {{
//           header: () => <p>headerにこの部分が差し込まれる</p>,
//           default: () => <p>defaultにこの部分が差し込まれる</p>,
//         }}
//       </AppLayout>
//     </>
//   );
// };
