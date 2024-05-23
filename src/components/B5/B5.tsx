export default function B5() {
  return (
    <div className="relative w-72 h-52 bg-blue-400">
      <p>Relative parent</p>
      <div className="absolute bottom-0 left-0 w-40 h-10 bg-blue-600 rounded-xl text-center">
        <p>Absolute child</p>
      </div>
    </div>
  );
}
