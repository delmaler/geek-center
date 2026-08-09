import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext.tsx';
import { Mail, Lock, User, UserPlus, AlertCircle } from 'lucide-react';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (Object.values(formData).some(val => !val)) {
      setError(t('register.errorFillFields'));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(t('register.errorPasswordMismatch'));
      return;
    }

    // Mock register
    register({ email: formData.email, name: formData.name });
    navigate('/geekrpg/reserve');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-geek-accent/40">
      <div className="w-full max-w-md bg-geek-card border border-border rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-secondary p-8 text-center text-white">
          <UserPlus className="w-11 h-11 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="font-display font-bold text-2xl">{t('register.title')}</h1>
          <p className="text-white/60 mt-2 text-sm">{t('register.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {error && (
            <div className="flex items-center p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
              <AlertCircle className="w-4 h-4 me-2" />
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-h">{t('register.fullNameLabel')}</label>
            <div className="relative">
              <User className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" strokeWidth={1.75} />
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full ps-10 pe-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder={t('register.fullNamePlaceholder')}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-h">{t('register.emailLabel')}</label>
            <div className="relative">
              <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" strokeWidth={1.75} />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full ps-10 pe-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder={t('register.emailPlaceholder')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">{t('register.passwordLabel')}</label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" strokeWidth={1.75} />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full ps-10 pe-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">{t('register.confirmPasswordLabel')}</label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" strokeWidth={1.75} />
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full ps-10 pe-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white font-eyebrow text-xs rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 mt-4"
          >
            {t('register.createAccount')}
          </button>

          <p className="text-center text-sm text-text">
            {t('register.alreadyHaveAccount')}{' '}
            <Link to="/login" className="text-primary font-bold hover:underline">
              {t('register.loginHere')}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
