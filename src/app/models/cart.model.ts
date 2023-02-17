export class Cart{
    public cartId:number;
    public userEmail:string;
    public itemId:number;
    public quantity:number;

    constructor(cartId:number,userEmail:string,itemId:number,quantity:number){
        this.cartId=cartId;
        this.userEmail=userEmail;
        this.itemId=itemId;
        this.quantity=quantity;
    }
}