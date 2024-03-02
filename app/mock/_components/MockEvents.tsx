import { format } from "date-fns";
import { EventWithCreator } from "@/types";
import ActionEvent from "./ActionEvent";
import { formatStr } from "@/constant";

const MockEvents = ({ events }: EventWithCreator) => {
  return (
    <div>
      {events.length > 0 && <h1>Mock Events</h1>}
      <div>
        {events.map((event) => (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <ActionEvent {...event!} />

            <p>Date: {format(event.date, formatStr)}</p>
            <p>Created at: {format(event.createdAt, formatStr)}</p>
            {event.updatedAt && (
              <p className=" text-slate-500/50">
                Edited At {format(event.updatedAt, formatStr)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockEvents;
