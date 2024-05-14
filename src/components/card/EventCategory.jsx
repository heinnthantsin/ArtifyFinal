import React from 'react';
import EventCard from './EventCard';

const EventCategory = ({ title,events }) => (
    <>
    <h2 className='text-titleColor py-4 lg:py-8 lg:text-3xl text-xl font-bold'>{title}</h2>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
    {events.map((event) => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
  </>
);

export default EventCategory;
