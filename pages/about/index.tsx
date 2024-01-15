import Color from "../../src/components/utils/page.colors";

import colors from "../../src/content/docs/_colors.json";
const About = dynamic(() => import("../../src/components/sections/index/home"));
import TitleAboutMe from "./title.aboutMe";
import GithubGraphSection from "../../src/components/sections/index/github.graph";
import dynamic from "next/dynamic";

// documentation page - under development
export default function docs({}) {
    {
    }
    return (
        <>
            <TitleAboutMe />
            <Color colors={colors} />
            <About />
            <GithubGraphSection />
        </>
    );
}