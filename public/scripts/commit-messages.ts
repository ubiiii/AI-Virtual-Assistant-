/**
 * Dynamic commit messages for this repository.
 * Used by sync-content.ts when creating contribution commits.
 * Rotate or edit these strings to keep commit history varied.
 */

export const COMMIT_MESSAGES: string[] = [
  'feat(assistant): improve wake-word response timing',
  'fix(voice): handle empty recognition results',
  'refactor(va): split command router modules',
  'docs(readme): clarify supported voice commands',
  'perf(nlp): cache frequent intent lookups',
  'fix(apps): launch Windows apps with quoted paths',
  'feat(weather): enrich forecast reply formatting',
  'test(commands): cover open-website intent path',
  'style(cli): tidy assistant status logging',
  'chore(deps): pin speech recognition extras',
  'fix(games): map game launch aliases correctly',
  'feat(assistant): add polite fallback replies',
  'docs(usage): document microphone permission steps',
  'refactor(utils): centralize text-to-speech helper',
  'chore(lint): format VA.py command handlers',
  'perf(startup): lazy-load optional integrations',
  'fix(network): timeout hung weather requests',
  'feat(search): support quick wiki-style answers',
  'chore(config): organize assistant settings block',
  'docs(changelog): note virtual assistant upgrades',
];

/**
 * Pick a commit message by index (stable rotation).
 */
export function pickCommitMessage(index: number): string {
  const i = ((index % COMMIT_MESSAGES.length) + COMMIT_MESSAGES.length) % COMMIT_MESSAGES.length;
  return COMMIT_MESSAGES[i];
}

/**
 * Pick a commit message from a date string seed (uneven but deterministic).
 */
export function pickCommitMessageFromDate(dateKey: string): string {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return COMMIT_MESSAGES[hash % COMMIT_MESSAGES.length];
}
