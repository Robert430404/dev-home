/**
 * Stops execution for a certain number of milliseconds
 * 
 * @param milliseconds Number of millisecond to wait for
 * @returns {Promise<void>} Promise
 */
export const wait = async (milliseconds: number): Promise<void> => ( 
  new Promise(resolve => setTimeout(resolve, milliseconds))
);