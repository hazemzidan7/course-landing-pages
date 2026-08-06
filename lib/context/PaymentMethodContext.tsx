'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { PaymentPreference } from '@/lib/leads/types';

interface PaymentMethodContextValue {
  paymentMethod: PaymentPreference;
  setPaymentMethod: (value: PaymentPreference) => void;
}

const PaymentMethodContext = createContext<PaymentMethodContextValue | null>(null);

// Shares the selected payment method between the registration form (where
// it's chosen) and the Pricing card (where the price reacts to it), since
// those two components sit in different columns of the hero section.
export function PaymentMethodProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentPreference>('full');
  return <PaymentMethodContext.Provider value={{ paymentMethod, setPaymentMethod }}>{children}</PaymentMethodContext.Provider>;
}

export function usePaymentMethod(): PaymentMethodContextValue {
  const context = useContext(PaymentMethodContext);
  if (!context) {
    throw new Error('usePaymentMethod must be used within a PaymentMethodProvider');
  }
  return context;
}
