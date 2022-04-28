import Layout from "../components/layout";
import SideButton from "../components/SideButton";
import NewsSection from "../components/NewsSection";
import Section from "../components/Section";
import SeoTags from "../components/SeoTags";
import Link from "next/link";
import axios from "axios";
import Typist from 'react-typist';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { useState, useEffect, useContext } from "react";
import GlobalState from "../GlobalState";

import * as Scroll from 'react-scroll';
import ClientsPopup from "../components/ClientsPopup";


let scroll = Scroll.animateScroll;

export default function Home(props) {
  const { triggerScroll } = useContext(GlobalState);
  const menuItems = props.homeData.fixed_titles;
  const socialMedia = props.homeData.social_media;
  const footerLogos = props.homeData.footer_logos;
  const footerContactIcons = props.homeData.footer_contact_icons;
  const serviceTitles = props.homeData.services_titles;
  const industriesTitles = props.homeData.industries_titles;

  const homeSettings = props.homeData.page_items.home_settings;
  const homeProcess = props.homeData.page_items.home_process_list;
  const clientsList = props.homeData.page_items.clients_list;
  const industries = props.homeData.page_items.home_industries;
  const news = props.homeData.page_items.home_news;
  const tipsList = props.homeData.page_items.home_tips_list;

  const [loading, setLoading] = useState(true);
  const [youtubePopup, setYoutubePopup] = useState(null);
  const [clientPopup, setClientPopup] = useState(null);

  SwiperCore.use([Autoplay])

  useEffect(() => {
    setLoading(false);
    triggerScroll();
  }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps


  function scrollTop() {
    const element = document.getElementById("home-section-1")
    scroll.scrollTo(element.offsetTop - 81)
  }

  function clientsPopupClick(clientList) {
    setClientPopup(clientList);
  }

  return loading ? null : (
    <Layout activePage="home" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

      <SeoTags
        title={props.homeData.page_items.seo.title}
        description={props.homeData.page_items.seo.description}
        image={props.homeData.page_items.seo.image}
      />

      <SideButton
        title={menuItems['book-a-consultation']}
      />

      <>
        <div className="position-relative">
          <div className="container">
            <div className="think-blue">
              <img src="../img/images/header-logo.svg" alt="logo" className="home-logo" />
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 953.44 363.66">
                <g id="THINK_BLUE-02" data-name="THINK BLUE-02" className="cls-1">
                  <path
                    mask="url(#m-b)"
                    id="blue-b" className="cls-2" d="M608.73,103.94c2.7-1.74,5.59-3.66,8.28-5.4a1.58,1.58,0,0,0,.58-1.54,2.26,2.26,0,0,0-1.35-1c-4.43-.19-7.32,2.12-9.44,6-4.24,4.82-5.4,11-7.52,16.77-.58,1.54-1.35,3.08-3.08,2.5-1.74-.38-3.66-1-4.05-3.28-.58-3.46,0-6.74.39-10a395,395,0,0,1,12-51.26C608,45,611.81,33.21,615.66,21.45a21.81,21.81,0,0,1,4.63-8.86,3.64,3.64,0,0,1,5-.58,3.39,3.39,0,0,1,1.16,4c-2.7,6.16-5.4,12.52-7.9,18.69-7.71,18.89-14.27,38-18.5,58a38.21,38.21,0,0,0-.77,4.63,6.28,6.28,0,0,0,.57,1.73c2.51,0,3.47-2.31,5-3.66a20.35,20.35,0,0,1,7.14-4c3.08-1,6.55-1.35,8.67,1.16,2.89,3.27,5.59,2.7,9.06,1.73,5.59-1.73,11.18-3.08,17-4.62a12.38,12.38,0,0,1,4.62,0c.39,0,1,.77,1.16,1.15a1.51,1.51,0,0,1-.39,1.55,22.36,22.36,0,0,1-5,1.92c-4.43,1.16-8.86,2.32-13.49,3.47-5.4,1.35-10.6,3.09-14.84,6.94a14.6,14.6,0,0,1-4.82,2.51c-3.08.57-4.62-.78-5.2-3.28Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-t)"
                    id="think-t" className="cls-3" d="M73.52,241.74c5.4-8.29,10.79-16.57,16-24.86a42,42,0,0,1,6.56-7.71c.77-.77,1.73-2.31,2.89-.77.77,1,.19,2.31-.39,3.47-4.24,6.36-8.67,12.72-12.91,19.08-5.2,8.09-9.83,16.38-14.46,24.67-3.66,6.55-5.4,13.68-6.74,21-3.09,16.58-6.17,33.15-8.87,49.92-1.54,10-3.66,19.85-6,29.68-.77,2.7-1.35,5.4-4.24,6.55-1.74.58-4-2.5-5-6.93-1.93-9.25-1.55-17.73.77-29.1,3.66-18.89,10-36.81,17.34-54.35a65.24,65.24,0,0,0,3.67-13.3c3.46-20.82,6.55-41.82,9.82-62.64,1.35-8.87,3.09-17.54,4.63-26.21a3.66,3.66,0,0,0-.39-2.51c-1-1.34-2.12-.57-3.27-.19-8.87,3.66-17.54,7.33-26.4,11.18-12.72,5.59-25.25,11.37-38,17a18.71,18.71,0,0,1-4.24,1.54c-1.54.39-2.89-.38-3.85-1.93a2.82,2.82,0,0,1,.76-3.92,1.06,1.06,0,0,1,.2-.12,57,57,0,0,1,13.3-6.56c18.89-7.32,37.78-14.84,56.86-22,5.2-1.92,6.93-4.81,7.7-10,1.16-10,3.28-20,5.2-29.87.2-1,.39-1.74.58-2.7a2.65,2.65,0,0,1,2.7-1.93,2.53,2.53,0,0,1,2.32,2.51c.19,5.78.38,11.75-.78,17.53-1,5-1.73,10.22-2.5,15.42A2.13,2.13,0,0,0,89.72,156c11-4,22-8.29,32.76-12.34,3.09-1.16,6.36-2.31,9.64-3.28a11.4,11.4,0,0,1,4.43.2c.77,0,1,.77.77,1.35,0,.19-.19.77-.38.77a37.48,37.48,0,0,1-4.05,1.92c-12.91,4.82-26,9.45-38.93,14.27-8.48,3.08-9.25,4-10.79,12.91-3.28,19.27-6.55,38.74-10,58-.58,3.28-1.74,6.55-1.74,10C70.63,242.13,71,243.28,73.52,241.74Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-t2)"
                    id="think-t" className="cls-3" d="M73.52,241.74c5.4-8.29,10.79-16.57,16-24.86a42,42,0,0,1,6.56-7.71c.77-.77,1.73-2.31,2.89-.77.77,1,.19,2.31-.39,3.47-4.24,6.36-8.67,12.72-12.91,19.08-5.2,8.09-9.83,16.38-14.46,24.67-3.66,6.55-5.4,13.68-6.74,21-3.09,16.58-6.17,33.15-8.87,49.92-1.54,10-3.66,19.85-6,29.68-.77,2.7-1.35,5.4-4.24,6.55-1.74.58-4-2.5-5-6.93-1.93-9.25-1.55-17.73.77-29.1,3.66-18.89,10-36.81,17.34-54.35a65.24,65.24,0,0,0,3.67-13.3c3.46-20.82,6.55-41.82,9.82-62.64,1.35-8.87,3.09-17.54,4.63-26.21a3.66,3.66,0,0,0-.39-2.51c-1-1.34-2.12-.57-3.27-.19-8.87,3.66-17.54,7.33-26.4,11.18-12.72,5.59-25.25,11.37-38,17a18.71,18.71,0,0,1-4.24,1.54c-1.54.39-2.89-.38-3.85-1.93a2.82,2.82,0,0,1,.76-3.92,1.06,1.06,0,0,1,.2-.12,57,57,0,0,1,13.3-6.56c18.89-7.32,37.78-14.84,56.86-22,5.2-1.92,6.93-4.81,7.7-10,1.16-10,3.28-20,5.2-29.87.2-1,.39-1.74.58-2.7a2.65,2.65,0,0,1,2.7-1.93,2.53,2.53,0,0,1,2.32,2.51c.19,5.78.38,11.75-.78,17.53-1,5-1.73,10.22-2.5,15.42A2.13,2.13,0,0,0,89.72,156c11-4,22-8.29,32.76-12.34,3.09-1.16,6.36-2.31,9.64-3.28a11.4,11.4,0,0,1,4.43.2c.77,0,1,.77.77,1.35,0,.19-.19.77-.38.77a37.48,37.48,0,0,1-4.05,1.92c-12.91,4.82-26,9.45-38.93,14.27-8.48,3.08-9.25,4-10.79,12.91-3.28,19.27-6.55,38.74-10,58-.58,3.28-1.74,6.55-1.74,10C70.63,242.13,71,243.28,73.52,241.74Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-k)"
                    id="think-k" className="cls-4" d="M409.06,136.9c2.51.19,3.66-1.93,5-3.47a42.84,42.84,0,0,1,9.64-7.13c1.54-1,2.89-.2,4.05,1.15,1,1.35,1.34,2.89.19,4.24-2.32,2.32-5.4,4.05-7.33,6.94,3.86,1.35,3.86,1.35,5.79.77,14.26-3.85,28.52-7.51,42.78-11.37,2.7-.77,5.59-2.7,8.29.2-1.16,3.08-4.43,3.08-6.94,3.66-13.49,4-27.17,7.9-40.67,11.56-7.9,2.12-15.8,5.2-24.09,6.17-1.73.19-2.31,1.73-2.89,3.27-1.35,4.63-2.7,9.45-4.24,14.07-.19.77-1.15,1.35-1.92,1.74s-2.51-1.54-2.12-2.51c.77-3.27,1.34-6.55,2.31-9.83,8.67-26.6,17.54-53,26.4-79.6A41.7,41.7,0,0,1,426.21,70c1.73-2.89,3.66-3.66,6-2.31,2.12,1.35,2.32,2.7,1.16,5.59-2.89,6.74-6.17,13.3-8.86,20.23-5.2,13.11-10.22,26.4-15.23,39.51C408.68,134.39,408.1,135.74,409.06,136.9Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-l)"
                    id="blue-l" className="cls-5" d="M723.79,72.91c1.15,1.54.77,2.89,0,4.24-1.93,2.89-3.86,5.59-5.79,8.29-7.32,10.4-16,19.46-25,28.33a30.62,30.62,0,0,1-10.79,6.94c-3.47,1.15-7.14-1-7.33-4.63-.38-5.2-.38-10.4,1.16-15.42,5-16.38,9.83-32.95,14.65-49.33,4-14.07,7.89-28.33,11.94-42.6A48.6,48.6,0,0,1,704.9,1.8C705.48.06,707-.13,708.75.06a3.13,3.13,0,0,1,2.89,3.08,17.77,17.77,0,0,1-.77,6.36c-2.31,9.83-6,19.47-9.06,28.91-6.16,18.89-12.72,37.78-18.88,56.86-1.35,4.43-2.7,8.86-3.66,13.3a16.88,16.88,0,0,0-.2,5.4c.2,1.35,1.16,2.31,2.51,1.73a31.71,31.71,0,0,0,5.59-3.08c8.48-5.78,14.45-14.07,21-21.78,3.28-4,6.36-8.29,9.64-12.33C719.35,76.19,721.09,73.68,723.79,72.91Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-h)"
                    id="think-h" className="cls-6" d="M134.42,202.23c2.12.2,3.09-1.54,4.63-2.7,2.31-1.54,4.43-3.27,6.74-4.82,2.51-1.54,5.4-1.73,7.71.39,4.24,3.66,8.48,2.5,12.92.38l13.3-6.36a1.44,1.44,0,0,1,2,.46,1.57,1.57,0,0,1,.15.32,2,2,0,0,1-.39,1.73c-6,4.82-12.14,9.44-20.43,9.64-3.47.19-6.74.19-9.63-2.32-1.74-1.54-3.47-.77-5,.39-4.82,3.66-9.83,7.51-13.88,11.95-1,1.15-2.31,2.31-4.05,1.15a3.66,3.66,0,0,1-1.35-4c.58-4.24,1.16-8.48,2.12-12.72,4.82-20.82,8.68-42,14.65-62.64,1.35-4.43,2.31-9.06,5.59-12.53a3.32,3.32,0,0,1,3.08-1.54c1.93.19,3.67,2.12,3.28,3.66a40.87,40.87,0,0,1-1.54,4.44c-7.33,17.34-11.76,35.46-16.38,53.57-1.74,6.56-2.9,13.11-4.24,19.66A5,5,0,0,1,134.42,202.23Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-u)"
                    id="blue-u" className="cls-6" d="M761,70.41c2.31.57,3.86-1.16,5.2-2.51,6.56-5.59,13.5-10.79,19.28-17.15,1.93-1.93,3.85-4,6.36-5.2a3.11,3.11,0,0,1,4.82,3.08,12.28,12.28,0,0,1-.58,3.66c-.19,1.16-1,2.32-1.16,3.47-.77,4.24,1.54,6.36,5.78,5.59a84,84,0,0,0,22.55-7.71,94.71,94.71,0,0,1,10-4.62,1.37,1.37,0,0,1,1.81.7,1.41,1.41,0,0,1,.11.45,1.86,1.86,0,0,1-.38,1.74,6,6,0,0,1-2.12,1.73,197.32,197.32,0,0,1-25.06,11.57c-4.43,1.73-9.06,1.34-13.68,1a5.7,5.7,0,0,1-4.43-3.08,51,51,0,0,1-2.9-5.4c-2.5-.39-3.66,1.15-5,2.5-6.16,5.59-12.33,11.18-18.5,16.58a26.16,26.16,0,0,1-5.4,3.47,4.62,4.62,0,0,1-6.15-2.2,4.56,4.56,0,0,1-.4-2.62,23.16,23.16,0,0,1,1-3.47c1.93-6.17,5-11.76,8.29-17.35a12.23,12.23,0,0,1,3.86-3.85,3.65,3.65,0,0,1,5,.57c1.54,1.35,1.54,3.09-.2,4.82a40.08,40.08,0,0,0-8.48,12A1.88,1.88,0,0,0,761,70.41Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-n)"
                    id="think-n" className="cls-6" d="M293.81,166.2c3.47-2.51,6.74-5.2,10.41-7.71a31.1,31.1,0,0,1,5.59-3.1c2.5-1.15,4.62-.38,6.36,1.93,1.54,1.93,2.7,4.05,4.24,6.17,4.62,6,10,7.51,17,4.62A96.15,96.15,0,0,0,358,156.17c3.47-2.7,6.94-5,10.6-7.33a2.14,2.14,0,0,1,3,.2,2,2,0,0,1,.26.38c.58,1,0,1.73-.77,2.31-8.86,7.13-17.73,14.07-28.14,19.08-5.19,2.7-10.6,2.89-16.18,2.51-3.67-.2-6.17-2.7-8.68-5-1.35-1.16-2.31-2.89-3.47-4.24-3.66-4.24-4.43-4.24-8.86-.2-5.2,4.63-10.6,9.45-15.8,14.07a37.14,37.14,0,0,1-5.4,3.66,3.66,3.66,0,0,1-5.59-2.7,5.06,5.06,0,0,1-.19-1.73c1.35-8.67,4-16.58,10.79-22.74a2.83,2.83,0,0,1,1.54-.77,6.22,6.22,0,0,1,2.51.77,2.75,2.75,0,0,1,1.15,3.27,70.3,70.3,0,0,1-3.27,6.56C290.73,166.77,291.69,167,293.81,166.2Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-n-blue)"
                    id="blue-e" className="cls-6" d="M879.9,41.5c8.86-1,17-4.82,25.05-8.1a37.66,37.66,0,0,1,4.24-1.54c.39-.19,1.16.38,1.54.77a2.57,2.57,0,0,1,0,1.73,2,2,0,0,1-1.15,1.35c-10,5.4-20.43,9.83-32,10.41H873c-7.13-.38-10.41-6.74-6.36-13.1a17.24,17.24,0,0,1,6.55-6.36,6.43,6.43,0,0,1,6.94.19,7.53,7.53,0,0,1,2.7,8.09,25.73,25.73,0,0,1-1.74,3.28C880.47,39.18,879.32,39.76,879.9,41.5Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-i)"
                    id="think-i" className="cls-7" d="M210.36,189.13A19.7,19.7,0,0,1,215,176.41c.78-1.16,2.12-1,3.47-.58,1.54.58,2.89,1.73,2.51,3.47-.58,2.31-1.93,4.43-2.89,6.74-.39,1-1.35,2.31-.2,3.28,1,1,2.32.19,3.47,0,9.45-3.09,17.93-7.9,26.21-13.3,3.28-2.12,6-2.7,6.36-1.16.58,2.7-1.73,3.66-3.46,4.82-8.87,5.59-17.74,11-27.56,14.65a17.27,17.27,0,0,1-4.44,1.35C213.06,196.26,210.36,193.75,210.36,189.13Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-i2)"
                    id="think-dot" className="cls-8" d="M225.2,153.66c1.35-.19,3.47,1.74,3.66,3.47.19,3.28-3.08,8.68-6.55,10.22-1.35.58-4.24-1.16-4.05-2.7.77-4.24,2.51-8.1,6-10.79A1.69,1.69,0,0,1,225.2,153.66Z" transform="translate(0 0.82)" />
                  <path
                    mask="url(#m-dot)"
                    id="dot" className="cls-9" d="M946,37.84a3.35,3.35,0,0,1-2.31-2.7,5.68,5.68,0,0,1,4.43-6,3.39,3.39,0,0,1,3.28,1.16,3.23,3.23,0,0,1,.19,3.47C950.24,36.68,948.12,38.22,946,37.84Z" transform="translate(0 0.82)" />
                  <path
                    id="Path_266" data-name="Path 266" className="cls-10" d="M875.27,32.25c.19.38.58,1.15.39,1.35a2,2,0,0,1-1.35.77.62.62,0,0,1-.39-1.16A3,3,0,0,1,875.27,32.25Z" transform="translate(0 0.82)" />
                </g>
                <defs>
                  <mask id="m-dot">
                    <line id="mask-dot" className="cls-11 mask" x1="945.26" y1="38.31" x2="950.52" y2="30.4" />
                  </mask>
                  <mask id="m-n-blue">
                    <polyline id="mask-n-blue" className="cls-11 mask" points="872.12 40.7 875.15 39.05 877.7 37.4 879.09 35.96 880.72 33.7 880.72 31.73 879.73 29.9 878.14 29.13 875.7 28.79 873.27 29.63 871.66 31.74 869.6 34.13 868.56 36.74 868.26 38.85 869.04 41 870.56 42.89 872.52 44.07 877.22 44.07 880.43 44.07 886.12 43.72 888.85 42.8 894.71 40.67 902.31 37.57 910.73 33.45" />
                  </mask>
                  <mask id="m-u">
                    <polyline id="mask-u" className="cls-11 mask" points="768.77 51.65 764.22 55.65 760.52 61.85 757.83 67.13 755.98 72.65 754.95 76.46 754.95 78.91 757.12 79.72 760.96 75.73 762.76 73.69 765.34 71.46 768.32 69.52 773.26 65.68 779.9 59.69 784.01 56.41 786.59 54.19 789.8 50.57 791.89 49.06 793.91 48.31 795.1 49.26 795.1 52.59 793.74 54.91 792.2 56.98 790.65 59.05 790.88 61.19 794.52 63.3 797.63 64.52 803.27 64.01 807.97 62.82 820.61 58.27 828.44 54.31 835.07 50.53" />
                  </mask>
                  <mask id="m-l" >

                    <polyline id="mask-l" className="cls-11 mask" points="708.75 0.88 705.26 14.39 697.87 39.37 691.99 59.1 686.62 76.06 681.28 92.5 678.18 101.91 676.95 107.83 676.95 113.85 676.95 117.56 679.72 119.18 682.87 118.48 686.89 115.89 691.94 112.84 697.64 107.31 706.83 97.19 711.78 90.61 718.31 82.07 723.78 73.73" />
                  </mask>
                  <mask id="m-b">
                    <polyline id="mask-b" className="cls-11 mask" points="624.14 12.24 617.43 29.09 608.14 55.31 601.26 78.19 596 101.62 594.59 114.92 595.17 121.84 602.43 104.72 604.55 99.88 609.36 95.05 613.89 94.01 618.4 94.35 620.2 95.84 620.29 97.54 619.77 99.31 618.13 101.34 615.54 103.29 613.54 103.96 611.83 105.5 610.7 105.88 609.36 106.43 629.31 96.9 634.39 95.55 639.34 94.42 643.55 93.35 647.21 93.07 652.53 92.22" />

                  </mask>
                  <mask id="m-k">
                    <polyline id="mask-k" className="cls-11 mask" points="431.67 68.26 413.69 113.21 402.87 144.89 395.89 169.35 407.06 141.57 427.28 127.77 410.4 143.23 411.16 145.63 413.78 146.12 418.24 144.72 422.64 143.36 431.67 141.06 445.75 137.09 476 129.18" />
                  </mask>
                  <mask id="m-n">

                    <polyline id="mask-n" className="cls-11 mask" points="292.79 154.86 291.48 156.95 288.94 160.69 286.77 165.18 284.83 169.29 283.33 173.92 282.06 177.59 282.06 180.05 283.11 180.8 285.73 180.28 286.55 178.26 287.82 175.94 289.54 173.25 292.23 170.71 294.62 169.29 297.91 166.82 304.56 162.04 309.2 159.35 312.41 158.3 313.69 158.9 314.36 159.57 315.55 160.84 317.42 163.98 320.56 167.83 322.95 170.26 325.43 171.68 329.01 172.28 332.23 172.21 336.41 171.53 340.52 170.11 346.58 167.12 358.24 159.72 364.3 155.38 371.36 149.63" />
                  </mask>
                  <mask id="m-i2">
                    <line id="mask-i2" className="cls-11 mask" x1="218.25" y1="167.5" x2="228.86" y2="155.17" />
                  </mask>
                  <mask id="m-i">
                    <polyline id="mask-i" className="cls-11 mask" points="218.8 176.8 217.22 179.61 216.38 181.55 214.94 184.34 213.68 187.38 213.68 189.66 214.18 191.51 215.2 193.29 217.31 193.29 220.01 193.29 222.88 192.28 226.17 191.18 240.36 184.25 253.75 175.32" />
                  </mask>
                  <mask id="m-h">
                    <polyline id="mask-h" className="cls-11 mask" points="152.46 121.4 142.1 154.47 137.39 174.81 131.74 196.57 129.44 209.72 129.44 213.69 137.39 203.68 144.98 198.5 149 196.57 151.22 196.5 154.41 198.61 157.32 199.98 160.8 200.08 163.74 199.87 166.38 198.93 169.01 198.08 170.8 196.93 176.59 193.66 180.69 190.93 181.68 190.4" />
                  </mask>
                  <mask id="m-t2">
                    <path id="mask-t2" className="cls-11 mask" d="M2.41,193.75l17.38-7.56,33.74-13.85L77,163.53l36.51-14.35,20.64-7.3s2.45-.63,2.45-1.32" />
                  </mask>
                  <mask id="m-t">
                    <polyline id="mask-t" className="cls-11 mask" points="87.79 119.02 73.84 209.91 65.58 262.06 48.7 307.08 43.81 320.31 42.72 326.29 41.27 335.72 41.27 342.61 41.27 350.94 42.72 356.93 44.53 360.01 47.25 360.01 48.7 353.66 50.15 346.23 50.33 337.89 51.06 327.74 52.69 319.95 53.78 313.42 55.05 306.9 57.04 301.82 58.13 295.12 59.58 288.05 62.84 279.17 67.77 264.19 72.66 247.94 78.95 238.12 97.84 210.43" />
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
          <div className="ratio background-image">
            <video playsInline muted loop autoPlay>
              <source src={homeSettings.banner_video} type='video/mp4' />
            </video>
          </div>
          <div className="opacity-header"></div>
          <div className="section-1">
            <div className="container" >
              <div className="text-center" animate="">
                <Link href="/booking">
                  <a>
                    <button className="button bleu-ciel-button shadow">
                      {homeSettings.book_consultation_title}
                    </button>
                  </a>
                </Link>
                <div className="pt-lg-4 pt-3">
                  <img onClick={scrollTop} className="arrow-down" src="../img/images/header-arrow.svg" alt="video" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative pt-5" id="home-section-1">
          <div className="background-sections">
            <img src="../img/images/test1.svg" alt="" />
          </div>
          <div className="container py-5">
            <div className="row justify-content-center text-center ">
              <div className="col-lg-8" >
                <h2 className="pb-4 mb-0" >{homeSettings.what_we_do_title}</h2>
                <p className="home-paragraph mb-0">{homeSettings.what_we_do_text}</p>
              </div>
            </div>
          </div>

          <div className="container pt-5">
            <div className="row justify-content-center text-center ">
              <div className="col-lg-8 pb-4" >
                <h2 className="mb-0">{homeSettings.process_title}</h2>
              </div>
            </div>
            <div className="row justify-content-center ">
              {homeProcess ?
                homeProcess.map((process, index) =>
                  <div className="col-lg-4 col-md-6 col-12 pb-3 " style={index % 3 === 0 ? { transitionDelay: '0.6s' } : (index % 2 === 0 ? { transitionDelay: '1s' } : { transitionDelay: '0.8s' })} animate="" key={index}>
                    <div className="bg-color button blue-button-hover shadow py-3">
                      <div className="py-4">
                        <div style={{ textTransform: 'uppercase' }}>{process.title}</div>
                        <div className="justify-content-center d-flex">
                          <div className="hr-line"></div>
                        </div>
                      </div>
                      <div className="onhover-text">
                        <p className="mb-0 mx-lg-3"> {process.text}</p>
                      </div>
                    </div>
                  </div>
                )
                :
                null
              }
            </div>
          </div>
          {
            homeSettings ?
              !homeSettings.about_us_title && !homeSettings.about_us_button && !homeSettings.about_us_button ? null :
                <div className="container py-5">
                  <div className="row justify-content-center text-center ">
                    <div className="col-lg-8">
                      <h2 className="pb-4 mb-0">{homeSettings.about_us_title}</h2>
                      <p className="home-paragraph mb-0">{homeSettings.about_us_text}</p>
                      <div className="pt-4" >
                        {homeSettings.about_us_button ?
                          <Link href="/our-story">
                            <a>
                              <button className="button blue-button shadow">
                                {homeSettings.about_us_button}
                              </button>
                            </a>
                          </Link>
                          :
                          null
                        }
                      </div>
                    </div>
                  </div>
                </div>
              :
              null
          }
        </div>

        <div className="py-5">
          <div className="blue-background-section ">
            <div className="container py-5">
              <div className="">
                <Typist>
                  {homeSettings.animated_text}
                </Typist>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" >
          <div className="row justify-content-center  align-items-center pb-3" >
            <div className="col-lg-12">
              <div className="d-flex text-center justify-content-center">
                <h2 className="mb-0">{homeSettings.clients_title}</h2>
              </div>
            </div>
          </div>

          <Swiper
            pagination={true}
            autoplay={{ delay: 3000 }}
            modules={[Pagination]}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            slidesPerView={2}
            className="mySwiper-clients"
            breakpoints={{
              1199.98: {
                slidesPerView: 4.8,
                spaceBetween: 15
              },

              991.98: {
                slidesPerView: 3.5,
              },

              767.98: {
                slidesPerView: 3.5,
              },
              575.98: {
                slidesPerView: 2.3,
              },
            }}
          >
            {
              clientsList ?
                clientsList.map((clientList, index) =>
                  <SwiperSlide key={index} onClick={() => clientsPopupClick(clientList)}>
                    <div  >
                      <div className="brand-logo-section shadow position-relative">
                        <div className="ratio ratio-1x1 logo-clients">
                          <img src={clientList.full_path_logo} alt="brand-logo" />
                        </div>
                        <div className="overlay"></div>
                        <div className="text-on-overlay text-center">
                          <h2 className="mb-3">{clientList.title}</h2>
                          <p className="mb-0">{clientList.info}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
                :
                null
            }

          </Swiper>
          <div className="pt-5 text-center">
            <Link href="/industries#clients">

              <a>
                <button className="button blue-button shadow">
                  {homeSettings.view_all}
                </button>
              </a>
            </Link>
          </div>

        </div>

        {
          homeSettings ?
            industries.length === 0 ? null :
              <div className="container pt-5">
                <div className="row justify-content-center text-center ">
                  <div className="col-lg-8 pb-4" >
                    <h2 className="mb-0">{homeSettings.industries_title}</h2>
                  </div>
                </div>
                <div className="row justify-content-center ">
                  {industries ?
                    industries.map((industry, index) =>
                      <div className="col-lg-4 col-md-6 col-12 pb-5" style={index % 3 === 0 ? { transitionDelay: '0.6s' } : (index % 2 === 0 ? { transitionDelay: '1s' } : { transitionDelay: '0.8s' })} animate="" key={index}>
                        <Link href={"/industries/" + industry.slug}>
                          <a>
                            <div className="button blue-ciel-button shadow">
                              {industry.title}
                            </div>
                          </a>
                        </Link>
                      </div>
                    )
                    :
                    null
                  }
                </div>
              </div>
            :
            null
        }

        {
          homeSettings ?
            news.length === 0 ? null :
              <div className="container pt-5">
                <div className="row justify-content-center text-center ">
                  <div className="col-lg-8 pb-4">
                    <h2 className="mb-0">{homeSettings.news_title}</h2>
                  </div>
                </div>
                <Swiper
                  className="news"
                  modules={[Pagination]}
                  spaceBetween={25}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  slidesPerView={1}
                  centeredSlides={true}
                  breakpoints={{
                    1199.98: {
                      slidesPerView: 3,
                      // allowTouchMove: false,
                    },

                    991.98: {
                      slidesPerView: 3,
                    },

                    // when window width is >= 767.98px
                    767.98: {
                      slidesPerView: 2.35,
                    },
                    575.98: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {
                    news ?
                      news.map((newHome, index) =>
                        <SwiperSlide key={index} >
                          <Link href={"/insights/news/" + newHome.slug}>
                            <a>
                              <NewsSection
                                title={newHome.title}
                                date={newHome.date_formatted}
                                image={newHome.first_image}
                                description={newHome.small_description}
                                button={homeSettings.read_more}
                              />
                            </a>
                          </Link>
                        </SwiperSlide>
                      )
                      :
                      null
                  }
                  <div className="pt-5 text-center">
                    <Link href="/insights/news/">
                      <a>
                        <button className="button blue-button shadow">
                          {homeSettings.view_all}
                        </button>
                      </a>
                    </Link>
                  </div>
                </Swiper>
              </div>
            :
            null
        }
        {
          homeSettings ?

            <>
              <div className="container pt-5">

                {tipsList.length === 0 ? null :

                  <>
                    <div className="row  justify-content-center  align-items-center ">
                      <div className="col-lg-12 col-md-8 col-sm-12 col-12" >
                        <div className="d-flex text-center justify-content-center">
                          <h2 className="mb-2" >{homeSettings.tips_title}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center" >
                      <div className="col-lg-6 text-center">
                        <p className="tips-home mb-3">{homeSettings.tips_text}</p>
                      </div>
                    </div>

                    <div className="row justify-content-center ">
                      {
                        tipsList ?
                          tipsList.map((list, index) =>
                            tipsList.length === 2 ?
                              <div className={"col-lg-3 col-md-4 col-sm-6 pb-5 "} animate="" key={index}>
                                <div className="youtube-section position-relative shadow" onClick={() => setYoutubePopup(list)}>
                                  <div className="ratio youtube-ratio">
                                    <img src={list.thumbnail_image} alt="youtube" />
                                  </div>
                                  <div className="overlay-youtube"></div>
                                  <div className="youtube-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47.861" height="47.861" viewBox="0 0 47.861 47.861">
                                      <path className="fill-icon" id="fi-rr-play-alt" d="M37.89,47.861H9.971A9.983,9.983,0,0,1,0,37.89V9.971A9.983,9.983,0,0,1,9.971,0H37.89a9.983,9.983,0,0,1,9.971,9.971V37.89A9.983,9.983,0,0,1,37.89,47.861ZM9.971,3.988A5.983,5.983,0,0,0,3.988,9.971V37.89a5.983,5.983,0,0,0,5.983,5.983H37.89a5.983,5.983,0,0,0,5.983-5.983V9.971A5.983,5.983,0,0,0,37.89,3.988ZM18.63,33.911a4.722,4.722,0,0,1-2.365-.644,4.613,4.613,0,0,1-2.321-4.03V18.624a4.66,4.66,0,0,1,6.98-4.046l10.525,5.255a4.658,4.658,0,0,1,.1,8.144L20.825,33.335A4.387,4.387,0,0,1,18.63,33.911Zm-.05-15.954a.626.626,0,0,0-.313.084.652.652,0,0,0-.335.582V29.237a.672.672,0,0,0,1,.584l10.721-5.36a.626.626,0,0,0,.239-.53.648.648,0,0,0-.337-.582L19.035,18.093a.921.921,0,0,0-.455-.136Z" fill="#14334a" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="under-box pt-3">
                                  <h3 className="mb-1">{list.date_formatted}</h3>
                                  <h4 className="mb-0">{list.video_desc}</h4>
                                </div>
                              </div>
                              :
                              <div className={"col-lg-3 col-md-4 col-sm-6 pb-5 " + (index % 2 !== 0 ? "col-lg-6 col-md-4 col-sm-6 pb-5" : "")} style={index % 3 === 0 ? { transitionDelay: '0.6s' } : (index % 2 === 0 ? { transitionDelay: '1s' } : { transitionDelay: '0.8s' })} animate="" key={index}>
                                <div className="youtube-section position-relative shadow" onClick={() => setYoutubePopup(list)}>
                                  <div className={"ratio youtube-ratio" + (index % 2 !== 0 ? " youtube-section-longer" : "")}>
                                    <img src={list.thumbnail_image} alt="youtube" />
                                  </div>
                                  <div className="overlay-youtube"></div>
                                  <div className="youtube-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47.861" height="47.861" viewBox="0 0 47.861 47.861">
                                      <path className="fill-icon" id="fi-rr-play-alt" d="M37.89,47.861H9.971A9.983,9.983,0,0,1,0,37.89V9.971A9.983,9.983,0,0,1,9.971,0H37.89a9.983,9.983,0,0,1,9.971,9.971V37.89A9.983,9.983,0,0,1,37.89,47.861ZM9.971,3.988A5.983,5.983,0,0,0,3.988,9.971V37.89a5.983,5.983,0,0,0,5.983,5.983H37.89a5.983,5.983,0,0,0,5.983-5.983V9.971A5.983,5.983,0,0,0,37.89,3.988ZM18.63,33.911a4.722,4.722,0,0,1-2.365-.644,4.613,4.613,0,0,1-2.321-4.03V18.624a4.66,4.66,0,0,1,6.98-4.046l10.525,5.255a4.658,4.658,0,0,1,.1,8.144L20.825,33.335A4.387,4.387,0,0,1,18.63,33.911Zm-.05-15.954a.626.626,0,0,0-.313.084.652.652,0,0,0-.335.582V29.237a.672.672,0,0,0,1,.584l10.721-5.36a.626.626,0,0,0,.239-.53.648.648,0,0,0-.337-.582L19.035,18.093a.921.921,0,0,0-.455-.136Z" fill="#14334a" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="under-box pt-3">
                                  <h3 className="mb-1">{list.date_formatted}</h3>
                                  <h4 className="mb-0">{list.video_desc}</h4>
                                </div>
                              </div>
                          )
                          :
                          null
                      }
                    </div>


                    <div className="pb-5 text-center">
                      <a href={homeSettings.subscribe_url} target="_blank" rel="noreferrer">
                        <button className="button blue-button shadow">
                          {homeSettings.subscribe_button}
                        </button>
                      </a>
                    </div>
                  </>
                }
              </div>

              <div className="py-5" animate="">
                <Section
                  title={homeSettings.help_title}
                  subtitle={homeSettings.help_text}
                  label={homeSettings.help_button}
                  button="1"
                />
              </div>
            </>
            :
            null
        }

        {
          youtubePopup && (
            <div className={"youtube-popup" + (youtubePopup ? " " : " fade-out")}>
              <div className="modal-window position-relative">
                <div className="cancel-button stop-video" onClick={() => setYoutubePopup(null)}>
                  <img src="../img/images/x-button.svg" alt="" />
                </div>
                <iframe className="youtube-borders mw-100" width="900" height="500" src={youtubePopup.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          )
        }

        <div className={"team-popup " + (clientPopup ? " " : " fade-out")}>
          {clientPopup && (
            <ClientsPopup
              setClientPopup={setClientPopup}
              image={clientPopup.full_path_logo}
              title={clientPopup.title}
              description={clientPopup.description}
              url={clientPopup.url}
              label={homeSettings.visit_button}
            />
          )
          }
        </div>

      </>

    </Layout >
  )
}

export async function getStaticProps() {
  const homeData = await axios.get("/home");
  return {
    props: {
      homeData: homeData.data,
    },
    revalidate: 10,
  };
}
