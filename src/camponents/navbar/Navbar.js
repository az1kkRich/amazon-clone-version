import React, { Component } from "react";
import './navbar.css'
import {  Link  } from "react-router-dom";
import { CartContex } from "../CartContex";

class Navbar extends Component {

	static contextType = CartContex;

	constructor(props) {
		super(props);
		this.state= {  }
	}
	state = {}
	render() {
		let {item, size, increment} = this.context;
		return (
			<>
				<div className="navbar_component" id="header">
					<div className="col-20">
						<Link to='/'>
							<div className="navbar_logo"></div>
						</Link>
						<div className="navbar_locator">
							<div className="navbar_locationimg"></div>
							<div className="del">
								<p className="deliver">Deliver to </p>
								<div className="navbar_location">Uzbekistan</div>
							</div>
						</div>
						

					</div>
					<div className="col-50">
							<div className="navbar_searchcomp">
								<div className="d-flex">
									<select className="dropdown">
										<option value="all">All</option>
										<option value="dress">Kiyimlar</option>
										<option value="tools">Uy Jihozlari</option>
										<option value="phones">Gadjetlar</option>
										<option value="foods">Taomlar</option>
										<option value="foods">Uy ro'zg'or</option>
									</select>
								</div>
								<div className="">
									<input type="text" className="navbar_searchbox" />
								</div>
								<div className="search_icondiv">
									<div className="search_icon"></div>
								</div>
							</div>
						</div>

					<div className="col-30">
						<div className="d-right">

							<div className="nav_text nav_signin">
								<div style={{ fontSize: '12px' }}>Hello, Sign in</div>
								<div style={{ fontWeight: 'bold', fontSize: '14px' }}>Accaunt & List</div>
							</div>
							<div className="nav_text nav_return">
								<div style={{ fontSize: '12px' }}>Return</div>
								<div style={{ fontWeight: 'bold', fontSize: '14px' }}>& Orders</div>
							</div>
							<div className="nav_text nav_cart">
								<div className="cart_img"  > </div>
								<Link to='/cart'>
									<div className="cart_number">{size}</div>
									<div className="navcart_text">Cart</div>
								</Link>
							</div>
						</div>
					</div>



				</div>
				<Link to='/display' style={{textDecoration:'none'}}>
					<div className="nav_footer">
						<div className="chiziqs">
							<div className="chiziq"></div>
							<div className="chiziq"></div>
							<div className="chiziq"></div>
						</div>

						<a href="/" className="navfoot_text1"> All</a>
						<a href="/" className="navfoot_text"> Best Seller</a>
						<a href="/" className="navfoot_text"> Customer Service</a>
						<a href="/" className="navfoot_text"> Registry</a>
						<a href="/" className="navfoot_text"> Gift Cards</a>
						<a href="/" className="navfoot_text"> Sell</a>
						<a href="/" className="navfoot_text"> Shoes</a>
						<a href="/" className="navfoot_text"> Mobile</a>
						<a href="/" className="navfoot_text"> Prime</a>
						<a href="/" className="navfoot_text"> Home & Kitchen</a>

					</div>
				</Link>

			</>

		);
	}
}

export default Navbar;