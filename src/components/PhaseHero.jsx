import React from 'react'
import StudyPlanDark from "../assets/studyplanblack.png";
import StudyPlanWhite from '../assets/whitestudyplan.png';

const PhaseHero = (props) => {
    const {theme} = props;
    const {title, description} = props.phase;
  return (
    <>
        <section className="bg-blue2 dark:bg-dark">
				<div className="grid grid-cols-1 lg:grid-cols-2 mx-[5%] gap-10 text-justify md:mx-[5%] lg:mx-[10%] py-6 md:py-28">
					<div className="mt-[80px] md:mt-[60px]">
						<img src={theme === 'dark' ? StudyPlanWhite : StudyPlanDark} alt="study plan" />
					</div>
					<div className="my-auto pt-1 md:pt-11">
						<h1 className="font-bold text-3xl md:text-4xl text-black dark:text-blue2">
							{title}
						</h1>
						<p className="text-blueGrey font-bold text-lg mb-5 dark:text-blue2">
							An Extensive Curriculum
						</p>
						<p className="text-blueGrey mb-10 font-medium dark:text-white">
							{description}
						</p>
						<h2 className="text-black font-bold text-lg mb-1 dark:text-blue2">Points to be noted</h2>
						<ul className="list-disc pl-4 text-black dark:text-white">
							<li>
								Each Phase consists of daily assignments, and doubt support.
							</li>
							<li>
								PSS are problem solving sessions so that your journey of problem
								solving never stops.{" "}
							</li>
							<li>
								The last 4 weeks are solely dedicated to your practice and doubt
								support, and the real learning begins then.
							</li>
						</ul>
					</div>
				</div>
			</section>
    </>
  )
}

export default PhaseHero