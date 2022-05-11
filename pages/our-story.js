import Layout from "../components/layout";
import SideButton from "../components/SideButton";
import Banner from "../components/Banner";
import SeoTags from "../components/SeoTags";

import { Swiper, SwiperSlide } from "swiper/react";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import GlobalState from "../GlobalState";
import LocationMap from "../components/LocationMap";
import OrgChart from 'react-orgchart';

export default function OurStory(props) {

    const [popupOpen, setPopupOpen] = useState(null);

    const { triggerScroll } = useContext(GlobalState);

    const storySettings = props.ourStoryData.page_items.story_settings;
    const storyList = props.ourStoryData.page_items.story_list;
    const pillarsList = props.ourStoryData.page_items.pillars_list;
    const historyList = props.ourStoryData.page_items.history_list;
    const companyList = props.ourStoryData.page_items.companies_list;
    const companyChartList = props.ourStoryData.page_items.companies_chart_list[0];
    const teamList = props.ourStoryData.page_items.team_list;
    const mapLegend = props.ourStoryData.page_items.map_legend;
    const mapPinnedLocations = props.ourStoryData.page_items.map_pinned_locations;

    const menuItems = props.ourStoryData.fixed_titles;
    const socialMedia = props.ourStoryData.social_media;
    const footerLogos = props.ourStoryData.footer_logos;
    const footerContactIcons = props.ourStoryData.footer_contact_icons;
    const serviceTitles = props.ourStoryData.services_titles;
    const industriesTitles = props.ourStoryData.industries_titles;

    const [pinDetails, setPinDetails] = useState(null);
    const popupRef = useRef(null);
    const [tree, setTree] = useState({});

    const getNode = (node) => {
        // console.log(node)
        var nodeChildren = [];
        if (node.children_companies) {
            node.children_companies.forEach(node => {
                nodeChildren.push(getNode(node));
            });
        } 
        else { null }

        return {
            id: node.id,
            title: node.title,
            children_companies: nodeChildren,
            isopen: node.isopen,
            companies_chart_list_id: node.companies_chart_list_id,
            children: node.isopen ? nodeChildren : [],
        };
    }

    const openNode = (node, clickedNode) => {
        node.children_companies.forEach(subnode => {
            if (subnode.id == clickedNode.id) {
                subnode.isopen = subnode.isopen ? 0 : 1;
            } else {
                openNode(subnode, clickedNode);
            }
        });
    }

    const nodeClick = (clickedNode) => {
        let newTree = { ...tree };
        openNode(newTree, clickedNode);
        setTree(getNode(newTree));
    }

    useEffect(() => {
        setTree(getNode({ ...companyChartList }));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        triggerScroll();
        document.querySelector('body').style.overflow = popupOpen ? 'hidden' : null;
        document.querySelector('html').style.overflow = popupOpen ? 'hidden' : null;
    }, [popupOpen]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setPopupOpen(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef, setPopupOpen]);

    return (

        <Layout fixedNav={false} activePage="our-story" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>
            <SeoTags
                title={props.ourStoryData.page_items.seo.title}
                description={props.ourStoryData.page_items.seo.description}
                image={props.ourStoryData.page_items.seo.image}
            />

            {
                storySettings ?
                    <>
                        <SideButton
                            title={menuItems['book-a-consultation']}
                        />
                        <Banner
                            banner={storySettings.image}
                            title={storySettings.title}
                            video={storySettings.banner_video}
                        />

                        <div className="position-relative pt-5">
                            <div className="background-story">
                                <img src="../img/images/bg-story.svg" alt="bg" />
                            </div>
                            <div className="container py-5 our-story-1 px-sm-2 px-4 ">
                                {
                                    storyList ?
                                        storyList.map((story, index) =>
                                            <div className={"row py-lg-5 pb-5 align-items-center" + (index % 2 === 0 ? "" : " flex-row-reverse d-flex fix-alignment")} key={index}  >
                                                <div className="col-xxl-8 col-lg-7 col-md-7 col-sm-7">
                                                    <div className={"me-lg-5 pe-lg-5" + (index % 2 === 0 ? "" : " ms-lg-5 ps-lg-5")}>
                                                        <h2 className="mb-4">{story.title}</h2>
                                                        <p className="mb-4">{story.description}</p>
                                                        <h4>{story.last_text}</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-lg-5 col-md-5 col-sm-5 pt-sm-0" animate="">
                                                    <div className="ratio story-image cursor-opposite">
                                                        <img src={story.image} alt={story.title} title={story.title} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }
                            </div>
                        </div>

                        <div className=" pb-5">
                            <div className="counter-background py-md-5 pt-5 cursor-opposite">
                                <div className="container px-sm-2 px-4">
                                    <div className="row mb-5" >
                                        <h3 >{storySettings.numbers_section_title}</h3>
                                    </div>
                                    <div className="row justify-content-between">
                                        <div className="col-lg-3 col-md-auto col-6 mb-md-0 mb-5 counter-number" >
                                            <CountUp
                                                start={2000}
                                                end={storySettings.first_number_value}
                                                duration={2}
                                                redraw={true}
                                            >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <hr className="seperator" />
                                            <h4>{storySettings.first_number_title}</h4>
                                        </div>

                                        <div className="col-lg-3 col-md-auto col-6 mb-md-0 mb-5 counter-number" >
                                            <div className="d-flex align-items-baseline">
                                                <CountUp
                                                    start={0}
                                                    end={storySettings.second_number_value}
                                                    separator=""
                                                    // suffix="+"
                                                    duration={2}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <div className="counter-plus">{storySettings.counter_plus}</div>
                                            </div>
                                            <hr className="seperator" />
                                            <h4>{storySettings.second_number_title}</h4>
                                        </div>

                                        <div className="col-lg-3 col-md-auto col-6 mb-md-0 mb-5 counter-number" >
                                            <div className="d-flex align-items-baseline">
                                                <CountUp
                                                    start={0}
                                                    end={storySettings.third_number_value}
                                                    separator=""
                                                    // suffix="+"
                                                    duration={2}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <div className="counter-plus">{storySettings.counter_plus}</div>
                                            </div>
                                            <hr className="seperator" />
                                            <h4>{storySettings.third_number_title}</h4>
                                        </div>

                                        <div className="col-lg-3 col-md-auto col-6 mb-md-0 mb-5 counter-number" >
                                            <CountUp
                                                start={0}
                                                end={storySettings.fourth_number_value}
                                                duration={2}
                                                redraw={true}
                                            >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <hr className="seperator" />
                                            <h4>{storySettings.fourth_number_title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={(pillarsList.length > 4) ? " add-padd " : " py-5 mb-lg-5"}>
                            <div className="pb-lg-5">
                                <div className="pb-5">
                                    <div className="container pillars px-sm-2 px-4">
                                        <div className="row justify-content-center text-center pb-5"  >
                                            <div className="col-lg-10 ">
                                                <h2 className="mb-4">{storySettings.pillars_title}</h2>
                                                <h3>{storySettings.pillars_subtitle}</h3>
                                                <p className="mb-0 mx-lg-3">{storySettings.pillars_text}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="position-relative">
                                        <div className="think-blue-bg py-lg-5 pb-4" style={{ backgroundImage: 'url(' + storySettings.pillars_image + ')' }}>
                                            <div className="pilllars-larger"></div>

                                            <div className="container section-on-image  px-sm-2 px-4">
                                                <div className="row justify-content-center">
                                                    {
                                                        pillarsList ?
                                                            pillarsList.map((pillar, index) =>
                                                                <div className="col-lg-3 col-md-6 col-sm-6 col-11 pt-lg-0 pb-lg-2 pt-4" key={index}>
                                                                    <div className="bg-color py-4 text-center p-2 cursor-opposite">
                                                                        <h3>{pillar.title}</h3>
                                                                        <div className="justify-content-center d-flex">
                                                                            <div className="hr-line"></div>
                                                                        </div>
                                                                        <div className="onhover-text pt-3">
                                                                            <p className="mb-lg-5 mb-0 ">{pillar.description}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container company-history px-sm-2 px-4" >
                            <div className="row justify-content-center text-center pb-5">
                                <div className="col-lg-10 ">
                                    <h2 className="mb-4 mt-lg-3">{storySettings.history_title}</h2>
                                    <p className="mb-0">{storySettings.history_text}</p>
                                </div>
                            </div>

                            <div className="row justify-content-center"  >
                                <div className="col-lg-10">
                                    {
                                        historyList ?
                                            historyList.map((history, index) =>
                                                <div className="position-relative history" key={index}>
                                                    <div className={(index % 2 === 0 ? "first" : " second ")} animate="" style={{ transitionDelay: '0.5s' }}><span></span></div>
                                                    <div className={"row pb-4   " + (index % 2 === 0 ? " d-flex justify-content-start " : " d-flex justify-content-end ")}>
                                                        <div className={(index % 2 === 0 ? " col-lg-5 col-md-5 col-sm-12 col-12 fix-mobile-position d-flex align-items-center flex-md-row flex-row-reverse left-position" : " col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center flex-row-reverse fix-mobile-position right-position")}>
                                                            <p className="mb-0 me-sm-3 ms-3" animate="" style={{ transitionDelay: '0.2s' }}>{history.text}</p>
                                                            <div className={"position-relative " + (index % 2 === 0 ? " circle" : " circle-right")} >
                                                                <div className="first-mobile"><span></span></div>
                                                                <p className="mb-0" style={{ transitionDelay: '0.4s' }}>{history.year}</p>
                                                                {
                                                                    (index % 2 === 0) ?
                                                                        <div className=" " style={{ transitionDelay: '0.5s' }}>
                                                                            <svg className="d-md-block d-none" xmlns="http://www.w3.org/2000/svg" width="95.511" height="112.002" viewBox="0 0 95.511 112.002">
                                                                                <g id="Group_3342" data-name="Group 3342" transform="translate(-204 -3318.568)">
                                                                                    <path id="Path_68" data-name="Path 68" d="M36.175,0A36.148,36.148,0,1,0,72.3,36.122,36.213,36.213,0,0,0,36.175,0Z" transform="translate(204 3338.421)" fill="#ccd7e0" />
                                                                                    <path id="Path_69" data-name="Path 69" d="M176.342,255.338a56.245,56.245,0,0,1-51.389,56l0-.03a7.96,7.96,0,1,1,0-15.92v0a40.338,40.338,0,0,0,1.2-79.932c-.353-.053-1.314-.167-1.413-.169-4.789-.606-7.753-3.609-7.753-7.956a7.965,7.965,0,0,1,7.971-7.96l-.018-.032A56.245,56.245,0,0,1,176.342,255.338Z" transform="translate(123.168 3119.232)" fill="#ccd7e0" opacity="0.498" />
                                                                                </g>
                                                                            </svg>
                                                                            <svg className="d-md-none d-block" xmlns="http://www.w3.org/2000/svg" width="95.51" height="112.002" viewBox="0 0 95.51 112.002">
                                                                                <g id="Group_3343" data-name="Group 3343" transform="translate(-184 -3318.568)">
                                                                                    <path id="Path_68" data-name="Path 68" d="M36.121,0A36.148,36.148,0,1,1,0,36.122,36.213,36.213,0,0,1,36.121,0Z" transform="translate(207.214 3338.421)" fill="#ccd7e0" />
                                                                                    <path id="Path_69" data-name="Path 69" d="M116.98,255.338a56.245,56.245,0,0,0,51.389,56l0-.03a7.96,7.96,0,1,0,0-15.92v0a40.338,40.338,0,0,1-1.2-79.932c.353-.053,1.314-.167,1.413-.169,4.789-.606,7.753-3.609,7.753-7.956a7.965,7.965,0,0,0-7.971-7.96l.018-.032A56.245,56.245,0,0,0,116.98,255.338Z" transform="translate(67.02 3119.232)" fill="#ccd7e0" opacity="0.498" />
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        :
                                                                        <div className=" " >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="95.51" height="112.002" viewBox="0 0 95.51 112.002">
                                                                                <g id="Group_3343" data-name="Group 3343" transform="translate(-184 -3318.568)">
                                                                                    <path id="Path_68" data-name="Path 68" d="M36.121,0A36.148,36.148,0,1,1,0,36.122,36.213,36.213,0,0,1,36.121,0Z" transform="translate(207.214 3338.421)" fill="#ccd7e0" />
                                                                                    <path id="Path_69" data-name="Path 69" d="M116.98,255.338a56.245,56.245,0,0,0,51.389,56l0-.03a7.96,7.96,0,1,0,0-15.92v0a40.338,40.338,0,0,1-1.2-79.932c.353-.053,1.314-.167,1.413-.169,4.789-.606,7.753-3.609,7.753-7.956a7.965,7.965,0,0,0-7.971-7.96l.018-.032A56.245,56.245,0,0,0,116.98,255.338Z" transform="translate(67.02 3119.232)" fill="#ccd7e0" opacity="0.498" />
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="row justify-content-center text-center pb-5">
                                <div className="col-lg-10 pt-4">
                                    <p className="mb-0">{storySettings.history_last_text}</p>
                                </div>
                            </div>
                        </div>

                        {
                            // !storySettings.group_title && !storySettings.group_text ? null :
                                <div className="table-responsive pb-5 mb-5">
                                    <div className="container-fluid company-history px-sm-2 px-4">
                                        <div className="row justify-content-center text-center py-5" >
                                            <div className="col-lg-10 ">
                                                <h2 className="mb-4">{storySettings.group_title}</h2>
                                                <p className="mb-0">{storySettings.group_text}</p>
                                            </div>
                                        </div>

                                        <div className="position-relative ">
                                            <div className="row justify-content-center text-center ">
                                                <OrgChart
                                                    tree={tree}
                                                    NodeComponent={({ node }) => (
                                                        <div className={`custom-chart-node ${node.companies_chart_list_id ? '' : 'first-chart-node'}`} onClick={() => nodeClick(node)}> {node.title}</div >
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }

                        <div className="py-lg-5 pb-5">
                            <div className="py-lg-5">
                                <div className="blue-bg-ceo position-relative">
                                    <div className="ceo-ratio d-md-block d-none cursor-opposite" animate="">
                                        <img src={storySettings.ceo_image}  alt={storySettings.ceo_title} title={storySettings.ceo_title} />
                                    </div>
                                    <div className="container position-relative px-sm-2 px-4">
                                        <div className=" d-block d-md-none mt-md-5 mt-3"  >
                                            <div className="">
                                                <div className="ceo-ratio-mobile pt-5" animate="">
                                                    <img src={storySettings.ceo_image} alt={storySettings.ceo_title} title={storySettings.ceo_title} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row bg-ceo-mobile align-items-center gx-0 ">
                                            <div className="col-lg-7 col-md-12" >
                                                <div className=" py-5 " >
                                                    <div className="container">
                                                        <div className="row  justify-content-center justify-content-md-start cursor-opposite">
                                                            <div className="col-lg-11 col-md-7 col-12 "  >
                                                                <h2 className="mb-4 pt-1">{storySettings.ceo_title}</h2>
                                                                <p>{storySettings.ceo_message}</p>
                                                                <div className="text-end me-1">
                                                                    <p className="signature mb-0">{storySettings.ceo_name}</p>
                                                                </div>
                                                                <div className="text-end" animate="">
                                                                    <img className="ceo-signature" src={storySettings.ceo_signature} alt={storySettings.ceo_title} title={storySettings.ceo_title} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" ">
                            <div className="position-relative our-team-image">
                                <div className="background-sections team-background">
                                </div>
                                <div className="container pt-5 d-lg-block d-sm-block d-none px-sm-2 px-4">
                                    <div className="text-center pt-lg-5 mt-lg-4" >
                                        <h2 className="mb-4">{storySettings.team_title}</h2>
                                    </div>
                                    <div className="row justify-content-center pb-lg-5"  >
                                        {
                                            teamList ?
                                                teamList.map((team, index) =>
                                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-5" animate="" onClick={() => setPopupOpen(team)} ref={popupRef} key={index}>
                                                        <div className="team-section shadow position-relative cursor-opposite">
                                                            <div className="ratio team-ratio">
                                                                <img src={team.image} alt={team.name} title={team.name} />
                                                            </div>
                                                            <div className="team-position py-2">
                                                                <h4 className="mb-2 mx-3">{team.name}</h4>
                                                                <h5 className="mx-3">{team.position}</h5>
                                                                <p className="mobile-read-more underline mb-0 mx-3">{storySettings.read_more}</p>
                                                            </div>
                                                            <div className="team-position-hover">
                                                                <div className="content">
                                                                    <h4 className="mb-2 ">{team.name}</h4>
                                                                    <h5 className="mb-3">{team.small_description}</h5>
                                                                    <p className="underline mb-0">{storySettings.read_more}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 d-sm-none d-block "  >
                            <div className="text-center">
                                <h2 className="mb-4">{storySettings.team_title}</h2>
                            </div>
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                slidesPerView={2}
                                centeredSlides={true}
                                spaceBetween={10}
                                // pagination={true}
                                loop={true}
                                modules={[Pagination]}
                                className="mySwiper pb-5">
                                {
                                    teamList ?
                                        teamList.map((team, index) =>
                                            <SwiperSlide key={index}>
                                                <div className="team-section shadow position-relative cursor-opposite" ref={popupRef} onClick={() => setPopupOpen(team)}>
                                                    <div className="ratio team-ratio">
                                                        <img src={team.image} alt={team.name} title={team.name} />
                                                    </div>
                                                    <div className="team-position py-3">
                                                        <h4 className="mb-2 mx-3">{team.name}</h4>
                                                        <h5 className="mx-3">{team.position}</h5>
                                                        <p className="mobile-read-more underline mb-0">{storySettings.read_more}</p>

                                                    </div>
                                                    <div className="team-position-hover">
                                                        <div className="content">
                                                            <h4 className="mb-2 ">{team.name}</h4>
                                                            <h5 className="mb-3">{team.small_description}</h5>
                                                            <p className="underline">{storySettings.read_more}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                        :
                                        null
                                }
                            </Swiper>
                        </div>
                        {!storySettings.idml_title && !storySettings.idml_text && !storySettings.idml_image === 0 ? " d-none" :
                            <div className="pb-5">
                                <div className={"bg-blue-idml position-relative" + (!storySettings.idml_title && !storySettings.idml_text && !storySettings.idml_image) ? " d-none" : ""}>
                                    <div className="container px-sm-2 px-4">
                                        <img className={"idml-bg " + (!storySettings.idml_title && !storySettings.idml_text && !storySettings.idml_image) ? " d-none" : ""} src="../img/images/idml-bg.png" alt={storySettings.idml_title} title={storySettings.idml_title} />
                                    </div>
                                    <div className="container px-sm-2 px-4">
                                        <div className="row what-is-idml">
                                            <div className="col-lg-8 col-md-7 col-sm-12 col-12  py-5 "  >
                                                <div className="pe-md-5 ms-md-0 ms-5">
                                                    <h2 className="mb-4">{storySettings.idml_title}</h2>
                                                    <p>{storySettings.idml_text}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-5 d-md-block d-sm-none d-none" animate="">
                                                <img className="what-is-idml-img" src={storySettings.idml_image} alt={storySettings.idml_title} title={storySettings.idml_title} />
                                            </div>
                                        </div>
                                    </div>

                                    <img className="mobile-full-image" animate="" src={storySettings.idml_image} alt={storySettings.idml_title} title={storySettings.idml_title} />

                                </div>
                            </div>
                        }

                        <div className="container  px-sm-2 px-4">
                            <div className="row operations  py-5"  >
                                <div className="col-lg-12 pb-5 ">
                                    <h2 className="mb-4 text-center">{storySettings.operations_title}</h2>
                                    <p className="mb-5 text-center">{storySettings.subtitle}</p>

                                    <div className="row side-map align-items-start d-md-flex d-block " animate="">
                                        <div className="col-auto align-items-sm-start d-sm-flex   align-items-lg-center d-lg-block align-items-md-center d-md-block">
                                            {mapLegend ?
                                                mapLegend.map((map, index) =>
                                                map.id === 5 ?   null :
                                                    <div className="row align-items-center pb-4" key={index}>
                                                        
                                                        <div className="col-md-4 col-auto justify-content-md-center justify-content-start d-flex pb-sm-3">
                                                            <img className="side-icon" src={map.full_path_icon} alt={map.title} title={map.title} />
                                                        </div>
                                                        <div className="col-md-8 col-auto">
                                                            <p className="mb-0">{map.title}</p>
                                                        </div>
                                                    </div>
                                                )
                                                :
                                                null
                                            }
                                        </div>
                                        <div className="col pb-4">
                                            <div className="position-relative">
                                                <div className="ratio map-ratio">
                                                    <img src={storySettings.map_image} alt="map"  />
                                                </div>
                                                {
                                                    mapPinnedLocations ?
                                                        mapPinnedLocations.map((pinLocation, index) =>
                                                            <div key={index}>
                                                                {/* {console.log(pinLocation)} */}
                                                                <LocationMap
                                                                    index={index}
                                                                    pinLocation={pinLocation}
                                                                    id={pinLocation.id}
                                                                    pinDetails={pinDetails}
                                                                    title={pinLocation.operations_map_legend.title}
                                                                    description={pinLocation.description}
                                                                    y={pinLocation.y}
                                                                    x={pinLocation.x}
                                                                    pin={pinLocation.operations_map_legend.full_path_icon}
                                                                    phoneUrl={pinLocation.phone}
                                                                    iconPhone={storySettings.map_phone_icon}
                                                                    phone={pinLocation.phone}
                                                                    locationUrl={pinLocation.location_url}
                                                                    locationIcon={storySettings.map_location_icon}
                                                                    location={pinLocation.location}
                                                                    email={pinLocation.email}
                                                                    iconEmail={storySettings.map_email_icon}
                                                                    setPinDetails={setPinDetails}
                                                                />
                                                            </div>
                                                        )
                                                        :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"team-popup " + (popupOpen ? " " : " fade-out")}>
                            <div className="modal-window team-member position-relative">
                                <div className="popup-team">
                                    <div className="close-svg cursor-opposite" onClick={() => setPopupOpen(null)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="37" viewBox="0 0 49 37">
                                            <g id="Group_3342" data-name="Group 3342" transform="translate(-1096 -228)">
                                                <path id="Rectangle_267" data-name="Rectangle 267" d="M0,0H12A37,37,0,0,1,49,37v0a0,0,0,0,1,0,0H27.75A27.75,27.75,0,0,1,0,9.25V0A0,0,0,0,1,0,0Z" transform="translate(1096 228)" fill="#14334a" />
                                                <g id="Group_3054" data-name="Group 3054" transform="translate(214.465 49.965)">
                                                    <line id="Line_8" data-name="Line 8" x2="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
                                                    <line id="Line_9" data-name="Line 9" x1="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="row justify-content-center justify-content-lg-start align-items-center py-lg-5 py-3 gx-5 mx-lg-3 mx-2">
                                        <div className="col-auto p-4 pb-md-0">
                                            <div className="team-image ">
                                                <img src={popupOpen?.image} alt={popupOpen?.name} title={popupOpen?.name} />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-11 pt-lg-0">
                                            <h3 className="mb-1 text-center">{popupOpen?.name}</h3>
                                            <h4 className="mb-3 text-center">{popupOpen?.position}</h4>
                                            <p>{popupOpen?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </Layout >
    )
}

export async function getStaticProps() {
    const ourStoryData = await axios.get("/our-story");
    return {
        props: {
            ourStoryData: ourStoryData.data,
        },
        revalidate: 10,
    };
}