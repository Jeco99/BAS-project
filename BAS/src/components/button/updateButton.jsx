export default function UpdateButton() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-end mt-8 pr-8">
        <button
          type="button"
          className="mr-4 bg-beetleGreen hover:bg-morningGlory hover:text-black text-black font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          className="bg-beetleGreen hover:bg-morningGlory hover:text-black text-black font-bold py-2 px-4 rounded"
          type="submit"
        >
          Update
        </button>
      </div>
      <header className="flex mt-8 mb-8"></header>
    </div>
  );
}
