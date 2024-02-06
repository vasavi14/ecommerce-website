import React from 'react';
import { useParams } from 'react-router-dom';
import image1 from "./Products/inter1.jpg";
import image2 from "./Products/inter2.jpg";
import image3 from "./Products/inter3.jpg";
import image4 from "./Products/inter4.jpg";
import image5 from "./Products/inter5.jpg";
import image6 from "./Products/inter6.jpg";
import image7 from "./Products/inter7.jpg";
import image8 from "./Products/inter8.jpg";
import image9 from "./Products/inter9.jpg";
import './components/productdetails.css'
const ProductDetails = () => {
  // Use the useParams hook to access route parameters
  const { id } = useParams();

  // Placeholder product data (replace this with actual data fetching logic)
  const products = [
    {
      id: 1,
      title: "Modern Soft Brush",
      Categories: ": Furniture, Shop",
      price: "495  ",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates ",
      price1: "550 ",
      image: image1,
      Rate: 5,
      amount: 1,
    },
    {
      id: 2,
      title: "Bedroom Night Stand",
      Categories: "Furniture, Shop",
      price: "299  ",
      price1: "350",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",
      image: image2,
      Rate: 5,
      amount: 1,
    },
    {
      id: 3,
      title:
        "Wooden luminaire",
      Categories: "Lighting, Shop",
      price: "330  ",
      price1: "350",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image3,
      Rate: 5,
      amount: 1,
    },
    {
      id: 4,
      title: "Golden Suspend",
      Categories: " Lighting, Shop",
      price: "360  ",
      price1: "380",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image4,
      Rate: 5,
      amount: 1,
    },
    {
      id: 5,
      title: "Wall bracket",
      Categories: "Lighting, Shop",
      price: "845  ",
      price1: "955",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image5,
      Rate: 5,
      amount: 1,
    },
    {
      id: 6,
      title:
        "Pendent light",
      Categories: "Lighting",
      price: "300  ",
      price1: "450",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image6,
      Rate: 5,
      amount: 1,
    },
    {
      id: 7,
      title: "Golden Suspend LED",
      Categories: "stuff",
      price: "399  ",
      price1: "500",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image7,
      Rate: 5,
      amount: 1,
    },
    {
      id: 8,
      title: "Wall bracket",
      Categories: "Lighting, Shop",
      price: "1568  ",
      price1: "2450",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image8,
      Rate: 5,
      amount: 1,
    },
    {
      id: 9,
      title: "Golden Suspend LED",
      Categories: "stuff",
      price: "150  ",
      price1: "200",
      description:
        "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image9,
      Rate: 5,
      amount: 1,
    },

  ];
  const product = products.find(product => product.id.toString() === id);

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }
  // const imageArray = Array.isArray(product.images) ? product.images : [];

  return (
    <div>
      <img src={product.image} alt={product.title} className='img'/>
      <div >
      <h1 className='title' style={{fontSize:"40px",color:" #070111"}}>{product.title}</h1>
      <p className='desc' style={{marginLeft:"22%",fontFamily:'initial'}}>{product.description}</p>
      
      <p style={{marginLeft:"22%" ,color:"blue",fontSize:"20px",fontFamily:'initial'}}><strike style={{color:"red"}}> <span style={{color:"red",fontFamily:'initial'}}> &#8377; 450</span></strike>&nbsp;&nbsp;&nbsp; &#8377;{product.price} </p>
    <p style={{marginLeft:"22%",fontFamily:'initial'}}>Rating: {product.Rate}
    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
</p> 

    <p style={{marginLeft:"22%",fontFamily:'initial'}}>Categories:{product.Categories}</p>
    {/* <div data-tooltip="Price:&#8377;330" class="button" >
<div class="button-wrapper">
  <div class="text">Buy Now
  </div>
  
  
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 
  0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 
  1 4 0 2 2 0 0 1-4
   0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div> */}
{/* <button className='b2' style={{marginTop:"-100%"}}>Share</button> */}
<button class="b3">
        <span>Share</span><span>
            <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
                <path fill="#ffffff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z">
                </path>
            </svg>
        </span>
        <ul>
            <li>
                <a href="https://www.whatsapp.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path fill="#ffffff" d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path fill="#ffffff" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg></a>

            </li>
            <li>
                <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path fill="#ffffff" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </button>




    




        
      </div>

    </div>
  );
};

export default ProductDetails;
