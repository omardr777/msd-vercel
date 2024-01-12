'use client';

import { createComponent } from '@/utils/create-component';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import { GoHomeFill } from 'react-icons/go';
import { MdHistoryEdu } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import { CreateMedicineDrawer } from './add-medicine-drawer/add-med';
import { CgProfile } from 'react-icons/cg';
import { BsGrid } from 'react-icons/bs';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { GoHome } from 'react-icons/go';
import { motion } from 'framer-motion';
import { AnimatedIcon } from './navbar/animated-icon';
import { usePathname } from 'next/navigation';
export const Navbar = createComponent(() => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const stroke = 'text-primary';
	return (
		<>
			<nav className='fixed z-50 w-full py-1 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600'>
				<div className='flex w-full flex-wrap items-center justify-evenly px-3'>
					<Link href='/'>
						<Button variant='ghost'>
							<AnimatedIcon>
								<GoHome
									className={`w-6 h-6 ${
										pathname === '/' && stroke
									}`}
								/>
							</AnimatedIcon>
						</Button>
					</Link>
					<Link href='/meds'>
						<Button variant='ghost'>
							<AnimatedIcon>
								<BsGrid
									className={`w-6 h-6 ${
										pathname === '/meds' && stroke
									}`}
								/>
							</AnimatedIcon>
						</Button>
					</Link>
					<Button
						className='w-14 h-14 rounded-3xl'
						onClick={() => setIsOpen((prev) => !prev)}
					>
						<IoMdAdd className='w-7 h-7' />
					</Button>
					<Link href='/history'>
						<AnimatedIcon>
							<Button variant='ghost'>
								<HiOutlineArchiveBox
									className={`w-6 h-6 ${
										pathname === '/history' && stroke
									}`}
								/>
							</Button>
						</AnimatedIcon>
					</Link>
					<Link href='/profile'>
						<AnimatedIcon>
							<Button variant='ghost'>
								<CgProfile
									className={`w-6 h-6 ${
										pathname === '/profile' && stroke
									}`}
								/>
							</Button>
						</AnimatedIcon>
					</Link>
					<CreateMedicineDrawer isOpen={isOpen} setOpen={setIsOpen} />
				</div>
			</nav>
		</>
	);
});