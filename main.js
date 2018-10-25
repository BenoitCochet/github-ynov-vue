var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    users: [],
    userSelected: [],
    infos: [],
    datedeb: '',
    datefin: '',
  },
  created: function() 
  {
    vm = this;
   // $.getJSON( "data.json", function( json ) {
    vm.users = JSON.parse(getNom());
    console.log(vm.users);
    console.log("my users: " + JSON.stringify(JSON.parse(vm.users)));
   // })
  },
  mounted: function() {
    var self = this;
    $('#datepicker').datepicker({
      onSelect:function(selectedDate, datePicker) {            
        self.datedeb = selectedDate;
      }
    });
    $('#datepicker1').datepicker({
      onSelect:function(selectedDate1, datePicker1) {            
        self.datefin = selectedDate1;
      }
    });
  },
  methods: {
    getSelectedUsers : function(){
      this.infos = [];
      var date = ""
      if(this.datedeb!="")
        date += "&since=" + this.datedeb;
      if(this.datefin!="")
        date += "&until=" + this.datefin;
      console.log("User: "+vm.userSelected);
      for(var user in vm.userSelected){
        axios
          .get('https://api.github.com/repos/'+vm.userSelected[user]+'/github-ynov-vue/commits?'+date,
            {headers: {
              Authorization: "Bearer 691964033f40e80ef152704ab688cde8615f994a"
            }})
          .then(function(response){
            this.vm.infos = this.vm.infos.concat(response.data);
          })

        var date = this.datedeb;
      }
    }
  },
  computed: {

  },
})