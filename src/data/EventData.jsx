import img1 from '../assets/img/events/event1.jpg';
import img2 from '../assets/img/events/event2.jpg';
import img3 from '../assets/img/events/event3.jpg';
import img4 from '../assets/img/events/event4.jpg';
import img8 from '../assets/img/events/featured1.jpg'
import img9 from '../assets/img/events/featured2.jpg'
import img10 from '../assets/img/events/featured3.jpg'
import img11 from '../assets/img/events/featured4.jpg'
import img5 from '../assets/img/events/sharing1.jpg'
import img6 from '../assets/img/events/sharing2.jpg'
import img7 from '../assets/img/events/sharing3.jpg'
// import img12 from '../assets/img/events/sharing4.jpg'



const eventData = {
  upcoming_events: [
    {
      id: 1,
      img: img1,
      "title": "Abstract Painting Workshop",
      "description": "Explore abstract painting techniques in this dynamic workshop. Learn to express emotions and concepts through non-representational art forms.",
      "date": "July 10-11, 2024",
      "time": "10:00 AM - 4:00 PM",
      "location": "Artify Studio, 123 Main Street, Cityville",
      "instructor": "Lisa Wong",
      "price": "$80 per person (materials included)"
    },
    {
      id: 2,
      img: img2,
      "title": "Digital Sculpture Masterclass",
      "description": "Join us for an in-depth exploration of digital sculpture creation. Participants will learn advanced techniques using digital sculpting software.",
      "date": "August 20-21, 2024",
      "time": "1:00 PM - 5:00 PM",
      "location": "Online (Zoom)",
      "instructor": "John Smith",
      "price": "$100 per person"
    },
    {
      id: 3,
      img: img3,
      "title": "Watercolor Landscape Workshop",
      "description": "Capture the beauty of landscapes in watercolor. Learn techniques for creating vibrant and expressive landscape paintings.",
      "date": "September 5, 2024",
      "time": "9:00 AM - 12:00 PM",
      "location": "Artify Studio, 123 Main Street, Cityville",
      "instructor": "Emily Johnson",
      "price": "$60 per person (materials not included)"
    },
    {
      id: 4,
      img: img4,
      "title": "Figure Drawing Workshop: Anatomy Studies",
      "description": "Improve your figure drawing skills with a focus on anatomy studies. Learn to accurately depict the human form through observation and understanding of anatomy.",
      "date": "October 15-16, 2024",
      "time": "10:00 AM - 3:00 PM",
      "location": "Artify Studio, 123 Main Street, Cityville",
      "instructor": "Michael Brown",
      "price": "$90 per person"
    }
  ],
  knowledge_sharing_events: [
    { 
      id: 5,
      img: img5,
      "title": "Modern Art Movements Lecture Series Part - 1",
      "description": "Explore modern art movements from Cubism to Pop Art in this comprehensive lecture series. Gain insights into the key artists and artworks of each movement.",
      "date": "Every Wednesday evening in July 2024",
      "time": "6:30 PM - 8:30 PM",
      "location": "Artify Gallery, 456 Elm Avenue, Townsville",
      "speaker": "Dr. Amanda White",
      "price": "Free for Artify members, $25 for non-members per lecture"
    },
    {  id: 6,
      img: img6,
      "title": "Creative Writing Workshop: Crafting Short Stories",
      "description": "Develop your skills in crafting short stories in this interactive workshop. Explore narrative techniques and receive feedback on your writing.",
      "date": "August 8-9, 2024",
      "time": "2:00 PM - 5:00 PM",
      "location": "Artify Conference Room, 789 Oak Street, Artville",
      "facilitator": "David Miller",
      "price": "$70 per person"
    },
    {  id: 7,
      img: img7,
      "title": "Art Therapy Seminar: Exploring Healing through Art",
      "description": "Discover the therapeutic benefits of art-making in this informative seminar. Learn how art can be used as a tool for self-expression and healing.",
      "date": "September 20, 2024",
      "time": "6:00 PM - 8:00 PM",
      "location": "Online (Zoom)",
      "speaker": "Dr. Lisa Carter",
      "price": "$20 per person"
    },
    { id: 8,
      img: img8,
      "title": "Art Business Basics Workshop",
      "description": "Gain practical knowledge and skills for starting and managing an art business. Topics include pricing, marketing, and legal considerations.",
      "date": "October 25, 2024",
      "time": "7:00 PM - 9:00 PM",
      "location": "Artify Conference Room, 789 Oak Street, Artville",
      "speaker": "Business Experts Panel",
      "price": "$30 per person"
    }
  ]
  ,
  featured_events: [
    { id: 9,
      img: img9,
      "title": "Art Exhibition Opening: Emerging Artists Showcase",
      "description": "Celebrate the work of emerging artists in our latest exhibition opening. View a diverse range of artworks and meet the talented artists behind them.",
      "date": "July 5, 2024",
      "time": "6:00 PM - 9:00 PM",
      "location": "Artify Gallery, 456 Elm Avenue, Townsville",
      "exhibitors": ["Emerging Artists Collective"],
      "price": "Free admission"
    },
    { id: 10,
      img: img10,
      "title": "Artisan Market: Handmade Crafts and Artworks",
      "description": "Explore a variety of handmade crafts and artworks at our artisan market. Support local artists and artisans while discovering unique treasures.",
      "date": "August 12-13, 2024",
      "time": "10:00 AM - 5:00 PM",
      "location": "Artify Plaza, 789 Oak Street, Artville",
      "exhibitors": ["Local Artisans"],
      "price": "Free admission"
    },
    { id: 11,
      img: img11,
      "title": "Art Film Screening: Documentary Showcase",
      "description": "Join us for an evening of art-themed documentaries showcasing the lives and works of renowned artists. Q&A session with filmmakers to follow.",
      "date": "September 30, 2024",
      "time": "7:30 PM - 9:30 PM",
      "location": "Artify Cinema, 123 Main Street, Cityville",
      "price": "$10 per person"
    }
  ]
};
export default eventData;
