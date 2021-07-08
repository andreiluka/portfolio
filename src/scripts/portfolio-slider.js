console.log('this is the portfolio-slider module');

import Vue from 'vue';



const thumbs = {
   template: '#portfolio-thumbs',
   props: {
      works: Array,
      currentWork: Object
   }
}

const btns = {
   template: '#portfolio-btns',
   props: {
      works: Array,
      currentIndex: Number
   }
}

const slider = {
   template: '#portfolio-slider',
   props: {
      works: Array,
      currentWork: Object,
      currentIndex: Number
   },
   computed: {
      reversedWorks() {
         return [...this.works].reverse();
      }
   },
   components:{
      thumbs,
      btns
   }
}

const languages = {
   template: '#portfolio-languages',
   props: {
      tags: Array
   }
}

const words = {
   template: '#portfolio-words',
   props: {
      currentWork: Object
   }
}

new Vue({
   el: '#portfolio-widget',
   template: '#portfolio-content',
   components: {
      slider,
      languages,
      words
   },
   data() {
      return {
         works: [],
         currentIndex: 0
      }
   },
   computed: {
      currentWork() {
         return this.works[this.currentIndex];
      },
      tagsArray() {
         return this.currentWork.skills.split(', ');
      }
   },
   watch: {
      currentIndex(value) {
         const lastIndex = this.works.length - 1;
         if (value < 0) this.currentIndex = 0;
         if (value > lastIndex) this.currentIndex = lastIndex;
      }
   },
   methods: {
      makeArrayWithImages(data) {
         return data.map(item => {
            const requirePic = require(`../images/content/${item.photo}`).default;
            item.photo = requirePic;
            return item;
         });
      },
      handleSlide(direction) {
         switch(direction) {
            case 'next':
               this.currentIndex++;
               break;
            case 'prev':
               this.currentIndex--;
               break;
         }
      }
   },
   created() {
      const data = require('../data/works.json');
      this.works = this.makeArrayWithImages(data);
   }
});