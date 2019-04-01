export class user{
    Id:String;
    FirstName:String;
    LastName:String;
    Email:String;
    password:String
    constructor( Id:String,
        FirstName:String,
        LastName:String,
        Email:String,
        password:String){
            this.Email=Email;
            this.FirstName=FirstName;
            this.Id=Id;
            this.LastName=LastName;
            this.password=password;
        }

}