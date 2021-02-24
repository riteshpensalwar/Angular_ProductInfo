export class ProductInfo {
  // adding an indexer property to read the value of the property
  // dynamically using iteration i.e. for..of loop
  // the indexer will allow to read value of each property
  // that is read using Object.keys()
  // x is the property name that is string
  // and the type of 'x' may be number, string, boolean, array, etc
  // so use the type as 'any'
  [x:string]:any
  constructor(
    public ProductRowId:number,
    public ProductId: string,
    public ProductName: string,
    public CategoryName: string,
    public Manufacturer: string,
    public Description:string,
    public BasePrice:number
  ){}
}
