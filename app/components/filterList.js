export default function FilterList({ source, onClick }) {
  return (
    <button onClick={onClick}>{source}</button>
  );
}