import React from "react";
import '../Home/Home.css'
// import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
const items = [
  {
    key: '1',
    title: 'Rau củ quả ',
    content: 'TƯƠI NGON MỖI NGÀY',
    button: 'XEM NGAY',
    source: 'https://hstatic.net/349/1000150349/1000203344/slideshow_1.jpg?v=28'
  },
  {
    key: '2',
    title: 'Thực phẩm sạch',
    content: 'ĐẢM BẢO SỨC KHOẺ',
    button: 'XEM NGAY',
    source: 'https://hstatic.net/349/1000150349/1000203344/slideshow_2.jpg?v=28'
  },
  {
    key: '3',
    title: 'Rau củ quả ',
    content: 'Tháng vàng ưu đãi',
    button: 'TIẾT KIỆM ĐẾN 20%',
    source: 'https://hstatic.net/349/1000150349/1000203344/slideshow_3.jpg?v=28'
  },
]
function Home() {

  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hstatic.net/349/1000150349/1000203344/slideshow_1.jpg?v=28"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hstatic.net/349/1000150349/1000203344/slideshow_2.jpg?v=28"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hstatic.net/349/1000150349/1000203344/slideshow_3.jpg?v=28"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );

}

export default Home