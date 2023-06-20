import { createApp } from 'vue';
// import { createApp } from 'vue/dist/vue.esm-bundler';
// import './style.css';
import AppVue from './App.vue';
import AppTsx from './App';

const App = () => {
  return (
    <div style='display:flex'>
      <div style='flex:1'>
        <AppVue />
      </div>
      <div style='flex:1'>
        <AppTsx />
      </div>
    </div>
  );
};

createApp(App).mount('#app');
