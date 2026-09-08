window.addEventListener('message', event => {
  if (event.origin !== window.location.origin) return;
  if (event.data?.type !== 'mat-a1-rocq-resize') return;

  const frame = [...document.querySelectorAll('iframe.rocq-frame--proof')]
    .find(candidate => candidate.contentWindow === event.source);

  if (!frame) return;

  const requestedHeight = Number(event.data.height);
  const safeHeight = Math.max(150, Math.min(900, requestedHeight || 650));
  frame.style.height = `${safeHeight}px`;
});

