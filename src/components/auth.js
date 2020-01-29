
class Auth  {
   constructor(){
    
    this.authenticated = false
    
    }

   login(cb){
       
      this.authenticated = true;
      cb()
   }

   logout(cb) {
       alert('logout block')
       this.authenticated = false;
       alert(this.authenticated )
       cb()
   }

   isAuthenticated(){
    alert(this.authenticated )
       return this.authenticated;
       
   }

}

export default new Auth();