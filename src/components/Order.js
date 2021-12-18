import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
			mass: 0.4, //higher mass = moves slower and lower mass = a bit quicker
			damping: 8, //lower number it will shake faster indefinitely
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
}

const childVariants = {
	initialState: {
		opacity: 0,
	},
	endState: {
		opacity: 1,
	},
}

const Order = ({ pizza }) => {
	const [showTitle, setShowTitle] = useState(true)
	// setTimeout(() => {
	// 	setShowTitle(false)
	// }, 4000)

	return (
		<motion.div
			className='container order'
			variants={containerVariants}
			initial='initialState'
			animate='endState'
		>
			{showTitle && <h2>Thank you for your order :)</h2>}
			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childVariants}>
				{pizza.toppings.map(topping => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	)
}

export default Order
