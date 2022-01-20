const toggleOnClick = ($button, $target, { open, close } = {}) => {
  let canOpen = true;

  if (!close) close = $target => $target.fadeOut(150);
  if (!open) open = $target => $target.fadeIn(150);

  $button.on('click', () => {

    if (!canOpen) return;
    canOpen = false;
    open($target);

    let mouseOnTargetOvered = false;
    $target.on('mouseover', () => mouseOnTargetOvered = true);
    $target.on('mouseout', () => mouseOnTargetOvered = false);

    const closeStart = () => {
      close($target);
      document.removeEventListener('mousedown', closeByMouse);
      window.removeEventListener('keydown', closeByEscape);
      setTimeout(() => canOpen = true, 200);
    };

    $target.on('toggleOnClickClose', () => {
      closeStart();
    });

    const closeByMouse = e => {
      if (!mouseOnTargetOvered) {
        e.preventDefault();
        closeStart();
        return false;
      }
    };
    document.addEventListener('mousedown', closeByMouse);
    const closeByEscape = e => {
      if (e.keyCode === 27) closeStart();
    };
    window.addEventListener('keydown', closeByEscape);
  });
};


export default toggleOnClick;
