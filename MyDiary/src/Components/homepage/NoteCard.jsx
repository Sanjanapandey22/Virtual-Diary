// NoteCard.jsx
export default function NoteCard({ note }) {
  return (
    <div className="p-4  w-[500px] h-[40vh] rounded-lg shadow-md bg-violet-50 border-l-4 border-violet-400">
      <h2 className="text-xl font-bold text-black">{note.title}</h2>
      <p className="text-gray-800 mt-2 whitespace-pre-wrap">{note.note}</p>
      <p className="text-xs text-gray-500 mt-3">{note.date}</p>
    </div>
  );
}
