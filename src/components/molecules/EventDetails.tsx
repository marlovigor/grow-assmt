///make an event details in tsx to inclub button image and text for the cards

import React, { useState } from "react";
import CardButton from "../atoms/CardButton.tsx";
import Text from "../atoms/Text.tsx";
import Button from "../atoms/Button.tsx";
import CardImage from "../atoms/CardImage.tsx";

interface EventDetailsProps {
  title: string;
  text: string;
  image: string;
  dateTime?: string | null;
  location?: string | null;
  lat: number;
  lng: number;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  title,
  text,
  image,
  dateTime,
  location,
  lat,
  lng,
}) => {
  const [showText, setShowText] = useState(false);

  const handleToggleText = () => {
    setShowText(!showText);
  };

  return (
    <div style={{padding:10,borderRadius:"20px", maxWidth: "50%", backgroundColor:'steelBlue', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
      <CardImage src={image} alt={title} />
      <div>
      <Text text={title} />
      </div>
      <div>
        {dateTime && <Text text={dateTime} />}
        {location && <Text text={location} />}
      </div>
        <div>
        <button onClick={handleToggleText}>
          {showText ? "Hide Details" : "Show More"}
        </button>
        </div>
        <div>
        {showText && <Text text={text} />}
        </div>
        <div>
          {showText && (
            <iframe
              width="100%"
              height="300"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=15`}
              // Api key couldnt be obtained because of payment Issue
              allowFullScreen
            ></iframe>
          )}
        </div>
    </div>
  );
};

export default EventDetails;
