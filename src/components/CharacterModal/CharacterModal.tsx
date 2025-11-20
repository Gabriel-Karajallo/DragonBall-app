import { useEffect } from "react";
import "./characterModal.css";
import type { ReactNode } from "react";

interface CharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function CharacterModal({ isOpen, onClose, children }: CharacterModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fade-in" onClick={onClose}>
      <div className="modal-content zoom-in" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
