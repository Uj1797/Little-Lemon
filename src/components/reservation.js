import React from 'react';

const Reservations = () => (
  <div>
    <h1>Make a Reservation</h1>
    <form>
      <label>
        Date:
        <input type="date" name="date" />
      </label>
      <label>
        Number of Diners:
        <select name="diners">
          {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>
      <label>
        Occasion:
        <input type="text" name="occasion" />
      </label>
      <label>
        Timing:
        <input type="time" name="time" />
      </label>
      <label>
        Setting:
        <select name="setting">
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
        </select>
      </label>
      <button type="submit">Reserve</button>
    </form>
  </div>
);

export default Reservations;