import './App.css'

const stats = [
  { label: 'Doctors Available', value: 24, trend: '+3 this week' },
  { label: 'Appointments Today', value: 58, trend: '+12% vs yesterday' },
  { label: 'Lab Reports Ready', value: 17, trend: '5 urgent' },
  { label: 'Bed Occupancy', value: '82%', trend: '12 beds open' },
]

const appointments = [
  { patient: 'Emma Wilson', doctor: 'Dr. Sarah Lee', time: '09:30 AM', type: 'General Checkup' },
  { patient: 'Liam Johnson', doctor: 'Dr. Robert Smith', time: '10:15 AM', type: 'Cardiology' },
  { patient: 'Olivia Brown', doctor: 'Dr. Maria Garcia', time: '11:00 AM', type: 'Dermatology' },
  { patient: 'Noah Davis', doctor: 'Dr. John Patel', time: '11:45 AM', type: 'Orthopedics' },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="hero__eyebrow">City Hospital</p>
          <h1>HealthCare Appointment System</h1>
          <p className="hero__text">
            Manage patient bookings, doctor schedules, and clinic activity from one clean dashboard.
          </p>
        </div>
        <button type="button" className="hero__button">
          + New Appointment
        </button>
      </header>

      <section className="stats" aria-label="hospital statistics">
        {stats.map((item) => (
          <article className="card" key={item.label}>
            <p className="card__label">{item.label}</p>
            <p className="card__value">{item.value}</p>
            <p className="card__trend">{item.trend}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <div className="panel__header">
          <h2>Upcoming Appointments</h2>
          <a href="#">View all</a>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Time</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={`${appointment.patient}-${appointment.time}`}>
                  <td>{appointment.patient}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.time}</td>
                  <td>
                    <span className="chip">{appointment.type}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default App
