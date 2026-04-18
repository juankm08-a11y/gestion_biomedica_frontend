export default function ConfirmModal({ title, onConfirm, onCancel }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div
        className=" bg-[#B1EBE6]
        border-4
        border-[#E41B1B]
        p-10"
        style={{ width: "1128px", height: "851px" }}
      >
        <h2 className="text-center text-xl mb-6">{title}</h2>
        <div className="flex justify-center gap-6">
          <button
            className="bg-red-600 text-white px-6 py-3"
            onClick={onConfirm}
          >
            Confirmar
          </button>
          <button
            className="bg-red-600 text-white px-6 py-3"
            onClick={onConfirm}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
