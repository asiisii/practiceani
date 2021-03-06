import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
	initialState: {
		opacity: 0,
		x: '100vw',
	},
	endState: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			delay: 0.5,
		},
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut' },
	},
}

const nextVariants = {
	initialState: {
		x: '-100vh',
	},
	endState: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 125,
		},
	},
}

const btnVariants = {
	hover: {
		scale: 1.1,
		textShadow: '0px 0px 8px rgb(255,255,255)',
		boxShadow: '0px 0px 8px rgb(255,255,255)',
		transition: {
			duration: 0.3,
			yoyo: Infinity,
		},
	},
}

const Base = ({ addBase, pizza }) => {
	const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

	return (
		<motion.div
			className='base container'
			variants={containerVariants}
			initial='initialState'
			animate='endState'
			exit='exit'
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map(base => {
					let spanClass = pizza.base === base ? 'active' : ''
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{ scale: 1.5, originX: 0, color: '#f9e112' }}
							transition={{ type: 'spring', stifness: 300 }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					)
				})}
			</ul>

			{pizza.base && (
				<motion.div className='next' variants={nextVariants}>
					<Link to='/toppings'>
						<motion.button
							variants={btnVariants}
							initial={{ y: -250 }}
							animate={{ y: -10 }}
							transition={{ delay: 0.2, type: 'spring', stiffness: 125 }}
							whileHover='hover'
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	)
}

export default Base
