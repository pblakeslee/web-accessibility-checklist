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

  understandables: Task[] = [
    {
      sectionTitle: 'understandable',
      section: 'Page titles (2.4.2): ',
      message:
        'Each page of a website needs to have a unique and descriptive page title.',
      completed: false,
    },
    {
      sectionTitle: 'understandable',
      section: 'Focus order (2.4.3):',
      message:
        'Users must be able to navigate through a website in a logical sequential order that preserves meaning.',
      completed: false,
    },

    {
      sectionTitle: 'understandable',
      section: 'Link anchor text (2.4.4):',
      message:
        'The purpose of each link should be clear based on its anchor text (e.g. don’t use “click here”).',
      completed: false,
    },
    {
      sectionTitle: 'understandable',
      section: 'Multiple ways (2.4.5):',
      message:
        'There are multiple ways to access different pages/information on a website (e.g. search bar, nav menus, sitemap, breadcrumbs, helpful links after content).',
      completed: false,
    },
    {
      sectionTitle: 'understandable',
      section: 'Descriptive headings and labels (2.4.6):',
      message:
        'Headings and programmatic labels must be clear and descriptive. They do not need to be lengthy.',
      completed: false,
    },
    {
      sectionTitle: 'understandable',
      section: 'Focus indicator (2.4.7):',
      message:
        'Any “user interface control” that receives focus from a keyboard user should indicate that focus on the current selected element (e.g. add a visible border around a text link).',
      completed: false,
    },
    {
      sectionTitle: 'understandable',
      section: 'Website language (3.1.1):',
      message: 'Set the language for your website.',
      completed: false,
    },
    {
      sectionTitle: 'understandable',
      section: 'Language changes (3.1.2):',
      message:
        'Indicate any language changes for an entire page or within the content.',
      completed: false,
    },
  ];

  predictabilities: Task[] = [
    {
      sectionTitle: 'predictability',
      section: 'No focus change (3.2.1):',
      message:
        'Nothing changes merely because an item receives focus; a user must actively choose to activate an item (e.g. hit enter to submit) before a change takes place.',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'No input change (3.2.2):',
      message:
        'Nothing changes just because information is inputted into a field (e.g. form doesn’t auto submit once all fields are filled out).',
      completed: false,
    },

    {
      sectionTitle: 'predictability',
      section: 'Consistent navigation (3.2.3):',
      message:
        'Keep navigation layout consistent throughout all pages of the website (e.g. same links in the same order).',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'Consistent identification (3.2.4):',
      message:
        'Components that have the same function within a website are identified consistently (but not necessarily identically) (e.g. two check marks can indicate two different things as long as their function is different — one indicates “approved” on one page but “included” on another).',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'Error identification (3.3.1):',
      message:
        'Make any form errors easy to identify, understand, and correct.',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'Form labels and instructions (3.3.2):',
      message:
        'Programmatically label all form or input fields so that a user knows what input and what format is expected.',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'Error suggestions (3.3.3):',
      message:
        'If an input error is automatically detected, then suggestions for correcting the error should be provided.',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'Error prevention on important forms (3.3.4):',
      message:
        'For pages that create legal commitments or financial transactions or any other important data submissions, one of the following is true: 1) submissions are reversible, 2) the user has an opportunity to correct errors, and 3) confirmation is available that allows an opportunity to review and correct before submission.',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'Parsing (4.1.1):',
      message:
        'Make sure HTML code is clean and free of errors, particularly missing bracket closes. Also, make sure all HTML elements are properly nested.',
      completed: false,
    },
    {
      sectionTitle: 'predictability',
      section: 'Name, role, value (4.1.2): ',
      message:
        'For all user interface components (including forms, links, components generated by scripts), the name, role, and value should all be able to be programmatically determined; make sure components are compatible with assistive technology.',
      completed: false,
    },
  ];

  ngOnInit(): void {}
}
