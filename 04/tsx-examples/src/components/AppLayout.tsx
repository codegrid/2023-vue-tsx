// import { defineComponent } from 'vue';
// import styles from './AppLayout.module.css';

// export const AppLayout = defineComponent({
//   setup(_, { slots }) {
//     return () => (
//       <div class={styles.AppLayout}>
//         <header>
//           ...
//           {slots.header?.()}
//         </header>
//         <main>{slots.default?.()}</main>
//         <footer>...</footer>
//       </div>
//     );
//   },
// });

import { SetupContext } from 'vue';
import styles from './AppLayout.module.css';

export const AppLayout = (_: any, { slots }: SetupContext) => (
  <>
    <h3>スロットによるコンテンツの差し込み</h3>
    <div class={styles.AppLayout}>
      <header>
        ...
        {slots.header?.()}
      </header>
      <main>{slots.default?.()}</main>
      <footer>...</footer>
    </div>
  </>
);
