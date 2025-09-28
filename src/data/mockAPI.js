import products from "./products"

function getProducts(){
    const promiseProducts = new Promise ( (resolve,reject) => {
        setTimeout( () => {
            console.log("devolviendo datos...")
            resolve(products)
        },2000 )
    })
    return promiseProducts;
}

export function getProductsById(idParam){
    const requestProduct = products.find(product => product.id == idParam)

    const promiseProduct = new Promise ( (resolve) => {
        setTimeout( () => {
            console.log("devolviendo datos...")
            resolve(requestProduct)
        },2000 )
    })
    return promiseProduct;
}

export function getProductByCategory(categParam){
    const requestCategory = products.filter(product => product.category == categParam)

    const promiseCategory = new Promise ( (resolve) => {
        setTimeout( () => {
            console.log("devolviendo datos...")
            resolve(requestCategory)
        },2000 )
    })
    return promiseCategory;
}

export default getProducts;