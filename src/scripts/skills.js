console.log('this is the skills module');

import Vue from 'vue';

const row = {
   template: '#skills-row',
   props: {
      skill: Object
   }
}

new Vue ({
   el: '#skills-widget',
   template: '#skills-list',
   components: {
      row
   },
   data() {
      return {
         skills: []
      }
   },
   created() {
      const data = require('../data/skills.json');
      this.skills = data;
   }
});
