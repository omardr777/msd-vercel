'use client';

import { createComponent } from '@/utils/create-component';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	Button,
} from '@/components/ui';
import { IoMdAdd } from 'react-icons/io';
import { AddDrawerBodyContent } from '.';
import { Dispatch, SetStateAction } from 'react';

interface IMedDrawer {
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CreateMedicineDrawer = createComponent<IMedDrawer>(
	({ isOpen, setOpen }) => {
		return (
			<Drawer open={isOpen} onOpenChange={setOpen}>
				<DrawerContent>
					<AddDrawerBodyContent setOpen={setOpen} />
				</DrawerContent>
			</Drawer>
		);
	}
);
