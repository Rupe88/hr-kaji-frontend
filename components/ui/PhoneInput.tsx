'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Country {
    code: string;
    dialCode: string;
    flag: string;
    name: string;
}

const COUNTRIES: Country[] = [
    { code: 'NP', dialCode: '+977', flag: '🇳🇵', name: 'Nepal' },
    { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India' },
    { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'USA' },
    { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'UK' },
    { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: 'AE', dialCode: '+971', flag: '🇦🇪', name: 'UAE' },
    { code: 'QA', dialCode: '+974', flag: '🇶🇦', name: 'Qatar' },
    { code: 'SA', dialCode: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: 'MY', dialCode: '+60', flag: '🇲🇾', name: 'Malaysia' },
    { code: 'JP', dialCode: '+81', flag: '🇯🇵', name: 'Japan' },
    { code: 'KR', dialCode: '+82', flag: '🇰🇷', name: 'South Korea' },
];

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: string;
    helperText?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
    label,
    error,
    helperText,
    className = '',
    value = '',
    onChange,
    ...props
}) => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Parse initial value to separate country code and number if provided
    useEffect(() => {
        if (value) {
            // Simple logic to try to match existing dial code
            const matchingCountry = COUNTRIES.find(c => value.startsWith(c.dialCode));
            if (matchingCountry) {
                setSelectedCountry(matchingCountry);
                setPhoneNumber(value.slice(matchingCountry.dialCode.length));
            } else {
                setPhoneNumber(value);
            }
        }
    }, []); // Only run on mount to set initial state

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        if (onChange) {
            onChange(`${country.dialCode}${phoneNumber}`);
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNumber = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
        setPhoneNumber(newNumber);
        if (onChange) {
            onChange(`${selectedCountry.dialCode}${newNumber}`);
        }
    };

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-white mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {label}
                </label>
            )}
            <div className="relative flex">
                {/* Country Selector */}
                <div ref={dropdownRef} className="relative z-20">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={`
              flex items-center gap-2 px-3 sm:px-4 py-3 sm:py-3.5 
              rounded-l-xl text-sm sm:text-base font-medium
              text-white transition-all duration-200
              border-r-0 backdrop-blur-sm
              focus:outline-none focus:ring-2 focus:ring-offset-0 focus:z-10
            `}
                        style={{
                            backgroundColor: 'oklch(0.1 0 0 / 0.8)',
                            borderColor: error ? 'oklch(0.65 0.2 330)' : 'oklch(0.7 0.15 180 / 0.2)',
                            borderWidth: '1.5px',
                            borderStyle: 'solid',
                            borderRightWidth: '0',
                            '--tw-ring-color': error ? 'oklch(0.65 0.2 330)' : 'oklch(0.7 0.15 180)',
                        } as React.CSSProperties}
                    >
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span className="text-gray-300">{selectedCountry.dialCode}</span>
                        <svg
                            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto rounded-xl border-2 backdrop-blur-xl shadow-xl z-50"
                                style={{
                                    backgroundColor: 'oklch(0.1 0 0 / 0.95)',
                                    borderColor: 'oklch(0.7 0.15 180 / 0.2)',
                                }}
                            >
                                {COUNTRIES.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country)}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                                    >
                                        <span className="text-xl">{country.flag}</span>
                                        <span className="text-gray-300 font-medium flex-1">{country.name}</span>
                                        <span className="text-gray-500 text-sm">{country.dialCode}</span>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Start number input */}
                <input
                    {...props}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className={`
            w-full px-3 sm:px-4 py-3 sm:py-3.5 
            rounded-r-xl text-sm sm:text-base font-medium
            text-white placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-transparent
            transition-all duration-200
            backdrop-blur-sm
            ${className}
          `}
                    style={{
                        backgroundColor: phoneNumber
                            ? 'oklch(0.12 0 0 / 0.85)'
                            : 'oklch(0.1 0 0 / 0.8)',
                        borderColor: error
                            ? 'oklch(0.65 0.2 330)'
                            : phoneNumber
                                ? 'oklch(0.7 0.15 180 / 0.3)'
                                : 'oklch(0.7 0.15 180 / 0.2)',
                        borderWidth: '1.5px',
                        borderStyle: 'solid',
                        borderLeftWidth: '1.5px', // Keep border between segments?
                        marginLeft: '-1.5px', // Overlap borders slightly
                        boxShadow: error
                            ? '0 0 0 3px oklch(0.65 0.2 330 / 0.15)'
                            : 'none',
                        '--tw-ring-color': error ? 'oklch(0.65 0.2 330)' : 'oklch(0.7 0.15 180)',
                    } as React.CSSProperties}
                    onFocus={(e) => {
                        if (!error) {
                            e.currentTarget.style.borderColor = 'oklch(0.7 0.15 180 / 0.6)';
                            e.currentTarget.style.backgroundColor = 'oklch(0.12 0 0 / 0.9)';
                        }
                    }}
                    onBlur={(e) => {
                        if (!error) {
                            const hasValue = e.currentTarget.value.length > 0;
                            e.currentTarget.style.borderColor = hasValue
                                ? 'oklch(0.7 0.15 180 / 0.3)'
                                : 'oklch(0.7 0.15 180 / 0.2)';
                            e.currentTarget.style.backgroundColor = hasValue
                                ? 'oklch(0.12 0 0 / 0.85)'
                                : 'oklch(0.1 0 0 / 0.8)';
                        }
                    }}
                />
            </div>

            {error && (
                <p className="mt-2 text-sm flex items-center gap-1.5" style={{ color: 'oklch(0.65 0.2 330)' }}>
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{error}</span>
                </p>
            )}
            {helperText && !error && (
                <p className="mt-2 text-xs text-gray-500">{helperText}</p>
            )}
        </div>
    );
};
