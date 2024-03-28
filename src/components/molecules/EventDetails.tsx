import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Text from "../atoms/Text.tsx";
import CardImage from "../atoms/CardImage.tsx";

interface Props {
  image: string;
  title: string;
  dateTime?: string;
  location?: string;
  text: string;
  lat: number;
  lng: number;
}

const EventDetails: React.FC<Props> = ({
  image,
  title,
  dateTime,
  location,
  text,
  lat,
  lng,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        marginBottom: 30,
        padding: 10,
        borderRadius: "20px",
        minWidth: "60%",
        minHeight:250,
        backgroundColor: "steelBlue",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardImage src={image} alt={title} />
      <div>
        <Text text={title} />
      </div>
      <div style={{marginBottom:12}}>
        {dateTime && <Text text={dateTime} />}
        {location && <Text text={location} />}
      </div>
      <div>
        <button onClick={handleOpen}>
          {open ? "Hide Details" : "Show More"}
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Text text={text} />
          </Typography>
          <iframe
            width="100%"
            height="300"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=15`}
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
};

export default EventDetails;
