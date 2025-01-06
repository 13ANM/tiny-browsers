import SquareGrid from './assets/square-grid.svg?react'
import Plus from './assets/plus.svg?react'
import SquareArrowUp from './assets/square-arrow-up.svg?react'
import Lock from './assets/lock.svg?react'
import ChevronLeft from './assets/chevron-left.svg?react'
import ChevronRight from './assets/chevron-right.svg?react'
import Shield from './assets/shield.svg?react'
import SidebarToggle from './assets/sidebar-toggle.svg?react'
import Refresh from './assets/refresh.svg?react'

export const Header = () => (
	<div className='flex items-center justify-between px-4 py-3 bg-[#1F2224] rounded-t-lg shadow-lg'>
		<div className='flex gap-2 items-center'>
			<span className='w-3 h-3 bg-red-500 rounded-full'></span>
			<span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
			<span className='w-3 h-3 bg-green-500 rounded-full'></span>

			<div className='flex items-center gap-3'>
				<SidebarToggle className='mx-2' />
				<ChevronLeft />
				<ChevronRight />
			</div>
		</div>

		<div className='flex items-center gap-3'>
			<Shield />

			<div className='flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-transparent flex-1 w-[320px]'>
				<Lock />
				<input
					type='text'
					className='flex-1 bg-transparent text-gray-100 text-sm px-3 focus:outline-none'
					value='apple.com'
					readOnly
				/>
				<Refresh />
			</div>
		</div>

		<div className='flex items-center gap-4'>
			<SquareArrowUp />
			<Plus />
			<SquareGrid />
		</div>
	</div>
)
