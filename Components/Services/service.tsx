import React from 'react';
import { Card } from 'flowbite-react';
import './service.css';

export default function Service() {
    return (

        <section className='service-list-container'>
            <h2 className='service-title'> Our Services</h2>
            <div className="service-list">
                <Card
                    className="max-w-sm item"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Corporate Events
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <Card
                    className="max-w-sm item"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Social Gatherings
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <Card
                    className="max-w-sm item"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Non - Profit and Fundraising Events
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <Card
                    className="max-w-sm item"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Conferences and Seminars
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </section>
    )
}