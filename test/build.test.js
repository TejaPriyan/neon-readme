import { strict as assert } from 'assert';
import { describe, it } from 'node:test';
import { techBadges, buildReadme } from '../bin/cli.js';

describe('techBadges', () => {
  it('returns skillicons for known tech and fallback for unknown', () => {
    const out = techBadges(['javascript', 'SOMETHING_UNKNOWN']);
    assert.ok(out.includes('skillicons.dev'));
    assert.ok(out.includes('img.shields.io'));
  });
});

describe('buildReadme', () => {
  it('includes the provided username and About Me section', () => {
    const answers = {
      name: 'Test User',
      username: 'testuser',
      tagline: 'tagline',
      bio: 'short bio',
      focus: ['AI', 'Open Source'],
      tech: ['js', 'python'],
      theme: 'dracula',
      linkedin: '',
      portfolio: '',
      projects: [],
    };
    const md = buildReadme(answers);
    assert.ok(md.includes('testuser'));
    assert.ok(md.includes('About Me'));
  });

  it('safely defaults theme if theme is not provided', () => {
    const answers = {
      name: 'Test User',
      username: 'testuser',
      tagline: 'tagline',
      bio: 'short bio',
      focus: ['AI'],
      tech: ['js'],
      linkedin: '',
      portfolio: '',
      projects: [],
    };
    const md = buildReadme(answers);
    assert.ok(md.includes('dracula'));
  });
});
