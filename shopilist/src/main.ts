import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

//imports DatabasePlugin from our module in ./testfolder/index.ts
import DatabasePlugin from './testfolder';

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});

//start db, add value, read value, closeDB | Simple Test case
DatabasePlugin.initialise();
DatabasePlugin.addString({key: 'Testkey', value: 'Testvalue'});
obtainStr('Testkey')
DatabasePlugin.closeDB()

//When working with await we need to use functions as it otherwise requires special configuration of a plugin we don't have installed
async function obtainStr(textkey: string)
{
  const { value } = await DatabasePlugin.obtainString({key: textkey});
  console.log('Response:', value);
}