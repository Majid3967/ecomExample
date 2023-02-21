export class Item {
<<<<<<< Updated upstream
    public itemID: string;
    public itemName: string;
    public imgUrl: string;
    public description: string;
    public catID: string;
    public price:string;

  constructor(itemID: string, itemName: string, imgUrl:string, description: string,catID:string,price:string) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.imgUrl = imgUrl;
    this.description = description;
    this.catID=catID
    this.price =price
  }
  }
=======
  public cartId:number;
  public productID: number;
  public productName: string;
  public image: string;
  public description: string;
  public categoryID: number;
  public price:string;

constructor(cartId:number,productID: number, productName: string, image:string, description: string,categoryID:number,price:string) {
  this.cartId=cartId;
  this.productID = productID;
  this.productName = productName;
  this.image = image;
  this.description = description;
  this.categoryID=categoryID
  this.price =price
}
}
>>>>>>> Stashed changes
