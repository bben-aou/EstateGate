export const formatCurrency = (amount: number, currency: string = 'MAD'): string => {
    return new Intl.NumberFormat('fr', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }