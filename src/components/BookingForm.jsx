import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Components.css';

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [date, setDate] = useState(null); // for datepicker

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzgL0kMF2_vOiqp1tEEr2Je4YD7388wySPaKUqObJNC7GaEV_JWwEWB8uMkeE0raBOU/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const form = e.target;
    const formData = new FormData(form);
    if (date) formData.set('Date', date.toLocaleDateString('en-GB')); // dd/mm/yyyy

    fetch(scriptURL, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setMessageType('success');
          setMessage(data.message);
          form.reset();
          setDate(null);
        } else {
          setMessageType('error');
          setMessage(data.message || 'Oops! Something went wrong ❤️');
        }
      })
      .catch(() => {
        setMessageType('error');
        setMessage('Oops! Something went wrong ❤️');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="book">
      <div className="pookie-card">
        <h2>Book Your Event</h2>

        <form onSubmit={handleSubmit} className="single-column-form">

          {/* Full Name */}
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            className="premium-input"
            required
          />

          {/* Mobile Number */}
          <input
            type="tel"
            name="Mobile"
            placeholder="Mobile Number"
            className="premium-input"
            required
          />

          {/* Email Address */}
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            className="premium-input"
            required
          />

          {/* Date Picker */}
          <label htmlFor="date" className="premium-label">
            Select Date
          </label>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            placeholderText="dd-mm-yyyy"
            className="premium-input"
            dateFormat="dd-MM-yyyy"
            required
          />

          {/* Event Type */}
          <select name="EventType" className="premium-input" required>
            <option value="">Select Event Type...</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
            <option value="Social">Social</option>
            <option value="Others">Others</option>
          </select>

          {/* Dream Vision Message */}
          <textarea
            name="Message"
            placeholder="Your Dream Vision"
            rows="4"
            className="premium-input"
            required
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="pookie-btn" disabled={loading}>
            {loading ? 'Please wait... submitting ❤️' : 'Confirm Booking ❤️'}
          </button>
        </form>

        {/* Success / Error Message */}
        {message && !loading && (
          <p className={messageType === 'success' ? 'success-msg' : 'error-msg'}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
