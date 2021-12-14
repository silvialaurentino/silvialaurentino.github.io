import "./intro.css"
//import me from "../../img/me.png"

const Intro = () => {
    return (
        <div>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">hellow, my name is</h2>
                        <h1 className="i-name">silv ia</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Data Scientist</div>
                                <div className="i-title-item">Game developer</div>
                                <div className="i-title-item">Photographer</div>
                                <div className="i-title-item">QA Tester</div>
                                <div className="i-title-item">Designer</div>
                                <div className="i-title-item">Writer</div>
                            </div>
                        </div>
                        <p className="i-desc">
                            I'm a Data scientist enthusiastic in Neuroscience, an AI Game developer, officially a QA and really an Artist.
                            Creative and passionate about nature, the human brain and everything in between. Everything.
                        </p>
                    </div>
                    <svg
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                        fill="none"
                        stroke="black"
                        className="i-scroll"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <g id="scroll">
                        <path
                            id="Vector"
                            d="M40.5 15L34.5 9L28.5 15"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            id="Vector_2"
                            d="M28.5 24L34.5 30L40.5 24"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <g id="Group">
                            <path
                                id="Vector_3"
                                d="M9 37.5H60"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <path
                            id="Vector_4"
                            d="M34.5 27V9"
                            stroke-width="2.9895"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <g id="Group_2">
                            <path
                                id="Vector_5"
                                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                    </g>
                    </svg>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={"me"} alt="" className="i-img"/>
                </div>
            </div>
        </div>
    )
}

export default Intro
