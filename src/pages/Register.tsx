import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import { Mail, Lock, User, UserPlus, AlertCircle } from 'lucide-react';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
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
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock register
    register({ email: formData.email, name: formData.name });
    navigate('/reserve');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-accent-bg/30">
      <div className="w-full max-w-md bg-white dark:bg-geek-card border border-border rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-geek-bg p-8 text-center text-white">
          <UserPlus className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Join the Hub</h1>
          <p className="text-gray-400 mt-2">Start your adventure today.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {error && (
            <div className="flex items-center p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
              <AlertCircle className="w-4 h-4 mr-2" />
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-h">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-h">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-h">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-transparent border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 mt-4"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-text">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-bold hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
