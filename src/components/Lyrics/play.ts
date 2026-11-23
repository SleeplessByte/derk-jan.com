export const PLAY_FAILED = "lyrics:play-failed";

export interface PlayFailure {
  error: unknown;
  /** Whether the browser still counted the tap or click as a user activation. */
  activated: boolean | undefined;
}

declare global {
  interface HTMLMediaElementEventMap {
    [PLAY_FAILED]: CustomEvent<PlayFailure>;
  }
}

/**
 * Play the song, and send a failure on as an event on the song.
 *
 * Only the caller of play() gets its error, so a page that reports problems
 * can listen for `PLAY_FAILED` instead.
 *
 * @param song the song to play
 */
export function playSong(song: HTMLMediaElement) {
  const activated =
    "userActivation" in navigator
      ? navigator.userActivation.isActive
      : undefined;

  song.play().catch((error: unknown) => {
    // A pause() before the start is often the listener's choice.
    if (error instanceof DOMException && error.name === "AbortError") {
      return;
    }

    song.dispatchEvent(
      new CustomEvent(PLAY_FAILED, { detail: { error, activated } }),
    );
  });
}
