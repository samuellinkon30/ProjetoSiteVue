import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import About from '@/components/About';
import Service from '@/components/Service';
import Find from '@/components/Find';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '*',
      name: 'default',
      redirect: '/',
    },
     {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service,
    },


  ],
});
