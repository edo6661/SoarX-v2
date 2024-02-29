"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
interface Props {
  params: {
    id: string;
  };
}
const EventEdit = ({ params }: Props) => {
  const toast = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [eventLocation, setEventLocation] = useState("");
  const [eventSlug, setEventSlug] = useState("");
  const [eventAvailability, setEventAvailability] = useState(null);
  const availableOptions = [
    { name: "Open", code: "O" },
    { name: "Closed", code: "C" },
  ];

  // useEffect(() => {
  //   const fetchEvent = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`/api/v1/event/single/${_id}`);
  //       const { event } = response.data;
  //       setEvent(event);
  //       setEventTitle(event.eventTitle || "");
  //       setEventDesc(event.eventDesc || "");
  //       setEventImage(event.eventImage || "");
  //       setEventDate(event.eventDate ? new Date(event.eventDate) : null);
  //       setEventLocation(event.eventLocation || "");
  //       setEventSlug(event.eventSlug || "");
  //       setEventAvailability(
  //         event.eventAvailability || {
  //           name: "Open",
  //           code: "O",
  //         }
  //       );
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Failed to fetch event data", error);
  //       setLoading(false);
  //       // Handle the error state here
  //     }
  //   };

  //   fetchEvent();
  // }, [_id]);

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent default form submission
  //   const eventData = {
  //     eventTitle,
  //     eventDesc,
  //     eventImage,
  //     eventDate,
  //     eventLocation,
  //     eventSlug,
  //     eventAvailability,
  //   };

  //   console.log(eventData);
  //   // Make a PUT request to update the event data
  //   axios
  //     .put(`/api/v1/event/update/${_id}`, eventData)
  //     .then((response) => {
  //       // Handle the response from the server
  //       console.log(response.data);
  //       router.push("/admin/events");
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the request
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <h2 className="text-2xl font-medium">Edit Event</h2>
      {/* {loading && <BackDrop />} */}
      {/* <Toast ref={toast} /> */}

      <form className="flex flex-col gap-5 pt-9">
        <div className="flex w-full gap-5 e-nfg ">
          {/* <InputText
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Event Title"
          />
          <Calendar
            value={eventDate}
            onChange={(e) => setEventDate(e.value)}
            className="w-full"
            placeholder="Event Date"
          /> */}
        </div>
        <div className="flex w-full  e-nfg  gap-5">
          {/* <InputText
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            placeholder="Event Location"
          />

          <InputText
            value={eventSlug}
            onChange={(e) => setEventSlug(e.target.value)}
            placeholder="Event Slug"
          /> */}
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
        </button>{" "}
      </form>
    </>
  );
};

export default EventEdit;
