const app = {
  data() {
      return {
          place1:'Moscow',
          url1:'https://i.imgur.com/B0zvdp6.png',
          place2:'Berlin',
          url2:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1920px-Berlin_reichstag_west_panorama_2.jpg',
          place3:"",
          url3:'',
          heart:function (event) {
            
            alert('<3')}
        
      }
      
  },
  created(){
      console.log('test '+ this.msg)
  },
  updated(){
      console.log('Message is changed  to '+ this.msg)
  }
}


var mountedApp = Vue.createApp(app).mount('#app')