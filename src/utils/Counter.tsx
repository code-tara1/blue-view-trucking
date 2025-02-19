import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  value: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = value / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, value, duration]);

  return (
    <Text
      ref={ref}
      fontSize={{ base: "24px", sm: "28px", md: "28px", xl: "35px" }}
      fontWeight="bold"
    >
      {count}
    </Text>
  );
};

export default Counter;
