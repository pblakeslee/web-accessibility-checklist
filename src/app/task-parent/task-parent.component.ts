import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-parent',
  templateUrl: './task-parent.component.html',
  styleUrls: ['./task-parent.component.css'],
})
export class TaskParentComponent implements OnInit {
  constructor() {}

  alternatives: Task[] = [
    {
      sectionTitle: 'alternative',
      section: 'Alt text (1.1.1):',
      message:
        'All images and non-text content needs alt text (there are exceptions)',
      completed: false,
    },
    {
      sectionTitle: 'alternative',
      section: 'Video & Audio alternatives (1.2.1):',
      message:
        'All video-only and audio-only content has a text transcript. Transcripts are clearly labeled and linked below the media',
      completed: false,
    },

    {
      sectionTitle: 'alternative',
      section: 'Closed captioning (1.2.2):',
      message: 'All video with sound contains accurate closed captioning.',
      completed: false,
    },
    {
      sectionTitle: 'alternative',
      section: 'Audio description (1.2.3):',
      message:
        'For any video, add an alternative video that includes an audio description of information not presented in the original video’s soundtrack (exceptions) or include a text.',
      completed: false,
    },
    {
      sectionTitle: 'alternative',
      section: 'Live captions (1.2.4):',
      message: 'Any live video presentations must have closed captions.',
      completed: false,
    },
    {
      sectionTitle: 'alternative',
      section: 'Audio description (1.2.5):',
      message:
        'An audio description is optional under 1.2.3 level A but not in 1.2.5 AA.',
      completed: false,
    },
  ];

  presentations: Task[] = [
    {
      sectionTitle: 'presentation',
      section: 'Website structure (1.3.1):',
      message:
        'Use proper markup techniques to structure your website’s content (e.g. use correct heading tags and HTML for ordered and unordered lists).',
      completed: false,
    },
    {
      sectionTitle: 'presentation',
      section: 'Meaningful order (1.3.2):',
      message:
        'Present content in a meaningful order and sequence so that it reads properly.',
      completed: false,
    },

    {
      sectionTitle: 'presentation',
      section: 'Sensory characteristics (1.3.3):',
      message:
        'When providing detailed instructions, make it so they aren’t reliant on a single sensory ability.',
      completed: false,
    },
    {
      sectionTitle: 'presentation',
      section: 'Use of color (1.4.1):',
      message: 'Do not rely on color alone to convey information.',
      completed: false,
    },
    {
      sectionTitle: 'presentation',
      section: 'Audio control (1.4.2):',
      message: 'Any audio must be able to be paused, stopped, or muted.',
      completed: false,
    },
    {
      sectionTitle: 'presentation',
      section: 'Color contrast (1.4.3):',
      message:
        'There must be a color contrast ratio of at least 4.5:1 between all text and background.',
      completed: false,
    },
    {
      sectionTitle: 'presentation',
      section: 'Text resize (1.4.4):',
      message:
        'Text must be able to be resized up to 200% without negatively affecting the ability to read content or use functions.',
      completed: false,
    },
    {
      sectionTitle: 'presentation',
      section: 'Images of text (1.4.5):',
      message: 'Do not use images of text unless necessary (e.g. logo).',
      completed: false,
    },
  ];

  userControls: Task[] = [
    {
      sectionTitle: 'userControl',
      section: 'Keyboard only (2.1.1):',
      message:
        'All content and functions on a website must be accessible by keyboard only (i.e. no mouse).',
      completed: false,
    },
    {
      sectionTitle: 'userControl',
      section: 'No keyboard trap (2.1.2):',
      message:
        'Keyboard-only users must never get stuck on any part of the website; they must be able to navigate forwards and backwards.',
      completed: false,
    },

    {
      sectionTitle: 'userControl',
      section: 'Adjustable time (2.2.1):',
      message:
        'If there any time limits on a website, users have the ability to turn it off, adjust it, extend it.',
      completed: false,
    },
    {
      sectionTitle: 'userControl',
      section: 'Pause, stop, hide (2.2.2):',
      message:
        'If there is content that blinks, scrolls, moves, users must have the ability to pause, stop, or hide it.',
      completed: false,
    },
    {
      sectionTitle: 'userControl',
      section: 'Three flashes or below (2.3.1):',
      message:
        'Web pages do not contain anything that flashes more than three times in any one second period.',
      completed: false,
    },
    {
      sectionTitle: 'userControl',
      section: 'Skip navigation link (2.4.1):',
      message:
        ' A “Skip to Content” or “Skip Navigation” link allows users to bypass the heading and go straight to the main content.',
      completed: false,
    },
  ];

  ngOnInit(): void {}
}
