import React from "react";
import Search from "./Search";
import RedLogo from "../../assets/Logo.png";
import searchIcon from "../../assets/search.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="bg-slate-100 shadow-md">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
				<Link to="/">
					<img className="h-10 redLogo" src={RedLogo} alt="RedLogo" />
				</Link>
				<div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
					<Search />

					<img
						className="inline h-4 cursor-pointer"
						src={searchIcon}
						alt="Search"
					/>
				</div>
			</div>
		</nav>
	);
}
