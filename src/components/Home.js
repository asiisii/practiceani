import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const btnVariants = {
	endState: {
		x: [0, -20, 20, 0],
		transition: { delay: 2 },
	},
	hover: {
		scale: 1.1,
		textShadow: '0px 0px 8px rgb(255,255,255)',
		boxShadow: '0px 0px 8px rgb(255,255,255)',
		transition: {
			duration: 0.3,
			yoyo: Infinity, //or just give a number
		},
	},
}

const containerVariants = {
	initialState: {
		opacity: 0,
	},
	endState: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 1.55,
		},
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut' },
	},
}

const Home = () => {
	return (
		<motion.div
			className='home container'
			variants={containerVariants}
			initial='initialState'
			animate='endState'
      exit="exit"
		>
			<motion.h2 animate={{ fontSize: '50px', color: '#ff2994' }}>
				Welcome to Pizza Joint
			</motion.h2>
			<Link to='/base'>
				<motion.button
					variants={btnVariants}
					animate='endState'
					whileHover='hover'
				>
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	)
}

export default Home
