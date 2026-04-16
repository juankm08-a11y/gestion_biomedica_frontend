"use client";

import Icon from "../iconos/Icon";

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({onClose, children}:ModalProps) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded p-8 w-[500px] shadow">
                <div className="flex justify-between items-center mb-4">
                   
                    <button onClick={onClose} className="text-gray-500 hover:text-black">
                        <Icon name="cancelar" size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}