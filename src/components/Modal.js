import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
}

const modalVariants = {
	initial: {
		y: '-100vh',
		opacity: 0,
	},
	animate: {
		y: '200px',
		opacity: 1,
		transition: { delay: 0.5 },
	},
}
export const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					className='backdrop'
					initial='initial'
					animate='animate'
					exit='initial'
				>
					<motion.div className='modal' variants={modalVariants}>
						<p>Want to make another pizza?</p>
						<Link to='/'>
							<button>Start Again</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
