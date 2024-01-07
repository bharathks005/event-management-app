'use client'

import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import createUser from '@/app/api/actions'
import { Label, Button, TextInput, Textarea } from 'flowbite-react';
import { HiMail, HiFire } from 'react-icons/hi';
import { Toast } from 'flowbite-react';

const initialState = {
    message: ''
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" aria-disabled={pending}>Submit</Button>
    )
}

export function ContactForm() {
    const [state, formAction] = useFormState(createUser, initialState);

    return (
        <>
            <form className="flex max-w-md flex-col gap-4 m-auto" action={formAction}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="firstname" value="First Name" />
                    </div>
                    <TextInput id="firstname" name="firstname" type="text" placeholder="First Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="lastname" value="Last Name" />
                    </div>
                    <TextInput id="lastname" name="lastname" type="text" placeholder="Last Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="lastname" value="Email" />
                    </div>
                    <TextInput id="email" type="email" name="email" icon={HiMail} placeholder="Email" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="phone" value="Phone number" />
                    </div>
                    <TextInput id="phone" type="number" name="phone" placeholder="Phone number" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="notes" value="Notes" />
                    </div>
                    <Textarea id="notes" placeholder="Notes" name="notes" />
                </div>
                <SubmitButton />
            </form>
            {
                (state.message !== '') && (
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                            <HiFire className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">{state.message}</div>
                        <Toast.Toggle />
                    </Toast>
                )
            }           
        </>

    )
}