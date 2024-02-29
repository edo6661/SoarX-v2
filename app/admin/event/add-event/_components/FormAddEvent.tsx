"use client";
import ImageUpload from "@/components/ImageUpload";
import { Input } from "@/components/ui/input";
import { initialValueAddEvent } from "@/constant";
import useUser from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const FormAddEvent = ({ id }: { id: string }) => {
  const { data, isLoading } = useUser(id);
  const router = useRouter();

  const [formData, setFormData] = useState(initialValueAddEvent);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleDeleteImage = () =>
    setFormData((prev) => ({ ...prev, imageUrl: "" }));

  const { title, description, date, imageUrl, location, creatorId } = formData;
  if (isLoading) return <div>Temporary Loading...</div>;
  return (
    <>
      <h2 className="text-2xl font-medium">Add Event</h2>
      <h2 className="text-lg">test current user {data?.username}</h2>
      {/* {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) =>  theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      <form className="flex flex-col gap-5 pt-9" onSubmit={handleSubmit}>
        <div className="flex w-full gap-5 e-nfg">
          <Input
            placeholder="Title..."
            name="title"
            onChange={handleChange}
            value={title}
          />
          <Input
            placeholder="Date..."
            name="date"
            onChange={handleChange}
            value={date}
          />

          {/* <Calendar
            value={eventDate}
            onChange={(e) => setEventDate(e.value)}
            className="w-full"
            placeholder="Event Date"
          /> */}
        </div>
        <div className="flex w-full e-nfg  gap-5">
          <Input
            placeholder="Description..."
            name="description"
            onChange={handleChange}
            value={description}
          />
          <Input
            placeholder="Location..."
            onChange={handleChange}
            name="location"
            value={location}
          />
        </div>

        <div
          className={cn("grid grid-cols-2 gap-5", {
            "grid-cols-1": !imageUrl,
          })}
        >
          <ImageUpload setValue={setFormData} />
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="event image"
              width={240}
              height={240}
              className="w-full rounded-md object-contain"
            />
          )}

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

export default FormAddEvent;
