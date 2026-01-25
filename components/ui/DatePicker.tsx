'use client';

import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
    selected?: Date | null;
    onChange: (date: Date | null) => void;
    label?: string;
    error?: string;
    placeholderText?: string;
    minDate?: Date;
    showTimeSelect?: boolean;
    dateFormat?: string;
    className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    selected,
    onChange,
    label,
    error,
    placeholderText,
    minDate,
    showTimeSelect = true,
    dateFormat = "MM/dd/yyyy h:mm aa",
    className = '',
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-white mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {label}
                </label>
            )}
            <div className="relative">
                <ReactDatePicker
                    selected={selected}
                    onChange={onChange}
                    showTimeSelect={showTimeSelect}
                    dateFormat={dateFormat}
                    minDate={minDate}
                    placeholderText={placeholderText}
                    className={`
            w-full px-3 sm:px-4 py-3 sm:py-3.5 
            rounded-xl text-sm sm:text-base font-medium
            text-white placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-transparent
            transition-all duration-200
            backdrop-blur-sm
            border-[1.5px] border-solid
          `}
                    wrapperClassName="w-full"
                    calendarClassName="!bg-gray-900 !border-gray-700 !text-white"
                    dayClassName={(date) => "hover:!bg-teal-500/20 !text-white hover:rounded-full"}
                    timeClassName={(time) => "!text-white hover:!bg-teal-500/20"}
                    customInput={
                        <input
                            style={{
                                backgroundColor: selected
                                    ? 'oklch(0.12 0 0 / 0.85)'
                                    : 'oklch(0.1 0 0 / 0.8)',
                                borderColor: error
                                    ? 'oklch(0.65 0.2 330)'
                                    : selected
                                        ? 'oklch(0.7 0.15 180 / 0.3)'
                                        : 'oklch(0.7 0.15 180 / 0.2)',
                                boxShadow: error
                                    ? '0 0 0 3px oklch(0.65 0.2 330 / 0.15)'
                                    : 'none',
                                '--tw-ring-color': error ? 'oklch(0.65 0.2 330)' : 'oklch(0.7 0.15 180)',
                            } as React.CSSProperties}
                        />
                    }
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5" />
                    </svg>
                </div>
            </div>
            {error && (
                <p className="mt-2 text-sm flex items-center gap-1.5" style={{ color: 'oklch(0.65 0.2 330)' }}>
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{error}</span>
                </p>
            )}
            <style jsx global>{`
        .react-datepicker-wrapper {
            width: 100%;
        }
        .react-datepicker {
            font-family: var(--font-poppins) !important;
            background-color: oklch(0.1 0 0 / 0.95) !important;
            border: 1px solid oklch(0.7 0.15 180 / 0.2) !important;
            border-radius: 0.75rem !important;
            overflow: hidden !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5) !important;
        }
        .react-datepicker__header {
            background-color: oklch(0.15 0 0 / 0.95) !important;
            border-bottom: 1px solid oklch(0.7 0.15 180 / 0.1) !important;
        }
        .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
            color: white !important;
        }
        .react-datepicker__day-name {
            color: #9ca3af !important;
        }
        .react-datepicker__day {
            color: white !important;
            border-radius: 9999px !important;
        }
        .react-datepicker__day:hover {
            background-color: oklch(0.7 0.15 180 / 0.2) !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
            background-color: oklch(0.7 0.15 180) !important;
            color: white !important;
        }
        .react-datepicker__time-container {
            border-left: 1px solid oklch(0.7 0.15 180 / 0.1) !important;
        }
        .react-datepicker__time-container .react-datepicker__time {
            background-color: oklch(0.1 0 0 / 0.95) !important;
        }
        .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
            color: white !important;
        }
        .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
            background-color: oklch(0.7 0.15 180 / 0.2) !important;
        }
        .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
            background-color: oklch(0.7 0.15 180) !important;
        }
      `}</style>
        </div>
    );
};
