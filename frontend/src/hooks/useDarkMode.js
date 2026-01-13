const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('darkMode') === 'true'
  );
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark);
  }, [isDark]);
  
  return [isDark, setIsDark];
};