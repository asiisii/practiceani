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

const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		'mushrooms',
		'peppers',
		'onions',
		'olives',
		'extra cheese',
		'tomatoes',
	]

	return (
		<motion.div
			className='toppings container'
			variants={containerVariants}
			initial='initialState'
			animate='endState'
      exit="exit"
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map(topping => {
					let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
					return (
						<motion.li
							key={topping}
							onClick={() => addTopping(topping)}
							whileHover={{ scale: 1.5, originX: 0, color: '#f9e112' }}
							transition={{ type: 'spring', stifness: 300 }}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					)
				})}
			</ul>
			{pizza.toppings.length ? (
				<Link to='/order'>
					<motion.button variants={btnVariants} whileHover='hover'>
						Order
					</motion.button>
				</Link>
			) : null}
		</motion.div>
	)
}

export default Toppings
