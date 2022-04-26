import axios from "axios";

export default function test(props) {

    const storySettings = props.ourStoryData.page_items.story_settings;
    const companyList = props.ourStoryData.page_items.companies_list;

    return (
        <div>
            <div className="position-relative ">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="row justify-content-center text-center ">
                                <div className="col-lg-4 col-md-4 col-12 pb-5">
                                    <div className="bleu-ciel-group h-100 shadow position-relative">
                                        <div className="company-line-left"></div>
                                        <div className="company-line-right"></div>
                                        <h4 className="mb-0 px-5">{storySettings.group_name}</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center ">
                                {
                                    companyList ?
                                        <>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="row justify-content-center text-center">
                                                    {
                                                        companyList ?
                                                            companyList.map((company, index) =>
                                                                !company.second_column && !company.third_column && (
                                                                    <div className="col-12 pb-5" key={index}>
                                                                        <div className="blue-dark-group position-relative h-100 shadow">
                                                                            <div className="company-line"></div>
                                                                            <h4 className="mb-0 px-5">{company.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="row justify-content-center text-center">
                                                    {
                                                        companyList ?
                                                            companyList.map((company, index) =>
                                                                !company.first_column && !company.third_column && (
                                                                    <div className="col-12 pb-5" key={index}>
                                                                        <div className="blue-dark-group position-relative h-100 shadow">
                                                                            <div className="company-line"></div>
                                                                            <h4 className="mb-0 px-5">{company.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="row justify-content-center text-center">
                                                    {
                                                        companyList ?
                                                            companyList.map((company, index) =>
                                                                !company.second_column && !company.first_column && (
                                                                    <div className="col-12 pb-5" key={index}>
                                                                        <div className="blue-dark-group position-relative h-100 shadow">
                                                                            <div className="company-line"></div>
                                                                            <h4 className="mb-0 px-5">{company.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                        </>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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