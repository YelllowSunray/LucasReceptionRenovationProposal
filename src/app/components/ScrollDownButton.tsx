'use client';

interface ScrollDownButtonProps {
  scrollAmount?: number;
}

export default function ScrollDownButton({ scrollAmount = 100 }: ScrollDownButtonProps) {
  const handleScroll = () => {
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={handleScroll}
      className="bg-gray-900/80 hover:bg-gray-900 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-colors"
    >
      Scroll Down
    </button>
  );
} 