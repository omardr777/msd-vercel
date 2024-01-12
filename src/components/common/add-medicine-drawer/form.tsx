import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { createComponent } from '@/utils/create-component';
import { useFormContext } from 'react-hook-form';
import { Button, CalendarDateRangePicker, Input } from '@/components';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { ICreateMedicinDrawer } from '@/types';
import { FieldBlock } from './field-block';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
interface CreateMedicinForm {}

export const CreateMedicinForm = createComponent(() => {
	const form = useFormContext<ICreateMedicinDrawer>();
	return (
		<>
			<Form {...form}>
				<form
					// onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-8'
				>
					<div className='mx-auto w-full max-w-sm'>
						<div className='flex flex-col space-y-2'>
							<FieldBlock title='Details'>
								<div className='flex space-x-2'>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem className='flex-1'>
												<FormControl>
													<Input
														placeholder='Name'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='type'
										render={({ field }) => (
											<FormItem className='flex-1'>
												<Select
													onValueChange={
														field.onChange
													}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Type' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value='pill'>
															Pill
														</SelectItem>
														<SelectItem value='capsule'>
															Capsule
														</SelectItem>
														<SelectItem value='liquide'>
															Liqiude
														</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className='flex space-x-2'>
									<FormField
										control={form.control}
										name='amount'
										render={({ field }) => (
											<FormItem className='flex-1'>
												<FormControl>
													<Input
														type='number'
														placeholder='Amount'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='unit'
										render={({ field }) => (
											<FormItem className='flex-1'>
												<Select
													onValueChange={
														field.onChange
													}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder='Unit' />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value='mg'>
															mg
														</SelectItem>
														<SelectItem value='g'>
															g
														</SelectItem>
														<SelectItem value='ml'>
															ml
														</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</FieldBlock>
							<FieldBlock title='Duration and repition'>
								<FormField
									control={form.control}
									name='start_end_date'
									render={({ field }) => (
										<FormItem className='flex-1'>
											<FormControl>
												<CalendarDateRangePicker
													date={field.value}
													onChange={field.onChange}
													numberOfMonths={1}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='repition'
									render={({ field }) => (
										<FormItem className='flex-1'>
											<FormControl>
												<Input
													type='number'
													placeholder='Repition'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</FieldBlock>
							<FieldBlock
								title='Times'
								button={
									<Button
										type='button'
										size='sm'
										variant='secondary'
										onClick={() => {
											form.setValue('times', [
												...form.watch('times', ['']),
												'',
											]);
										}}
									>
										Add
									</Button>
								}
							>
								{form
									.watch('times', [''])
									.map((time: string, i: number) => {
										return (
											<>
												<div
													className='flex justify-between align-middle space-x-4'
													key={i}
												>
													<FormField
														control={form.control}
														name={`times.${i}`}
														render={({ field }) => {
															return (
																<>
																	<FormItem className='flex-1'>
																		<FormControl>
																			<Input
																				type='time'
																				placeholder='Time'
																				{...field}
																			/>
																		</FormControl>
																	</FormItem>
																</>
															);
														}}
													/>
													<Button
														size='icon'
														variant='ghost'
														type='button'
														onClick={() => {
															form.setValue(
																'times',
																form
																	.watch(
																		'times',
																		[]
																	)
																	.filter(
																		(
																			_: any,
																			index: number
																		) =>
																			index !==
																			i
																	)
															);
														}}
													>
														<IoIosRemoveCircleOutline
															className='w-6 h-6'
															style={{
																color: 'red',
															}}
														/>
													</Button>
												</div>
											</>
										);
									})}
							</FieldBlock>
						</div>
					</div>
				</form>
			</Form>
		</>
	);
});
