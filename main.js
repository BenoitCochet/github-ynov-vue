var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    users: [],
    userSelected: '',
    info: 'Mokui',
    
  },
  created: function() 
  {
    vm = this;
    $.getJSON( "data.json", function( json ) {
      vm.users = json;
      console.log("my users: " + JSON.stringify(vm.users));
      
    })
  },
  mounted: {

  },
  methods: {
    getSelectedUser : function(){
      vm = this;
      console.log("User: "+vm.userSelected);
      
      axios
        .get('https://api.github.com/users/'+vm.userSelected)
        .then(response => (vm.info = response))
    }
  },
  computed: {

  },
})