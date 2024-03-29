import React,{ useState } from 'react'
import Header from '../../header/Header'
import "./Home.css";
import Product from './product/Product';
import speakerImage from "../../../images/charger.png"
import headfoneImage from "../../../images/Headfone.jpg"
import bagImage from "../../../images/Bag.jpg"
import shoeImage from "../../../images/Shoes.jpg"
import mobileImage from "../../../images/mobile.jpg"
import ledTvImage from "../../../images/LedTv.jpg"


const Home = () => {
  const [input, setInput] = useState('')
  const searchText = (text) => {
    setInput(text)
  }

  let productData = [
    {
      id: "1232120",
      title: "Digital Echo Dot 4th Gen Alexa Built-in Smart",
      price: 89.53,
      rating: 5,
      image: speakerImage,

    },
    {
      id: "1232121",
      title: "Digital Brand-Eono PC Gaming Headphones Surround Sound with Boom mic,stereo Sound wired Over Ear Headphones ",
      price: 25.96,
      rating: 4,
      image: { headfoneImage },
    },
    {
      id: "1232122",
      title: "Digital Brand-Solimo Laptop Backpack for 15.6-inch Laptops (27 litres,Black)",
      price: 11.96,
      rating: 4,
      image: bagImage,
    },
    {
      id: "1232123",
      title: "Digital Brand - Symactive mens walking Shoe",
      price: 15.25,
      rating: 3,
      image: shoeImage,
    },
    {
      id: "1232124",
      title: "(Emerald Forest,8GB RAM 128gb Storage)",
      price: 325.96,
      rating: 5,
      image: mobileImage,
    },
    {
      id: "1232125",
      title: "The Rudest Book Ever : Powerful Perspectives to Free Your Mind",
      price: 13.29,
      rating: 5,
      image: ledTvImage,
    }
  ]

  let filterProductData = productData.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase()),
  )

  console.log("==========================input====================================", filterProductData)
  
  return (
    <>
      <Header searchText={searchText}></Header>
      <div className="home">
        <img
          className="home_image"
          alt="Electronics under 1999"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
        />

        {/* Product Component  */}
        <div className="home_row">

          <Product
            id="1232120"
            title="Digital Echo Dot 4th Gen Alexa Built-in Smart"
            price={89.53}
            rating={5}
            image={speakerImage}
          ></Product>

          <Product
            id="1232121"
            title="Digital Brand-Eono PC Gaming Headphones Surround Sound with Boom mic,stereo Sound wired Over Ear Headphones "
            price={25.96}
            rating={4}
            image={headfoneImage}
          ></Product>
          

        </div>
        <div className="home_row">

          <Product
            id="1232122"
            title="Digital Brand-Solimo Laptop Backpack for 15.6-inch Laptops (27 litres,Black)"
            price={11.96}
            rating={4}
            image={bagImage}
          ></Product>

          <Product
            id="1232123"
            title="Digital Brand - Symactive mens walking Shoe"
            price={15.25}
            rating={3}
            image={shoeImage}
          ></Product>

          <Product
            id="1232124" 
            title="(Emerald Forest,8GB RAM 128gb Storage)"
            price={325.96}
            rating={5}
            image={mobileImage}
          ></Product>


        </div>

        <div className="home_row">

          <Product
            id="1232125"
            title="The Rudest Book Ever : Powerful Perspectives to Free Your Mind"
            price={13.29}
            rating={5}
            image={ledTvImage}
          ></Product>
        </div>

      </div>
    </>
  )
}

export default Home