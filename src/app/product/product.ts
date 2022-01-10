export class Product{
    id:number
    name:string
    price:number
    categoryId:number
    description:string
    imageUrl:string
}

// bu sınıfı, ürün listesini any türündeki güvensiz durumdan kurtulmak için tip güvenli hale 
// getirmek amacıyla oluştur ve products isimli nesnemizi Product türünde oluşturmuş olduk.