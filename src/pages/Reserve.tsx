import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext.tsx';
import { Calendar, Clock, Users, Sofa, CheckCircle, AlertCircle } from 'lucide-react';

type TimeSlot = 'afternoon' | 'evening' | 'night';
type TableType = 'standard' | 'large' | 'premium';

interface ReservationFormData {
  date: string;
  timeSlot: TimeSlot;
  tableType: TableType;
  guests: string;
}

const timeSlots: TimeSlot[] = ['afternoon', 'evening', 'night'];
const tableTypes: TableType[] = ['standard', 'large', 'premium'];

const Reserve = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>({
    date: '',
    timeSlot: 'afternoon',
    tableType: 'standard',
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

  const slotLabel = (slot: TimeSlot) => t(`reserve.slot${slot.charAt(0).toUpperCase()}${slot.slice(1)}`);
  const slotTime = (slot: TimeSlot) => t(`reserve.slot${slot.charAt(0).toUpperCase()}${slot.slice(1)}Time`);
  const tableLabel = (table: TableType) => t(`reserve.table${table.charAt(0).toUpperCase()}${table.slice(1)}`);

  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white dark:bg-geek-card border border-border rounded-3xl p-10 text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-text-h mb-4">{t('reserve.confirmedTitle')}</h1>
          <p className="text-text mb-8">
            {t('reserve.confirmedMessage', { name: user.name })}
          </p>
          <div className="bg-accent-bg p-6 rounded-2xl text-left space-y-3 mb-8">
            <div className="flex justify-between"><span className="text-sm text-text">{t('reserve.summaryDate')}</span> <span className="font-bold">{formData.date}</span></div>
            <div className="flex justify-between"><span className="text-sm text-text">{t('reserve.summaryTime')}</span> <span className="font-bold">{slotLabel(formData.timeSlot)} {slotTime(formData.timeSlot)}</span></div>
            <div className="flex justify-between"><span className="text-sm text-text">{t('reserve.summaryTable')}</span> <span className="font-bold">{tableLabel(formData.tableType)}</span></div>
            <div className="flex justify-between"><span className="text-sm text-text">{t('reserve.summaryParty')}</span> <span className="font-bold">{t('reserve.summaryPartyValue', { count: formData.guests })}</span></div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all"
          >
            {t('reserve.backToHome')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-h mb-4">{t('reserve.title')}</h1>
        <p className="text-text">{t('reserve.subtitle')}</p>
      </div>

      <div className="bg-white dark:bg-geek-card border border-border rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-geek-bg p-8 text-white space-y-8">
            <div className="flex items-start">
              <div className="p-2 bg-primary/20 rounded-lg me-4"><Calendar className="w-5 h-5 text-primary" /></div>
              <div>
                <h3 className="font-bold">{t('reserve.pickDateTitle')}</h3>
                <p className="text-sm text-gray-400">{t('reserve.pickDateDesc')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 bg-primary/20 rounded-lg me-4"><Clock className="w-5 h-5 text-primary" /></div>
              <div>
                <h3 className="font-bold">{t('reserve.chooseSlotTitle')}</h3>
                <p className="text-sm text-gray-400">{t('reserve.chooseSlotDesc')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 bg-primary/20 rounded-lg me-4"><Sofa className="w-5 h-5 text-primary" /></div>
              <div>
                <h3 className="font-bold">{t('reserve.selectTableTitle')}</h3>
                <p className="text-sm text-gray-400">{t('reserve.selectTableDesc')}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-h">{t('reserve.dateLabel')}</label>
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
                <label className="text-sm font-semibold text-text-h">{t('reserve.guestsLabel')}</label>
                <div className="relative">
                  <Users className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full ps-10 pe-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none"
                  >
                    {[1,2,3,4,5,6,8,10,12].map(n => <option key={n} value={n}>{t('reserve.playersOption', { count: n })}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">{t('reserve.timeSlotLabel')}</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timeSlots.map(slot => (
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
                    {slotLabel(slot)}<br/>
                    <span className="text-[10px] opacity-70">{slotTime(slot)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">{t('reserve.tableTypeLabel')}</label>
              <select
                value={formData.tableType}
                onChange={(e) => setFormData({...formData, tableType: e.target.value as TableType})}
                className="w-full px-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none"
              >
                {tableTypes.map(table => (
                  <option key={table} value={table}>{tableLabel(table)}</option>
                ))}
              </select>
            </div>

            <div className="p-4 bg-accent-bg rounded-xl flex items-start">
              <AlertCircle className="w-5 h-5 text-primary me-3 shrink-0 mt-0.5" />
              <p className="text-xs text-text leading-relaxed">
                {t('reserve.feeNotice')}
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30"
            >
              {t('reserve.confirmButton')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
