import React from "react";
import '../Home/Home.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const items = [
  {
    key: '1',
    title: 'Rau củ quả ',
    content: 'TƯƠI NGON MỖI NGÀY',
    button:'XEM NGAY',
    source:'https://hstatic.net/349/1000150349/1000203344/slideshow_1.jpg?v=28'
  },
  {
    key: '2',
    title: 'Thực phẩm sạch',
    content: 'ĐẢM BẢO SỨC KHOẺ',
    button:'XEM NGAY',
    source:'https://hstatic.net/349/1000150349/1000203344/slideshow_2.jpg?v=28'
  },
  {
    key: '3',
    title: 'Rau củ quả ',
    content: 'Tháng vàng ưu đãi',
    button:'TIẾT KIỆM ĐẾN 20%',
    source:'https://hstatic.net/349/1000150349/1000203344/slideshow_3.jpg?v=28'
  },
]
function Home() {

  return (

    <Carousel className="banner-carousel">
     {
      items.map((e)=>(
        <div key={e.key} className='banner'>
          <div className="container ">
            <h2>{e.title}</h2>
            <h3>{e.content}</h3>
            <a>{e.button}</a>
          </div>
        </div>
      ))
     }
    </Carousel>

  );

}

export default Home