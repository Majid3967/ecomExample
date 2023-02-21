export class Cart{
    public CartId:number;
    public productId:number;
    public userEmail:string;
    public Quantity:number;

    constructor(CartId:number,userEmail:string,productId:number,Quantity:number){
        this.CartId=CartId;
       
        this.productId=productId;
        this.userEmail=userEmail;
        this.Quantity=Quantity;
    }
}