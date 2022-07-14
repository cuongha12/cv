import React from 'react'
import path from '../routes/path'
import CsLink from './Cslink'
import { Col, Row } from 'antd';
import { PhoneOutlined, SearchOutlined } from '@ant-design/icons';
import '../css/Header.css'

function Header() {
  
  return (
    <div className='headers'>
      {/* Header */}

      <header className='header bkg'>
        <div className='container'>
          <div className='row'>
            <Row>
              <Col span={8}>
                <Col span={24}>
                  <h1>
                    <a href='/'>
                      <img src="https://hstatic.net/349/1000150349/1000203344/logo.png?v=28" alt="default-fresh-food" className="img-responsive logoimg" />
                    </a>
                  </h1>
                </Col>
              </Col>
              <Col span={16}>
                <div className='cart-info'>
                  <a className='cart-link' >
                    <span className="icon-cart"></span>
                    <div className="cart-number">
                      0
                    </div>
                  </a>
                </div>
                <div className='navholder'>
                  <nav className='subnav'>
                    <ul>
                      <li>
                        <a>
                          <PhoneOutlined />
                          1900.636.099
                        </a>
                      </li>
                      <li><a className="reg">ĐĂNG KÝ</a></li>
                      <li><a className="log" >Đăng nhập</a></li>
                    </ul>
                  </nav>
                  <div className='header_line'>
                    <p>Miễn phí vận chuyển<span className="mar-l5">ĐƠN HÀNG TRÊN 900K</span></p>
                  </div>
                </div>

              </Col>
            </Row>
          </div>
        </div>
      </header>

      {/* Menu */}
      <nav className="navbar-main navbar navbar-default cl-pri">
        <div className='container'>
          <div className='row'>
            <div className='navbar-header'></div>
            <Row>
              <Col>
                <div className='navbar-collapse collapse'>
                  <ul className='nav navbar-nav clearfix sm'>
                    <li><CsLink to={path.HOME}>TRANG CHỦ</CsLink></li>
                    <li className='dropdown'>
                      <CsLink to={path.SHOP}>
                        <span>Sản phẩm</span>
                        <span className="sub-arrow">...</span>
                      </CsLink>
                      <ul className='dropdown-menu sm-nowrap'>
                        <li>
                          <a className='has-submenu'>Rau củ quả <span className="sub-arrow">...</span></a>
                          <ul className='dropdown-menus sm-nowrap'>
                            <li>
                              <a href="" >Rau ăn củ</a>
                            </li>
                            <li>
                              <a href="" >Rau ăn quả</a>
                            </li>
                            <li>
                              <a href="" >Rau ăn quả</a>
                            </li>
                            <li>
                              <a href="">Trái cây</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="has-submenu">Thực phẩm tươi sống<span className="sub-arrow">...</span></a>
                          <ul className='dropdown-menus sm-nowrap'>
                            <li>
                              <a href="" >Thịt các loại</a>
                            </li>
                            <li>
                              <a href="" >Hải sản</a>
                            </li>
                            <li>
                              <a href="" >Trứng</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="has-submenu">Thực phẩm khô<span className="sub-arrow">...</span></a>
                          <ul className='dropdown-menus sm-nowrap'>
                            <li>
                              <a href="" >Thực phẩm chay</a>
                            </li>
                            <li>
                              <a href="" >Bánh mì - Bánh ngọt</a>
                            </li>
                            <li>
                              <a href="" >Gạo - Ngũ cốc</a>
                            </li>
                            <li>
                              <a href="" >Thực phẩm ăn liền</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="has-submenu">Thực phẩm bổ dưỡng</a>
                        </li>
                        <li>
                          <a className="has-submenu">Thực phẩm chế biến</a>
                        </li>
                      </ul>
                    </li>
                    <li><CsLink to={path.BLOG}>BLOG</CsLink></li>
                    <li><CsLink to={path.INTRODUCE}>GIỚI THIỆU</CsLink></li>
                    <li><CsLink to={path.CONTACT}>LIÊN HỆ</CsLink></li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className='hidden-xs pull-right right-menu'>
                  <ul className='nav navbar-nav pull-right sm'>
                    <li className='col-md-12'>
                      <div className='search-bar'>
                        <div>
                          <form action=''>
                            <SearchOutlined />
                            <input type="text" name="q" placeholder="Tìm kiếm..." autoComplete='off' />
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header