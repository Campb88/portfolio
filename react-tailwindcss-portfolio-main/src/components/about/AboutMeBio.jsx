import profileImage from '../../images/profile.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex-row">
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex items-center justify-center">
					<img src={profileImage} className="rounded-lg w-96" alt="" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					{aboutMe.map((bio) => (
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-base"
							key={bio.id}
						>
							{bio.bio}
						</p>
					))}
				</div>


			</div>,
			<div className="font-general-regular w-full sm:w-1 text-left">
				{aboutMe.map((mission) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-base"
						key={mission.id}
					>
						<h2 className="font-bold mb-2 text-lg">{mission.title}</h2>
						{mission.statement}
					</p>
				))}
			</div></div>


	);
};

export default AboutMeBio;
