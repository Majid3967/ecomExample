export class Item {
    public cartId:number;
    public itemId: number;
    public itemName: string;
    public imageUrl: string;
    public description: string;
    public categoryId: number;
    public price:string;

  constructor(cartId:number,itemId: number, itemName: string, imageUrl:string, description: string,categoryId:number,price:string) {
    this.cartId=cartId;
    this.itemId = itemId;
    this.itemName = itemName;
    this.imageUrl = imageUrl;
    this.description = description;
    this.categoryId=categoryId
    this.price =price
  }
  }