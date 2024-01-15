// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="I have completed my Bachelor's in Computer Science at Northern University of Engineering and Technology. Feel free to ask if you have any questions about my academic background."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>Northern University of Engineering and Technology</h3>
            <h5>KPK, Pakistan</h5>
        </span>
                            <p>I have completed my Bachelor`s in Computer Science and Engineering at Northern
                                University. Throughout the four-year program, I gained a comprehensive understanding of
                                various aspects of computer science and its applications. The curriculum covered key
                                areas such as programming languages, algorithms, data structures, computer networks,
                                databases, and software engineering. During this academic journey, I actively
                                participated in projects, coding competitions, and internships to acquire real-world
                                experience and enhance my skills. I have successfully built a strong portfolio to
                                support my future career endeavors.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

