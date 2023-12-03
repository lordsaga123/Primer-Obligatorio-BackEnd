class Productmanager{
    static lastId = 0; 
    constructor (){
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {
        if(!title || !description || !price || !img || !code || !stock){
            console.log("Deben completarse todos los campos. Por favor volver a intentarlo.");
            return;
        }

        if(this.products.some(item => item.code === code)){
            console.log("El código ingresado ya existe en la BD.");
            return;
        }

        const newProduct = {
            id: ++Productmanager.lastId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts(){
        console.log(this.products)
    }

    getProductById(id){
        const product = this.products.find(item => item.id === id);
        if(!product){
            console.log("El producto ingresado no fue encontrado. Intentelo nuevamente.");
        } else{
            console.log("Producto encontrado. ", product);
        }
        return product;
    }

}

//Testing dek Código:

// 1) Creación de instancia de la clase "ProductManager"
const manager = new Productmanager

//2) getProducts con Array Vacío
manager.getProducts();

//3) Llamado al método AddProduct
manager.addProduct("producto Pueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);
manager.getProducts();

//4) Revisión incremento automático de ID
manager.addProduct("Remera de Hombre", "Remera talle M", 350, "Sin Imagen", "abc124",75);

//5) Llamado de Getproducts
manager.getProducts();

//6 Evaluación de getProductById
manager.getProductById(2);
manager.getProductById(25);


