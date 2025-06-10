
/**
 * Plays an audio file.
 *
 * @param {string} file - The path or URL to the audio file to play.
 * @param {number} [vol=0.5] - The volume at which to play the audio (range: 0.0 to 1.0).
 */
export function playAudio(file, volume = 0.5){
  // This prevents error for autoplay being blocked by browser
  // when the document is hidden (e.g., when the tab is not active).
  if (document.hidden) {
    return;
  }
  var audio = document.createElement("audio");
  audio.src = file;
  audio.volume = volume;
  document.body.appendChild(audio);
  audio.play().catch(() => {
    // Autoplay was prevented, ignore error
  });

  audio.onended = function () {
    this.parentNode.removeChild(this);
  };
}