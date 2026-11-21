export const PLAY_REFUSED = "lyrics:play-refused";

export interface PlayRefusal {
  error: unknown;
  /** Whether the browser still counted the tap or click as a user activation. */
  activated: boolean | undefined;
}

declare global {
  interface HTMLMediaElementEventMap {
    [PLAY_REFUSED]: CustomEvent<PlayRefusal>;
  }
}

/**
 * Plays the song. Only the caller of play() learns why the browser refused,
 * so the refusal goes out as an event on the song, for a page that reports it.
 */
export function playSong(song: HTMLMediaElement) {
  // Read at the call: the activation can expire before the refusal arrives.
  const activated =
    "userActivation" in navigator
      ? navigator.userActivation.isActive
      : undefined;

  song.play().catch((error: unknown) => {
    // A pause() before the start rejects play(); that is the listener's choice.
    if (error instanceof DOMException && error.name === "AbortError") {
      return;
    }
    song.dispatchEvent(
      new CustomEvent(PLAY_REFUSED, { detail: { error, activated } }),
    );
  });
}
