// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, query, where, addDoc,  getFirestore } from "firebase/firestore";
import products from "./products";

const firebaseConfig = {
  apiKey: "AIzaSyA7_sLOZ0i9h27P8lkxcLNwsHTQiVQeCE4",
  authDomain: "react-3cf00.firebaseapp.com",
  projectId: "react-3cf00",
  storageBucket: "react-3cf00.firebasestorage.app",
  messagingSenderId: "749129973079",
  appId: "1:749129973079:web:14c5f17ae43e1189519212"
};

// 1. Inicializar el servicio
const app = initializeApp(firebaseConfig);

// 2. Inicializamos la base de datos -> Firestore
const db = getFirestore(app);

// 3. Creamos la funcionalidad
// 3.1 -> getProducts

// En Firebase vamos a utilizar promesas pero con ASYNC/AWAIT
// async -> function que retorna una promesa
export async function getProducts(){
    const productsRef = collection(db,"products")
    const documentsSnapshot = await getDocs(productsRef)
    const documents = documentsSnapshot.docs
    const data = documents.map(doc => {
       return {id: doc.id, ...doc.data()} 
    })

    return data;
}
// 3.2 -> getProductById
export async function getProductsById(idParam) {
    const documentRef = doc(db, "products", idParam)
    const documentSnapshot = await getDoc(documentRef)
    const docData = documentSnapshot.data()
   
    return {id: documentSnapshot.id, ...docData};
}

// 3.3 -> getProductsByCategory
export async function getProductByCategory(categParam) {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categParam))

    const documentsSnapshot = await getDocs(q)
    const documents = documentsSnapshot.docs

    const data = documents.map(doc => {
       return {id: doc.id, ...doc.data()} 
    })

    return data;
}

export async function createBuyOrder(orderData) {
    const buyer = {name: "Gherzy", email: "gherzy.ayala@gmail.com", phone:"+51954776907"}
    const order = {
        cart: orderData,
        buyer, 
        total: 999,
        date: new Date()
    }

    const ordersRef = collection(db, "orders")
    const newOrderDoc = await addDoc(ordersRef, order)
    return newOrderDoc
}

export async function exportProductsToFirestore() {
    // iterar el array de products con doc en firebase
    for (let item of products){
        delete item.id
        const idDoc = await addDoc(collection(db, "products"), item)
        console.log("Creando documento:", idDoc)
    }
}

export default app;