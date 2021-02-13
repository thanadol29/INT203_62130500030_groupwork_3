const app = {
  data() {
      return {
          
          place1:'Moscow',
          url1:'https://i.imgur.com/B0zvdp6.png',
          place2:'Berlin',
          url2:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1920px-Berlin_reichstag_west_panorama_2.jpg',
          place3:"Vienna",
          url3:'https://i.imgur.com/5tRu76I.jpg',
          favorite1: false,
          favorite2: false,
          favorite3: false,
          count: "3",
          test: {
            place:'mascow',
            url:'https://i.imgur.com/B0zvdp6.png'
          }
      }
      
  },
  
}


var mountedApp = Vue.createApp(app).mount('#app')