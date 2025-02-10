import Button from "../button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  submitFunc: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  submitFunc,
}: ModalProps) => {
  if (!isOpen) return null;

  const handleSubmission = (): void => {
    submitFunc();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[684px]">
        <div className="flex justify-between items-center  pb-2">
          <h2 className="text-2xl font-semibold leading-[26px] text-[#120C6E]">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="mt-4">
          <form className="space-y-6" onSubmit={submitFunc}>
            {children}
          </form>
        </div>
        <div className="mt-6 flex justify-start">
          <Button clickFunc={handleSubmission}>Save</Button>
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
