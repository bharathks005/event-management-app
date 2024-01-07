'use server'

import { z } from 'zod';
import { MongoClient } from "mongodb";

interface State {
	message: string;	
}

export default async function createUser(prevState: State, formData: FormData): Promise<State> {
	try {
		const schema = z.object({
			firstname: z.string().min(1),
			lastname: z.string().min(1),
			email: z.string().min(1),
			phone: z.string().min(1),
			notes: z.string().min(1),
		})
		const parse = schema.safeParse({
			firstname: formData.get('firstname'),
			lastname: formData.get('lastname'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			notes: formData.get('notes'),
		});	
		if (!parse.success) {
			return { message: 'Failed to submit the form' }
		}	 
		const data = {
			firstname: parse.data.firstname,
			lastname: parse.data.lastname,
			email: parse.data.email,
			phone: parse.data.phone,
			notes: parse.data.notes,
		}	
		const dbUrl = process.env.DATABASE_URL as string;
		const client = await MongoClient.connect(dbUrl);
		const db = client.db();
		const meetupCollections = db.collection('query');
		await meetupCollections.insertOne({
			...data
		});	
		return { message: 'submited the form successfully!!' }
	} catch (error) {
		return { message: 'Failed to submit the form' }
	}
	
}