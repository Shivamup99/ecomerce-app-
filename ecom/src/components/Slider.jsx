import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import './style/Slider.css'
const Slider = () => {
    const data = [
        {
          image: "https://www.visitamishcountry.com/sites/default/files/styles/hero_image/public/images/clothing-fashion-hero.jpg?itok=ufszydVI",
          caption: "Girls Fashion"
        },
        {
          image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_506481516_200011512000928031_324666.jpg",
          caption: "Boys Fashion"
        },
        {
          image: "https://www.thefashionisto.com/wp-content/uploads/2015/10/How-to-Layer-Clothes-2015-Men-Banana-Republic.jpg",
          caption: "Casual Looks"
        },
        {
          image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/Mm-Reflecting-the-Times.jpeg",
          caption: "Looks Wise"
        },
        {
          image: "https://assets.gqindia.com/photos/60deef427829f66368dd36dd/master/pass/TRENDS3006_HP2.jpg",
          caption: "Styles"
        },
        {
          image: "https://cdn-afllh.nitrocdn.com/PwKttzWmqrxeptmNTeKNfywizeaFnrcW/assets/static/optimized/rev-1aacf3c/app/uploads/2020/07/Best-eCommerce-websites-for-baby-clothes.jpg",
          caption: "Kids Outfit"
        },
        {
            image: "https://i.pinimg.com/originals/94/e9/c8/94e9c89a429eabf970b251e9ef628aab.jpg",
            caption: "Shoes"
          },
          {
            image: "https://media1.popsugar-assets.com/files/thumbor/KNGW223viHn6lswz9K4LnmdsAuM/0x181:1400x1581/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/09/26/881/n/1922564/5f91579e5d8d1b10b20b07.86726450_/i/Best-Cheap-Shoes-Women.jpg",
            caption: "Girls Shoes"
          },
          {
            image: "https://i.pinimg.com/originals/11/1c/84/111c840193679d508e17017b218e7825.png",
            caption: "Best Collections"
          },
          {
            image: "https://www.dmarge.com/wp-content/uploads/2021/04/best-mens-gym-clothing-brands-quince-920x614.jpg",
            caption: "Zym Collections"
          },
          {
            image: "https://assets.teenvogue.com/photos/55ccea3a09459990134a7655/master/pass/kendall-jenner-workout-style-00.jpg",
            caption: "Zym Outfit"
          },
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      const slideImage ={
          objectFit:'cover',
          width:'100%',
          backgroundPosition: '50% 50%',
          overflow: 'hidden'
      }
  return (
    <div className='slider'>
    <div style={{
      padding: "0 20px"
    }}>
      <Carousel
        data={data}
        time={2000}
        width='100%'
        height="400px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
         automatic={true}
        // dots={true}
        pauseIconColor="green"
        pauseIconSize='40px'
        // slideBackgroundColor="darkgrey"
        slideImageFit={slideImage}
        
        thumbnails={true}
        thumbnailWidth="80px"
        className='carsoule'
        style={{
         margin:'30px auto'
        }}
      />
    </div>
  </div>
  )
}

export default Slider