import React from 'react';
import Navbar from '../Components/UI/Nav/nav';
import Service from '../Components/Services/service';
import { Footer } from 'flowbite-react';
import { Rating, RatingAdvanced, RatingStar } from 'flowbite-react';
import { Label, Button, TextInput, Textarea } from 'flowbite-react';

import { ContactForm } from './form'

export default function Home() {
	return <>
		<header>
			<Navbar />
		</header>
		<main>
			<div className="hero-banner" id="home">
				<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
					<img className="object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg banner-image" src="https://www.flowbite-react.com/images/blog/image-1.jpg" alt="" />
					<div className="flex flex-col justify-between p-4 leading-normal">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-30">  End-to-end event planning</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-30">Empower your team with all the tools they need to streamline your event planning process—be it setting the event agenda, accepting sponsor proposals, addressing attendee questions, or even hosting rehearsals.</p>
					</div>
				</div>
			</div>
			<div className="services" id="services">
				<Service />
			</div>
			<div className="rating" id="rating">
				<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
					<div className="w-full rating-container">
						<Rating className="mb-2">
							<RatingStar />
							<RatingStar />
							<RatingStar />
							<RatingStar />
							<RatingStar filled={false} />
							<p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
						</Rating>
						<p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
						<RatingAdvanced percentFilled={70} className="mb-2">
							5 star
						</RatingAdvanced>
						<RatingAdvanced percentFilled={17} className="mb-2">
							4 star
						</RatingAdvanced>
						<RatingAdvanced percentFilled={8} className="mb-2">
							3 star
						</RatingAdvanced>
						<RatingAdvanced percentFilled={4} className="mb-2">
							2 star
						</RatingAdvanced>
						<RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
					</div>
				</div>
			</div>
			<div className="contact-us" id="contact">
				<h2 className='contact-title'> Contact Us</h2>
				<ContactForm />				
			</div >
		</main >
		<Footer container>
			<Footer.Brand
				href="https://flowbite.com"
				src="https://flowbite.com/docs/images/logo.svg"
				alt="Gaint Tech"
				name="Gaint Tech"
			/>
			<Footer.Copyright href="#" by="Gaint Tech" year={2022} />
			<Footer.LinkGroup>
				<Footer.Link href="#">Twitter</Footer.Link>
				<Footer.Link href="#">Facebook</Footer.Link>
				<Footer.Link href="#">Instagram</Footer.Link>
				<Footer.Link href="#">LinkedIn</Footer.Link>
			</Footer.LinkGroup>
		</Footer>
	</>
}
