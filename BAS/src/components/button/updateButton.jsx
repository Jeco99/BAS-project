export default function UpdateButton() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-end mt-8 pr-8">
        <button 
        type="button"
        className="mr-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        type="submit"
        >
          Update
        </button>
      </div>
      <header className="flex mt-8 mb-8"></header>
    </div>
  );
}
