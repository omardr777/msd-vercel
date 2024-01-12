import {z} from 'zod'



const medicineType = z.enum(['pill','capsule','liquied'])
const medicineUnit = z.enum(['mg','g','ml'])

export const IMedicineSchema = z.object({
	name: z.string().min(1).trim(),
	type: medicineType,
	amount: z.string(),
	unit: medicineUnit,
	start_end_date: z.object({
		from: z.date(),
		to: z.date(),
	}),
	repition: z.string(),
	times: z.array(z.string().trim().min(1)),
	id: z.string(),
});
export type IMedicine = z.infer<typeof IMedicineSchema>;

export const ICreateMedicinDrawer = IMedicineSchema.omit({ id: true });
export type ICreateMedicinDrawer = z.infer<typeof ICreateMedicinDrawer>;

