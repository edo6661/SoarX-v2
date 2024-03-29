"use client";
import { FollowingPointer } from "./_components/FollowingPointer";

const EventsPage = () => {
  return (
    <>
      <section className="section ">
        <div className="container ">
          <div className="">
            <h1 className="text-5xl">Ongoing Events</h1>
          </div>
          {/* TODO change after database change */}
          <section className="all-events pt-8">
            {/* {events && events.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {events.map((e) => (
                  <>
                    <FollowingPointer {...e} key={e.id} />
                  </>
                ))}
              </div>
            ) : (
              <h1>No Ongoing Events Currently</h1>
            )} */}
          </section>
        </div>
      </section>
      <section className="pb-32">
        <div className="container ">
          <div className="">
            <h1 className="text-5xl">Past Events</h1>
          </div>

          {/* TODO change after database done */}

          {/* {!loading ? (
            <section className="all-events pt-8">
              {pastEvents.length > 0 ? (
                <div className="grid-4">
                  {pastEvents.map((e: any) => (
                    <div className="events-box aim-box " key={e._id}>
                      <div className="events-img">
                        <Image
                          src={e.eventImage.asset._ref}
                          alt="Banner"
                          className="img-responsive"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="event-content">
                        <h2 className="text-2xl font-medium">{e.eventTitle}</h2>
                        <p className="pt-2">
                          {e.eventDesc.slice(0, 180) + "@."}
                        </p>
                        <p className="pt-2 flex items-center gap-2 font-medium">
                          <AiOutlineCalendar />
                          {formatDate(e.eventDate)}
                        </p>
                        <div className="flex items-center gap-3">
                          <Link href={`/${e.eventSlug}`}>
                            <button className="btn-primary mt-4">View</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h1>No Past Events Currently</h1>
              )}
            </section>
          ) : (
            <p>Skeleton TEmp</p>
          )} */}
        </div>
      </section>
    </>
  );
};

export default EventsPage;
