import React from "react";
import FormAddEvent from "./_components/FormAddEvent";
import { currentUser } from "@clerk/nextjs";

const AddEventPage = async () => {
  const self = await currentUser();

  return (
    <section>
      <article>
        <FormAddEvent id={self?.id!} />
      </article>
    </section>
  );
};

export default AddEventPage;
