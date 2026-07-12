import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import { Calendar, Clock, Users, Sofa, CheckCircle, AlertCircle } from 'lucide-react';

interface ReservationFormData {
  date: string;
  timeSlot: string;
  tableType: string;
  guests: string;
}

const Reserve = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>({
    date: '',
    timeSlot: 'Afternoon 12:00-16:00',
    tableType: 'Standard Table',
    guests: '2'
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  if (!user) return null;

  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white dark:bg-geek-card border border-border rounded-3xl p-10 text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-text-h mb-4">Reservation Confirmed!</h1>
          <p className="text-text mb-8">
            Victory! We've secured your spot at the table, <span className="font-bold text-primary">{user.name}</span>.
            A confirmation email has been sent to your inbox.
          </p>
          <div className="bg-accent-bg p-6 rounded-2xl text-left space-y-3 mb-8">
            <div className="flex justify-between"><span className="text-sm text-text">Date:</span> <span className="font-bold">{formData.date}</span></div>
            <div className="flex justify-between"><span className="text-sm text-text">Time:</span> <span className="font-bold">{formData.timeSlot}</span></div>
            <div className="flex justify-between"><span className="text-sm text-text">Table:</span> <span className="font-bold">{formData.tableType}</span></div>
            <div className="flex justify-between"><span className="text-sm text-text">Party Size:</span> <span className="font-bold">{formData.guests} Players</span></div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-h mb-4">Reserve Your Table</h1>
        <p className="text-text">Claim your space in the hub. Private rooms and large tables fill up fast!</p>
      </div>

      <div className="bg-white dark:bg-geek-card border border-border rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-geek-bg p-8 text-white space-y-8">
            <div className="flex items-start">
              <div className="p-2 bg-primary/20 rounded-lg mr-4"><Calendar className="w-5 h-5 text-primary" /></div>
              <div>
                <h3 className="font-bold">Pick a Date</h3>
                <p className="text-sm text-gray-400">Book up to 30 days in advance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 bg-primary/20 rounded-lg mr-4"><Clock className="w-5 h-5 text-primary" /></div>
              <div>
                <h3 className="font-bold">Choose a Slot</h3>
                <p className="text-sm text-gray-400">4-hour blocks for maximum gaming.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 bg-primary/20 rounded-lg mr-4"><Sofa className="w-5 h-5 text-primary" /></div>
              <div>
                <h3 className="font-bold">Select Table</h3>
                <p className="text-sm text-gray-400">From solo spots to private RPG rooms.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-h">Date</label>
                <input
                  required
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-h">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none"
                  >
                    {[1,2,3,4,5,6,8,10,12].map(n => <option key={n} value={n}>{n} Players</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">Time Slot</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Afternoon 12:00-16:00', 'Evening 16:00-20:00', 'Night 20:00-24:00'].map(slot => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({...formData, timeSlot: slot})}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                      formData.timeSlot === slot
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                        : 'border-border text-text hover:border-primary'
                    }`}
                  >
                    {slot.split(' ')[0]}<br/>
                    <span className="text-[10px] opacity-70">{slot.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">Table Type</label>
              <select
                value={formData.tableType}
                onChange={(e) => setFormData({...formData, tableType: e.target.value})}
                className="w-full px-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none"
              >
                <option>Standard Table</option>
                <option>Large Group / RPG Table</option>
                <option>Premium Private Room</option>
              </select>
            </div>

            <div className="p-4 bg-accent-bg rounded-xl flex items-start">
              <AlertCircle className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
              <p className="text-xs text-text leading-relaxed">
                Reservations are held for 15 minutes. A $5 table fee per person will be applied to your final bill. Private rooms may have additional minimum spend requirements.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
