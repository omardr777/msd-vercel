import {useQuery} from '@tanstack/react-query'
import { medKey } from '.'
import { ICreateMedicinDrawer, IMedicine } from '@/types';

const test = [
	{
		name: 'Paracetamol',
		type: 'Tablet',
		amount: '500',
		unit: 'mg',
		start_end_date: {
			from: '2024-01-01',
			to: '2024-01-10',
		},
		repition: 'daily',
		times: ['morning', 'evening'],
		id: '12345',
	},
	{
		name: 'Amoxicillin',
		type: 'Capsule',
		amount: '250',
		unit: 'mg',
		start_end_date: {
			from: '2024-02-15',
			to: '2024-02-28',
		},
		repition: 'twice a day',
		times: ['afternoon', 'night'],
		id: '67890',
	},
	{
		name: 'Ibuprofen',
		type: 'Tablet',
		amount: '200',
		unit: 'mg',
		start_end_date: {
			from: '2024-03-05',
			to: '2024-03-15',
		},
		repition: 'as needed',
		times: ['whenever necessary'],
		id: '54321',
	},
	{
		name: 'Cough Syrup',
		type: 'Liquid',
		amount: '5',
		unit: 'ml',
		start_end_date: {
			from: '2024-04-20',
			to: '2024-05-01',
		},
		repition: 'three times a day',
		times: ['morning', 'afternoon', 'evening'],
		id: '98765',
	},
	{
		name: 'Vitamin D',
		type: 'Tablet',
		amount: '1000',
		unit: 'IU',
		start_end_date: {
			from: '2024-06-10',
			to: '2024-06-30',
		},
		repition: 'daily',
		times: ['morning'],
		id: '13579',
	},
	{
		name: 'Insulin',
		type: 'Injection',
		amount: '10',
		unit: 'units',
		start_end_date: {
			from: '2024-07-15',
			to: '2024-08-01',
		},
		repition: 'before meals',
		times: ['before breakfast', 'before dinner'],
		id: '24680',
	},
	{
		name: 'Antihistamine',
		type: 'Tablet',
		amount: '25',
		unit: 'mg',
		start_end_date: {
			from: '2024-09-05',
			to: '2024-09-15',
		},
		repition: 'twice daily',
		times: ['morning', 'night'],
		id: '11223',
	},
	{
		name: 'Eye Drops',
		type: 'Liquid',
		amount: '1',
		unit: 'drop',
		start_end_date: {
			from: '2024-10-10',
			to: '2024-10-20',
		},
		repition: 'as needed',
		times: ['whenever necessary'],
		id: '33445',
	},
	{
		name: 'Thyroid Medication',
		type: 'Tablet',
		amount: '50',
		unit: 'mcg',
		start_end_date: {
			from: '2024-11-15',
			to: '2024-11-30',
		},
		repition: 'daily',
		times: ['morning'],
		id: '55667',
	},
	{
		name: 'Blood Pressure Medication',
		type: 'Tablet',
		amount: '10',
		unit: 'mg',
		start_end_date: {
			from: '2024-12-05',
			to: '2024-12-15',
		},
		repition: 'twice daily',
		times: ['morning', 'evening'],
		id: '77889',
	},
];

const fetchMedicines = async () => {
	return test;
	// const res = await fetch('http://localhost:4000/meds');
	// return ((await res.json()) ?? test) as IMedicine[] | undefined;
};

export const useGetMedicines = ()=>{

    return useQuery({queryKey:[medKey],queryFn: ()=> fetchMedicines()})
}
