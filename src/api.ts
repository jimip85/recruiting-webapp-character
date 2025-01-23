import { Character } from "./types";

 
// Save character function
export const saveCharacter = async (character: Character): Promise<Character> => {
    const url = 'https://recruiting.verylongdomaintotestwith.ca/api/{jimip85}/character';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character),
      });
  
      if (!response.ok) {
        console.error(`Failed to save character: ${response.statusText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Character saved successfully:', data);
      return data;
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };
  
  // Fetch character function
export const fetchCharacter = async (): Promise<Character> => {
    const url = 'https://recruiting.verylongdomaintotestwith.ca/api/{jimip85}/character/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        console.error(`Failed to fetch character: ${response.statusText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: Character = await response.json();
      console.log('Character fetched successfully:', data);
      return data;
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };
  