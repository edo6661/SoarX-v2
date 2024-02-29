"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Newevent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventSlug, setEventSlug] = useState("");
  const [eventAvailability, setEventAvailability] = useState({
    name: "Open",
    code: "O",
  });
  const availableOptions = [
    { name: "Open", code: "O" },
    { name: "Closed", code: "C" },
  ];

  // const handleSubmit = (event) => {
  //   setLoading(true);

  //   event.preventDefault(); // Prevent default form submission

  //   // Perform any data validation or processing here

  //   // Create an object with the form data
  //   const eventData = {
  //     eventTitle,
  //     eventDesc,
  //     eventImage,
  //     eventDate,
  //     eventLocation,
  //     eventSlug,
  //     eventAvailability,
  //   };

  //   // Make a POST request to the server with the form data using Axios
  //   axios
  //     .post("/api/v1/event/new", eventData)
  //     .then((response) => {
  //       // Handle the response from the server
  //       console.log(response.data);
  //       setLoading(false);
  //       router.push("/admin/events");
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the request
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <h2 className="text-2xl font-medium">Add Event</h2>
      {/* {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      <form className="flex flex-col gap-5 pt-9">
        <div className="flex w-full gap-5 e-nfg">
          <input
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Event Title"
          />
          {/* <Calendar
            value={eventDate}
            onChange={(e) => setEventDate(e.value)}
            className="w-full"
            placeholder="Event Date"
          /> */}
        </div>
        <div className="flex w-full e-nfg  gap-5">
          <input
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            placeholder="Event Location"
          />

          <input
            value={eventSlug}
            onChange={(e) => setEventSlug(e.target.value)}
            placeholder="Event Slug"
          />
        </div>

        <div className="flex w-full e-nfg  gap-5">
          {/* <InputText
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
            placeholder="Event Image"
          />
          <Dropdown
            value={eventAvailability}
            onChange={(e) => setEventAvailability(e.value)}
            options={availableOptions}
            optionLabel="name"
            placeholder="Availability"
            className="w-full md:w-14rem"
          /> */}
        </div>
        {/* <InputTextarea
          value={eventDesc}
          onChange={(e) => setEventDesc(e.target.value)}
          rows={5}
          cols={30}
          placeholder="Event Description"
        /> */}

        <button className="btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Newevent;
