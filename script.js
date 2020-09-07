var app = new Vue({
  el: '#app',
  data: {
    title: 'Hi,There.'
  },
  methods:{
    changeTitle:function(e) {
      this.title = e.target.value;
    }
  }
})