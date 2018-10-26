var app = new Vue({
  el: '#app',
  data: {
    users: [],
    userSelected: [],
    infos: [],
    datedeb: '',
    datefin: '',
    projets: [],
    projetSelected: ''
  },
  created: function() 
  {
    vm = this;
   // $.getJSON( "data.json", function( json ) {     -> problème cross origin
    vm.users = JSON.parse(getNom());
    vm.projets = JSON.parse(getProjet());
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
          .get('https://api.github.com/repos/'+vm.userSelected[user]+'/'+vm.projetSelected+'/commits?'+date,
            {headers: {
              Authorization: "Bearer e6cb58743fbcc26ee0b953adb8454de9df56d0ce"
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