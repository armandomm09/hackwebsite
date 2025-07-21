import ScrollColumn from "./ScrollColumn";
export default function Schedule() {
  const schedule = {
    day1: [
      {
        hour: "07:00",
        title: "Staff Arrival",
        description: "All staff arrive to set up equipment and stations.",
      },
      {
        hour: "09:00",
        title: "Participant Check-In",
        description:
          "Participants begin arriving and check in at registration.",
      },
      {
        hour: "11:00",
        title: "Opening Ceremony",
        description: "Welcome remarks and official kickoff of Hack Puebla.",
      },
      {
        hour: "11:50",
        title: "Track Presentation",
        description: "Introduction of challenge tracks and themes.",
      },
      {
        hour: "12:20",
        title: "Hack Rules Overview",
        description: "Presentation of rules, guidelines, and judging criteria.",
      },
      {
        hour: "12:30",
        title: "Hacking Begins / Track Selection",
        description: "Teams choose their track and start coding.",
      },
      {
        hour: "15:00",
        title: "Lunch Service",
        description: "Food arrives for participants to refuel.",
      },
      {
        hour: "20:00",
        title: "Dinner Service",
        description: "Evening meal is served to support continued hacking.",
      },
      {
        hour: "23:00",
        title: "Evening Activities Start",
        description:
          "Optional nighttime activities begin (socials, mini-challenges).",
      },
    ],
    day2: [
      {
        hour: "08:00",
        title: "Breakfast Arrival",
        description: "Morning food service for participants to start fresh.",
      },
      {
        hour: "12:00",
        title: "Lunch Arrival",
        description: "Midday meal is served to sustain energy.",
      },
      {
        hour: "14:30",
        title: "End of Hacking / Short Break",
        description: "Teams wrap up coding and take a brief rest.",
      },
      {
        hour: "15:00",
        title: "Judging Begins",
        description: "Evaluation of projects by judges commences.",
      },
      {
        hour: "17:30",
        title: "Winners & Awards",
        description: "Winners are announced and prizes distributed.",
      },
      {
        hour: "18:00",
        title: "Closing Ceremony",
        description: "Final remarks and event closure.",
      },
    ],
  };
  return (
    <section
      id="schedule"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-16 bg-gray-50"
    >
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Schedule</h2> */}
      <div className="mt-10"></div>
      <div className="mt-2"></div>
      {/* Two Columns for Schedule */}
      <div className="relative w-full max-w-6xl flex gap-6">
        <ScrollColumn title={`Day 1 - 10:00 to 18:00`} data={schedule.day1} />
        <ScrollColumn title={`Day 2 - 09:00 to 18:00`} data={schedule.day2} />
      </div>
    </section>
  );
}
