
import React from "react";
import EventDetails from "../molecules/EventDetails.tsx";


interface Props {
    title: string;
    dateTime: string;
    date: string;
    time: string;
    info: string;
    location: string;
    image: string;
    text: string;
    url: string;
    lat: number;
    lng: number;
    showDetails: boolean;
    onClick: () => void;
  }
  
  const EventCard: React.FC<Props> = (props) => {
    return (
      <div style={{margin:'auto', minWidth: '300px', maxWidth: '300px',minHeight:'200px', borderWidth: 5,}}>
        <EventDetails
          title={props.title}
          text={props.text}
          image={props.image}
          dateTime={props.dateTime}
          location={props.location}
          lat={props.lat}
          lng={props.lng}

         />
      </div>
    );
  };
  
  export default EventCard;