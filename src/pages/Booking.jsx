import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");
  const [movie, setMovie] = useState("");
  const [showtime, setShowtime] = useState("");

  async function handleBooking() {
    if (!name || !tickets || !movie || !showtime) {
      alert("Please fill all details");
      return;
    }

    const { data, error } = await supabase.from("movie_bookings").insert([
      {
        name: name,
        tickets: Number(tickets),
        movie: movie,
        showtime: showtime,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Booking failed");
      return;
    }

    alert("Movie Ticket Booked Successfully!");
    setName("");
    setTickets("");
    setMovie("");
    setShowtime("");
  }

  return (
    <main className="booking-page">
      <h1>Book Your Movie Ticket</h1>
      <div className="booking-form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="tickets">Number of Tickets</label>
        <input
          id="tickets"
          type="number"
          min="1"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          placeholder="Enter number of tickets"
        />

        <label htmlFor="movie">Select Movie</label>
        <select
          id="movie"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        >
          <option value="">-- Select Movie --</option>
          <option value="Inception">Inception</option>
          <option value="Interstellar">Interstellar</option>
        </select>

        <label htmlFor="showtime">Select Showtime</label>
        <select
          id="showtime"
          value={showtime}
          onChange={(e) => setShowtime(e.target.value)}
        >
          <option value="">-- Select Showtime --</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
        </select>

        <button onClick={handleBooking}>Confirm Booking</button>
      </div>

      <section className="booking-details">
        <h3>Live Ticket Preview</h3>
        <p>Name: <strong>{name || "-"}</strong></p>
        <p>Tickets: <strong>{tickets || "-"}</strong></p>
        <p>Movie: <strong>{movie || "-"}</strong></p>
        <p>Showtime: <strong>{showtime || "-"}</strong></p>
      </section>
    </main>
  );
}

export default Booking;