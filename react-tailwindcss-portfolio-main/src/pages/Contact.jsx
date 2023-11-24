import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import { FiArrowDownCircle } from 'react-icons/fi';

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}>
			<motion.div

				className=" container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
			>
				<ContactForm />

				{/* Button Section */}
				<motion.div
					className="mx-auto sm:justify-between sm:mt-12 md:mt-2"
				>
					<ContactDetails />
					<motion.div
					className= "mt-10"
				>
					<a
						download="Resume.pdf"
						href="/files/Resume.pdf"
						className="mx-auto mb-3 font-general-medium flex justify-center items-center w-4/6 sm:w-4/6 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>

					<a
						download="References.pdf"
						href="/files/References.pdf"
						className="mx-auto font-general-medium flex justify-center items-center w-5/6 sm:w-5/6 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download References"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download References
						</span>
					</a>
					</motion.div>
				</motion.div>
			</motion.div>


		</motion.section>
	);
};

export default Contact;
