// script.js
new Vue({
  el: '#app',
  data: {
    images: [
      { url: 'оружие1.jpg', alt: 'Оружие 1', category: 'Оружие' },
      { url: 'оружие2.jpg', alt: 'Оружие 2', category: 'Оружие' },
      { url: 'img/BMW.jpg', alt: 'Авто 1', category: 'Авто' },
      { url: 'img/cougar.jpg', alt: 'Авто 2', category: 'Авто' },
      { url: 'одежда1.jpg', alt: 'Одежда 1', category: 'Одежда' },
      { url: 'одежда2.jpg', alt: 'Одежда 2', category: 'Одежда' },
      { url: 'прочее1.jpg', alt: 'Прочее 1', category: 'Прочее' },
      { url: 'прочее2.jpg', alt: 'Прочее 2', category: 'Прочее' },
    ],
    currentCategory: ''
  },
  computed: {
    filteredImages() {
      return this.images.filter(image => image.category === this.currentCategory);
    }
  },
  methods: {
    showImages(category) {
      this.currentCategory = category;
    }
  }
});
