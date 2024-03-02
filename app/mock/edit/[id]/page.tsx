import { getEvent } from "@/services/events";
import FormEvents from "../../_components/FormEvents";
import { getCurrentUser } from "@/services/user";
import { notFound } from "next/navigation";
import { editEvent } from "@/actions/event";

interface EditPageProps {
  params: {
    id: string;
  };
}
const EditPage = async ({ params }: EditPageProps) => {
  const { id } = params;
  const event = await getEvent(id);
  const currentUser = await getCurrentUser();

  if (!event) return notFound();
  return (
    <section className="container">
      <h1>Edit Page</h1>
      {JSON.stringify(event)}
      <FormEvents
        currentUserId={currentUser?.id!}
        event={event}
        action={editEvent}
      />
    </section>
  );
};

export default EditPage;
