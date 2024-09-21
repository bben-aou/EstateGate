export const getProfileInitials = (firstName: string | undefined, lastName: string | undefined): string => {
    if (!firstName ||!lastName) return '';
    const firstInitial = firstName?.charAt(0).toUpperCase() || '';
    const lastInitial = lastName?.charAt(0).toUpperCase() || '';
    return `${firstInitial}${lastInitial}`;
  };
  