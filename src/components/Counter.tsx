import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>Counter: {count()}</p>
      <div class="flex gap-x-4 mt-2">
      <button class="bg-blue-500 px-4 py-2 rounded" onClick={() => setCount((prev) => ++prev)}>Aumentar</button>
      <button class="bg-blue-500 px-4 py-2 rounded" onClick={() => setCount((prev) => --prev)}>Disminuir</button>
      </div>
    </div>
  );
}