// 'use client';
import { createComponent } from '@/utils/create-component';
import { Button, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components';
import { CreateMedicinForm } from './form';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { ICreateMedicinDrawer } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCreateMedicine } from '@/services/medicins/create';

interface ICreateDrawerBody {
	setOpen: (value: boolean) => void;
}

export const AddDrawerBodyContent = createComponent<ICreateDrawerBody>(
	({ setOpen }) => {
		const form = useForm<ICreateMedicinDrawer>({
			resolver: zodResolver(ICreateMedicinDrawer),
		});

		const { mutateAsync, isPending } = useCreateMedicine();

		const onSubmit: SubmitHandler<ICreateMedicinDrawer> = async (data) => {
			await mutateAsync(data);
			setOpen(false);
		};

		return (
			<>
				<DrawerHeader>
					<DrawerTitle>Add medicine</DrawerTitle>
				</DrawerHeader>
				<FormProvider {...form}>
					<ScrollArea>
						<CreateMedicinForm />
					</ScrollArea>
				</FormProvider>
				<DrawerFooter className='mt-10'>
					<Button onClick={form.handleSubmit(onSubmit)} type='submit'>
						{isPending ? 'Creating...' : 'Create'}
					</Button>
				</DrawerFooter>
			</>
		);
	}
);
