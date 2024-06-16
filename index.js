const inspirationalQuotes = [
    'It takes courage to grow up and become who you really are.',
    'Your self-worth is determined by you.',
    'Nothing is impossible.',
    'Keep your face always toward the sunshine, and shadows will fall behind you.',
    'You have brains in your head.'
  ];
  
  // Function to generate a random index
  const generateRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  
  // Function to generate a random message
  const generateMessage = () => {
    const randomIndex = generateRandomIndex(inspirationalQuotes);
    return inspirationalQuotes[randomIndex];
  };
  
  console.log(generateMessage());