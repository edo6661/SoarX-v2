"use client";
import useEvents from "@/hooks/useEvents";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const Events = () => {
  const toast = useRef(null);
  const { data: allEvents } = useEvents();
  // const accept = (id) => {
  //   deleteProduct(id);
  //   toast.current.show({
  //     severity: "warn",
  //     summary: "Confirmed",
  //     detail: "You have successfully deleted",
  //     life: 3000,
  //   });
  // };

  // const reject = () => {
  //   toast.current.show({
  //     severity: "info",
  //     summary: "Rejected",
  //     detail: "You have cancelled",
  //     life: 3000,
  //   });
  // };

  // const deleteProduct = (id) => {
  //   setLoading(true);
  //   axios
  //     .delete(`/api/v1/event/delete/${id}`)
  //     .then((response) => {
  //       getEvents(); // Fetch updated events after deletion
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  // const confirm2 = (id) => {
  //   confirmDialog({
  //     message: "Do you want to delete this record?",
  //     header: "Delete Confirmation",
  //     icon: "pi pi-info-circle",
  //     acceptClassName: "p-button-danger",
  //     accept: () => accept(_id),
  //     reject,
  //   });
  // };

  // const getEvents = () => {
  //   setLoading(true);
  //   axios
  //     .get("/api/v1/event/closed")
  //     .then((response) => {
  //       console.log(response);
  //       setAllEvents(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   getEvents();
  // }, []);

  return (
    <>
      {/* <Toast ref={toast} /> */}
      {/* <ConfirmDialog /> */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Past Events</h2>
        <Link href={"/admin/events/new"}>
          <button className="btn-primary">Add Events</button>
        </Link>
      </div>
      <section className="all-events pt-8">
        <div className="grid-4">
          {allEvents &&
            allEvents.map((e) => (
              <div className="events-box aim-box" key={e.id}>
                <div className="events-img">
                  <Image
                    src={e.imageUrl}
                    alt="Banner"
                    className="img-responsive"
                    width={200}
                    height={150}
                  />
                </div>
                <div className="event-content">
                  <h2 className="text-2xl font-medium">{e.title}</h2>
                  <p className="pt-2">{e.description.slice(0, 180) + "..."}</p>
                  <p className="pt-2 flex items-center gap-2 font-medium">
                    <AiOutlineCalendar />
                    {formatDate(e.createdAt)}
                  </p>
                  <div className="flex items-center gap-3">
                    <Link href={`/admin/events/edit/${e.id}`}>
                      <button className="btn-primary mt-4">Edit</button>
                    </Link>
                    {/* <button
                    className="btn-primary red mt-4"
                    onClick={() => confirm2(e.id)}
                  >
                    Delete
                  </button> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Events;
