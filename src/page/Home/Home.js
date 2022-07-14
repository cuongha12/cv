import React,{useState} from "react";
import '../Home/Home.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

function Home() {
  const [indexBanner, setIndexBanner] = useState(0);
  return (
    <>
      <Carousel  beforeChange={(c, t)=>{
					setIndexBanner(t)
				}} >
        <div>
          <div className="banner1">
            <div className="container">
              <div className="hrv-banner-caption" >
                  <h2 className={indexBanner===0?"text-animation" : ""} >Rau củ quả</h2>
                  <h3 className={indexBanner===0?"title-animation" : ""} >TƯƠI NGON MỖI NGÀY</h3>
                  <a className={indexBanner===0?"button-animation" : ""}>XEM NGAY</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="banner2">
            <div className=" container">
              <div className="hrv-banner-caption">
                  <h2  className={indexBanner===1?"hrv-title" : ""}>Thực phẩm sạch</h2>
                  <h3 className={indexBanner===1?"hrv-text" : ""}>ĐẢM BẢO SỨC KHOẺ</h3>
                  <a className={indexBanner===1?"hrv-button" : ""}>XEM NGAY</a>
                </div>
              </div>
            </div>
          </div>
        <div>
          <div className="banner3">
            <div className=" container">
              <div className="hrv-banner-caption ">
                  <h2 className={indexBanner===2?'texts-animation' : ''}>Tháng vàng ưu đãi</h2>
                  <h3  className={indexBanner===2?"titles-animation" : ""}>TIẾT KIỆM ĐẾN 20%</h3>
                  <a className={indexBanner===2?"buttons-animation" : ""}>XEM NGAY</a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>

  );

}

export default Home