import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext.tsx';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(t('login.errorFillFields'));
      return;
    }

    // Mock login
    login({ email, name: email.split('@')[0] });
    navigate('/geekrpg/reserve');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-geek-accent/40">
      <div className="w-full max-w-md bg-geek-card border border-border rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-secondary p-8 text-center text-white">
          <LogIn className="w-11 h-11 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="font-display font-bold text-2xl">{t('login.welcomeBack')}</h1>
          <p className="text-white/60 mt-2 text-sm">{t('login.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="flex items-center p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
              <AlertCircle className="w-4 h-4 me-2" />
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-h">{t('login.emailLabel')}</label>
            <div className="relative">
              <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" strokeWidth={1.75} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full ps-10 pe-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder={t('login.emailPlaceholder')}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-h">{t('login.passwordLabel')}</label>
            <div className="relative">
              <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" strokeWidth={1.75} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full ps-10 pe-4 py-3 bg-geek-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white font-eyebrow text-xs rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            {t('login.signIn')}
          </button>

          <p className="text-center text-sm text-text">
            {t('login.noAccount')}{' '}
            <Link to="/register" className="text-primary font-bold hover:underline">
              {t('login.registerHere')}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
