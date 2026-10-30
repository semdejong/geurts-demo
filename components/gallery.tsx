"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Photo } from "@/components/photo";
import type { Photo as PhotoType } from "@/lib/types";

export function Gallery({ photos }: { photos: PhotoType[] }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const current = photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => triggerRef.current?.focus();
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  function openAt(next: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setIndex(next);
    dialogRef.current?.showModal();
    window.setTimeout(() => closeRef.current?.focus(), 0);
  }

  function step(delta: number) {
    setIndex((value) => (value + delta + photos.length) % photos.length);
  }

  if (!current) return null;

  return (
    <div data-section="galerij">
      <div className="flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 md:grid md:grid-cols-2 md:overflow-visible">
        {photos.map((photo, photoIndex) => (
          <button
            key={photo.src}
            type="button"
            onClick={(event) => openAt(photoIndex, event.currentTarget)}
            className="w-[82%] shrink-0 snap-start border-[3px] border-navy bg-mist text-left md:w-auto"
            style={{ maxWidth: photo.w }}
          >
            <Photo src={photo.src} alt={photo.alt} w={photo.w} h={photo.h} sizes="(max-width: 768px) 82vw, 50vw" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p id={titleId} className="font-mono text-sm text-navy">
            {index + 1} / {photos.length}
          </p>
          <button ref={closeRef} type="button" className="btn btn-navy" onClick={() => dialogRef.current?.close()}>
            Sluiten
          </button>
        </div>
        <figure className="mt-4">
          <Photo
            src={current.src}
            alt={current.alt}
            w={current.w}
            h={current.h}
            sizes="90vw"
            className="mx-auto max-h-[70vh] w-auto"
          />
          <figcaption className="mt-3 max-w-[68ch]">{current.alt}</figcaption>
        </figure>
        {photos.length > 1 ? (
          <div className="mt-4 flex gap-3">
            <button type="button" className="btn btn-line" onClick={() => step(-1)}>
              Vorige
            </button>
            <button type="button" className="btn btn-line" onClick={() => step(1)}>
              Volgende
            </button>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
