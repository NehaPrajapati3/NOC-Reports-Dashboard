import React, { useState } from "react";
import './sidebar.css'
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaMountainSun } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { BiSolidUser } from "react-icons/bi";
import {  Link, useNavigate } from "react-router-dom";
import { PiSailboatFill } from "react-icons/pi";
import { MdDiamond } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdPower } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";






const Sidebar = ()=>{
// const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleDropmenu, setIsToggleDropmenu] = useState(false)

const isOpenDropmenu = (index)=>{
  setActiveTab(index);
  setIsToggleDropmenu(!isToggleDropmenu)
}
  // const gotodashboard = ()=>{
  //   navigate('/dashboard');
  // }
   
    return (
      <>
        <div className="sidebar-section">
          <div className="search-bar-box">
            <div className="side-searchbar">
              <div className="side-search-icon">
                <IoMdSearch />
              </div>
              <input type="text" placeholder="Search Menu..." />
            </div>
          </div>
          <ul>
            <li>
              <Link to={"/dashboard"}>
                <Button>
                  <span className="side-icons">
                    <MdDashboard />
                  </span>
                  Dashboard
                  <span className="arrow">
                    <IoIosArrowForward />
                  </span>
                </Button>
              </Link>
            </li>
            <h2 className="text-xl font-semibold m-2 text-amber-50">
              Report Section
            </h2>
            <li>
              <Button
                className={`${activeTab === 1 ? "active" : ""}`}
                onClick={() => isOpenDropmenu(1)}
              >
                <span className="side-icons">
                  <MdPower className="text-yellow-400 text-2xl" />
                </span>
                Power Failure Report
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
              <div
                className={`dropmenuwraper  ${activeTab === 1 && isToggleDropmenu === true ? "colapse" : "colapsed"}`}
              >
                <ul className="dropmenu">
                  <li>
                    <Link to="/allorder">Report #1</Link>
                  </li>
                  <li>
                    <Link to="#">Report #2</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Button
                className={`${activeTab === 2 ? "active" : ""}`}
                onClick={() => isOpenDropmenu(2)}
              >
                <span className="side-icons">
                  <MdAssessment className="text-blue-400 text-2xl" />
                </span>
                PAN India Report Section
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
              <div
                className={`dropmenuwraper  ${activeTab === 2 && isToggleDropmenu === true ? "colapse" : "colapsed"}`}
              >
                <ul className="dropmenu">
                  <li>
                    <Link to="/category">Cluster Wise</Link>
                  </li>
                  <li>
                    <Link to="/subCategory">Vendor Wise</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Button
                className={`${activeTab === 3 ? "active" : ""}`}
                onClick={() => isOpenDropmenu(3)}
              >
                <span className="side-icons">
                  <MdNotificationsActive className="text-red-500 text-2xl" />
                </span>
                Alarm Report Section
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
              <div
                className={`dropmenuwraper  ${activeTab === 3 && isToggleDropmenu === true ? "colapse" : "colapsed"}`}
              >
                <ul className="dropmenu">
                  <li>
                    <Link to="/addItem">DU Low Voltage</Link>
                  </li>
                  <li>
                    <Link to="/itemList">RU Low Voltage</Link>
                  </li>
                  <li>
                    <Link to="/hiddenProductList">Fire & Smoke</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
}
export default Sidebar;