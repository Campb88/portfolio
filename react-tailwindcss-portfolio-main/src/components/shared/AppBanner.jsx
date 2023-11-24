import { motion } from 'framer-motion';

const AppBanner = () => {
	return (
		<motion.section
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			{/* Text Section */}
			<motion.div className="w-full md:w-3/4 text-center mt-12">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="font-general-semibold text-2xl mt-40 lg:text-3xl xl:text-4xl text-center sm:text-center text-ternary-dark dark:text-primary-light uppercase"
				>
					Kate Campbell
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.7,
					}}
					className="font-general-medium mt-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center sm:text-center leading-normal text-gray-500 dark:text-gray-200"
				>
					Transforming Computer Science Education
				</motion.h1>

				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.7,
					}}
					className="font-general-medium mb-20 mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center sm:text-center leading-normal text-gray-500 dark:text-gray-200"
				>
					& Advocating for Inclusivity
				</motion.h1>
			</motion.div>
		</motion.section>
  );
};

export default AppBanner;
