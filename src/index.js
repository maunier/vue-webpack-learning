import Vue from 'vue';
import VueRouter from 'vue-router';

import App from 'components/App';
import ChannelTitle from 'components/ChannelTitle';
import ChannelPage from 'components/ChannelPage'; 
import TestSlot from 'components/TestSlot';
import Computed from 'components/Computed';

Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: App
}, 
// {
// 	name: 'channelPage',
// 	path: '/:channelName',
// 	component: ChannelPage
// },
 {
  name: 'testSlot',
  path: '/testSlot',
  component: TestSlot
}, {
  name: 'testComputedIsInreactive',
  path: '/computed',
  component: Computed
}];

const router = new VueRouter({
  routes,
  // mode: 'history'
});

Vue.component('channel', ChannelTitle);
// Vue.component('test-slot', TestSlot);

const app = new Vue({
	router,
  // mounted: () => {
  //   console.log('this：', this)
  // }
  // mounted: function() {
  //   console.log('this:', this);
  // }
}).$mount('#app');
// console.log('refs:', app);