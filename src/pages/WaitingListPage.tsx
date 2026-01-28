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
    <div className="min-h-screen bg-gradient-to-br from-[#F9FCFA] to-white flex flex-col">
      {/* Main content with consistent padding like other pages */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 w-full pt-20 sm:pt-24 lg:pt-28 pb-16">
        {/* Logo at top with elegant entrance - matching legal pages */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1
          }}
        >
          <motion.a 
            href="/"
            onClick={handleLogoClick}
            className="inline-flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              initial={{ filter: 'blur(10px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageWithFallback 
                src={logo} 
                alt="Rekolink - Match. Grow. Succeed" 
                className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
              />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Content area */}
        <div className="max-w-xl">
          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#8CA58F]/10">
                <CheckCircle2 className="h-10 w-10 text-[#47634A]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
                You're on the list!
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#8CA58F] to-[#47634A] rounded-full mb-8"></div>
              <p className="text-[#6A6A6A] text-lg leading-relaxed">
                Thank you for joining our waiting list. We'll be in touch soon with updates about Rekolink.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Header - matching legal pages style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
                  Join the Waiting List
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-[#8CA58F] to-[#47634A] rounded-full mb-6"></div>
                <p className="text-[#6A6A6A] text-lg mb-10">
                  Be the first to experience a new way to build trust and get recognized for your real skills.
                </p>
              </motion.div>

              {/* API Error */}
              {formStatus === 'error' && apiError && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200"
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600">{apiError}</p>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <motion.form 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* First Name */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="firstName" 
                    className="text-sm font-medium text-[#1A1A1A]"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    aria-invalid={!!errors.firstName}
                    className={cn(
                      "h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-base placeholder:text-gray-400",
                      "focus:outline-none focus:border-[#47634A] focus:ring-0",
                      "transition-colors duration-200",
                      errors.firstName && "border-red-400 focus:border-red-500"
                    )}
                    {...register('firstName', {
                      required: 'First name is required',
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="lastName" 
                    className="text-sm font-medium text-[#1A1A1A]"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    aria-invalid={!!errors.lastName}
                    className={cn(
                      "h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-base placeholder:text-gray-400",
                      "focus:outline-none focus:border-[#47634A] focus:ring-0",
                      "transition-colors duration-200",
                      errors.lastName && "border-red-400 focus:border-red-500"
                    )}
                    {...register('lastName', {
                      required: 'Last name is required',
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="email" 
                    className="text-sm font-medium text-[#1A1A1A]"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    aria-invalid={!!errors.email}
                    className={cn(
                      "h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-base placeholder:text-gray-400",
                      "focus:outline-none focus:border-[#47634A] focus:ring-0",
                      "transition-colors duration-200",
                      errors.email && "border-red-400 focus:border-red-500"
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
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="dateOfBirth" 
                    className="text-sm font-medium text-[#1A1A1A]"
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
                          "h-12 w-full flex items-center rounded-xl border-2 border-gray-200 bg-white px-4 text-base text-left",
                          "focus:outline-none focus:border-[#47634A]",
                          "transition-colors duration-200",
                          !dateOfBirth && "text-gray-400",
                          dateOfBirth && "text-[#1A1A1A]",
                          dateError && "border-red-400 focus:border-red-500"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-5 w-5 text-gray-400" />
                        {dateOfBirth ? format(dateOfBirth, 'MMMM d, yyyy') : 'Select your date of birth'}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent 
                      className="w-auto p-0 bg-white border-2 border-gray-200 rounded-xl shadow-xl" 
                      align="start"
                      sideOffset={8}
                    >
                      <Calendar
                        mode="single"
                        selected={dateOfBirth}
                        onSelect={handleDateSelect}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        defaultMonth={dateOfBirth || new Date(new Date().getFullYear() - 18, 0, 1)}
                        fromYear={1900}
                        toYear={new Date().getFullYear()}
                        className="p-3"
                      />
                    </PopoverContent>
                  </Popover>
                  {dateError && (
                    <p className="text-sm text-red-600">{dateError}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={cn(
                      "h-14 w-full rounded-xl text-base font-semibold text-white",
                      "bg-[#47634A] hover:bg-[#3a5240]",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-[#47634A] focus:ring-offset-2"
                    )}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      'Join Waiting List'
                    )}
                  </Button>
                </div>

                {/* Terms text */}
                <p className="text-sm text-[#6A6A6A] text-center pt-2">
                  By joining, you agree to our{' '}
                  <a href="/privacy" className="text-[#8CA58F] hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-[#8CA58F] hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </motion.form>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
