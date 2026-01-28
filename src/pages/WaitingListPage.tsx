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
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
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
      <main className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 w-full pt-20 sm:pt-24 lg:pt-28 pb-16">
        {/* Logo at top with elegant entrance */}
        <motion.div 
          className="mb-20 lg:mb-28"
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

        {/* Content */}
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
              Join the Waiting List
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#8CA58F] to-[#47634A] rounded-full mb-6"></div>
            <p className="text-[#6A6A6A] text-lg mb-12">
              Be the first to experience a new way to build trust and get recognized for your real skills.
            </p>
          </motion.div>

          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-[#8CA58F]/30 bg-[#F9FCFA] p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8CA58F]/10">
                <CheckCircle2 className="h-8 w-8 text-[#47634A]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-3">
                You're on the list!
              </h2>
              <p className="text-[#6A6A6A]">
                Thank you for joining our waiting list. We'll be in touch soon with updates about Rekolink.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* API Error Alert */}
              {formStatus === 'error' && apiError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{apiError}</AlertDescription>
                </Alert>
              )}

              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  aria-invalid={!!errors.firstName}
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                />
                {errors.firstName && (
                  <p className="text-destructive text-sm">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  aria-invalid={!!errors.lastName}
                  {...register('lastName', {
                    required: 'Last name is required',
                  })}
                />
                {errors.lastName && (
                  <p className="text-destructive text-sm">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  aria-invalid={!!errors.email}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      id="dateOfBirth"
                      variant="outline"
                      type="button"
                      aria-invalid={!!dateError}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !dateOfBirth && 'text-muted-foreground',
                        dateError && 'border-destructive'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateOfBirth ? format(dateOfBirth, 'PPP') : 'Select your date of birth'}
                    </Button>
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
                  <p className="text-destructive text-sm">{dateError}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-[#47634A] hover:bg-[#3a5240] text-white"
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

              <p className="text-sm text-[#6A6A6A] text-center">
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
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
