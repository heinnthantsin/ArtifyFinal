import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
// import CardList from '../components/card/CardList'
import EventData from '../data/EventData'
import EventCategory from '../components/card/EventCategory'

function Event() {
  TabTitle("Artify | Event")
  return (
    <div>
      
      {/* <h1>UpComing Events</h1> */}
      
      <EventCategory title="Upcoming Events" events={EventData.upcoming_events}/>
      <EventCategory title="Knowledge Sharing Events" events={EventData.knowledge_sharing_events}/>
      <EventCategory title="Featured Events" events={EventData.featured_events}/>


      
      

    </div>
  )
}

export default Event