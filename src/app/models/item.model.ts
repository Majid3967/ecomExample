export class Item {
    public itemID: string;
    public itemName: string;
    public imgUrl: string;
    public description: string;
    public catID: string;
    // private key?: string;

  constructor(itemID: string, itemName: string, imgUrl:string, description: string,catID:string) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.imgUrl = imgUrl;
    this.description = description;
    this.catID=catID
  }
  }