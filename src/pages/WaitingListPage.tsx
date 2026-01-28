import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { CalendarIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { cn } from '../components/ui/utils';
import logo from '../assets/top_bar_logo.png';

interface WaitingListFormData {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date | undefined;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function WaitingListPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [apiError, setApiError] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [dateError, setDateError] = useState<string>('');
  const [calendarOpen, setCalendarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitingListFormData>();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  };

  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const validateAge = (): boolean => {
    if (!dateOfBirth) {
      setDateError('Date of birth is required');
      return false;
    }
    const age = calculateAge(dateOfBirth);
    if (age < 16) {
      setDateError('You must be at least 16 years old to join');
      return false;
    }
    setDateError('');
    return true;
  };

  const onSubmit = async (data: WaitingListFormData) => {
    if (!validateAge()) {
      return;
    }

    setFormStatus('submitting');
    setApiError('');

    try {
      const response = await fetch('https://api.rekolink.com/waitinglist/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          date_of_birth: format(dateOfBirth!, 'yyyy-MM-dd'),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up. Please try again later.');
      }

      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
      setApiError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setDateOfBirth(date);
    setDateError('');
    setCalendarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FCFA] via-white to-[#F5F9F6] flex flex-col">
      {/* Main content - centered vertically and horizontally */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-md">
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.a 
              href="/"
              onClick={handleLogoClick}
              className="inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <ImageWithFallback 
                src={logo} 
                alt="Rekolink - Match. Grow. Succeed" 
                className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
              />
            </motion.a>
          </motion.div>

          {/* Card container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10"
          >
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8CA58F]/10">
                  <CheckCircle2 className="h-8 w-8 text-[#47634A]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#1A1A1A] mb-3">
                  You're on the list!
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thank you for joining our waiting list. We'll be in touch soon with updates about Rekolink.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-2">
                    Join the Waiting List
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Be the first to experience a new way to build trust and get recognized.
                  </p>
                </div>

                {/* API Error - inline text style */}
                {formStatus === 'error' && apiError && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-600">{apiError}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* First Name */}
                  <div>
                    <Label 
                      htmlFor="firstName" 
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      aria-invalid={!!errors.firstName}
                      className={cn(
                        "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 transition-all",
                        "focus:outline-none focus:ring-2 focus:ring-[#47634A] focus:border-transparent",
                        errors.firstName && "border-red-500 focus:ring-red-500"
                      )}
                      {...register('firstName', {
                        required: 'First name is required',
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <Label 
                      htmlFor="lastName" 
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      aria-invalid={!!errors.lastName}
                      className={cn(
                        "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 transition-all",
                        "focus:outline-none focus:ring-2 focus:ring-[#47634A] focus:border-transparent",
                        errors.lastName && "border-red-500 focus:ring-red-500"
                      )}
                      {...register('lastName', {
                        required: 'Last name is required',
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label 
                      htmlFor="email" 
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      aria-invalid={!!errors.email}
                      className={cn(
                        "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 transition-all",
                        "focus:outline-none focus:ring-2 focus:ring-[#47634A] focus:border-transparent",
                        errors.email && "border-red-500 focus:ring-red-500"
                      )}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <Label 
                      htmlFor="dateOfBirth" 
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Date of Birth
                    </Label>
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger asChild>
                        <button
                          id="dateOfBirth"
                          type="button"
                          aria-invalid={!!dateError}
                          className={cn(
                            "w-full flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-left transition-all",
                            "focus:outline-none focus:ring-2 focus:ring-[#47634A] focus:border-transparent",
                            !dateOfBirth && "text-gray-400",
                            dateOfBirth && "text-gray-900",
                            dateError && "border-red-500 focus:ring-red-500"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-4 w-4 text-gray-500" />
                          {dateOfBirth ? format(dateOfBirth, 'PPP') : 'Select your date of birth'}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dateOfBirth}
                          onSelect={handleDateSelect}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          defaultMonth={dateOfBirth || new Date(new Date().getFullYear() - 18, 0, 1)}
                          captionLayout="dropdown-buttons"
                          fromYear={1900}
                          toYear={new Date().getFullYear()}
                        />
                      </PopoverContent>
                    </Popover>
                    {dateError && (
                      <p className="text-sm text-red-600 mt-1">{dateError}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={cn(
                      "w-full rounded-lg py-3 text-sm font-medium text-white transition-all",
                      "bg-[#47634A] hover:bg-[#3a5240] hover:opacity-90",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "focus:outline-none focus:ring-2 focus:ring-[#47634A] focus:ring-offset-2"
                    )}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      'Join Waiting List'
                    )}
                  </Button>

                  {/* Terms text */}
                  <p className="text-xs text-gray-500 text-center pt-2">
                    By joining, you agree to our{' '}
                    <a href="/privacy" className="text-[#47634A] hover:underline font-medium">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms" className="text-[#47634A] hover:underline font-medium">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
