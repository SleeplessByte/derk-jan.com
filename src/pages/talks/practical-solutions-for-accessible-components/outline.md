# Embrace the patch

- 00:30 · 1 · Good intentions
- 01:30 · 3 · Hello
- 02:30 · 4 · TOC
- 06:00 · 5 · Testing
- 06:30 · 6 · Accessibility claims
- 10:45 · 18 · Focus management
- 14:30 · 30 · Practical Dialog Decisions
- 15:00 · 34 · Focus Restoration
- 15:15 · 36 · Focus trapping
- 20:00 · 40 · Focus Recap
- 22:30 · 46 · Focus zone (aria-activedescendant)
- 27:00 · 48 · CSS-only solutions
- 28:00 · 52 · CSS & interactivity
- 29:00 · 53 · Tabs
- 31:00 · 54 · Tabs, process
- 35:00 · 57 · Outro

# TOC

https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/

# It is accessible

Devon Govett
https://react-spectrum.adobe.com/blog/building-a-combobox.html
https://react-spectrum.adobe.com/blog/creating-a-pointer-friendly-submenu-experience.html
https://github.com/adobe/react-spectrum/wiki/Tracker-for-External-Browser-Bugs,-Library-Bugs,-and-Features

# Is it accessible?

https://adrianroselli.com/2024/08/things-to-do-before-asking-is-this-accessible.html

# Focus management

- What is focus? With focus we generally mean which element will receive keyboard inputs.
- `document.activeElement` will give you that element, and `<body>` or `document` if nothing is focused.
- `window.getSelection()` is not the same as focus. It's what content is currently highlighted as a selected content.

the element's tabindex value is non-null, or the element is determined by the user agent to be focusable;
the element is either not a shadow host, or has a shadow root whose delegates focus is false;
the element is not actually disabled;
the element is not inert;
the element is either being rendered, delegating its rendering to its children, or being used as relevant canvas fallback content.

https://html.spec.whatwg.org/multipage/interaction.html#focusable-area

# Focus restoration

https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes/
https://adrianroselli.com/2025/06/where-to-put-focus-when-opening-a-modal-dialog.html
https://adrianroselli.com/2023/08/where-to-put-focus-when-deleting-a-thing.html

# Focus trapping

https://github.com/jsoref/primer-behaviors/blob/main/docs/focus-trap.md

```javascript
aria.Dialog.prototype.trapFocus = function (event) {
  if (aria.Utils.IgnoreUtilFocusChanges) {
    return;
  }
  var currentDialog = aria.getCurrentDialog();
  if (currentDialog.dialogNode.contains(event.target)) {
    currentDialog.lastFocus = event.target;
  } else {
    aria.Utils.focusFirstDescendant(currentDialog.dialogNode);
    if (currentDialog.lastFocus == document.activeElement) {
      aria.Utils.focusLastDescendant(currentDialog.dialogNode);
    }
    currentDialog.lastFocus = document.activeElement;
  }
}; // end trapFocus

aria.Utils.focusFirstDescendant = function (element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];
    if (
      aria.Utils.attemptFocus(child) ||
      aria.Utils.focusFirstDescendant(child)
    ) {
      return true;
    }
  }
  return false;
}; // end focusFirstDescendant
```

# Focus zone (roving)

https://github.com/jsoref/primer-behaviors/blob/main/docs/focus-zone.md
https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/
https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant
https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/

# Focus zone (aria-activedescendant)

https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
https://www.w3.org/WAI/ARIA/apg/patterns/combobox/

# Focus & disabled

https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols
https://adrianroselli.com/2024/02/dont-disable-form-controls.html

Disabled buttons suck by Hampus Sethfors, 7 July 2017.
Why you shouldn’t include disabled interaction elements in your design system by Chris Atherton, 12 February, 2019 (ugh, Medium).
Why heuristics are only rules of thumb: the case of the disabled button by Matthew Standage, 9 May 2020.
Making Disabled Buttons More Inclusive by Sandrina Pereira, 12 May 2021 (doesn’t go far enough, and I reviewed it).
Usability Pitfalls of Disabled Buttons, and How To Avoid Them by Vitaly Friedman, 5 August 2021 (lets Wise off the hook on other bad patterns).
Disabled Buttons in User Interface by Nick Babich, 2 October 2021 (doesn’t go far enough, also ugh Medium).
The problem with disabled buttons and what to do instead by Adam Silver, 14 May 2023.

Keep focusable:

- Options in a Listbox
- Menu items in a Menu or menu bar
- Tab elements in a set of Tabs
- Tree items in a Tree View

# CSS-only solutions

https://www.sarasoueidan.com/blog/css-carousels-accessibility/
https://gomakethings.com/css-only-solutions-are-not-accessible/
https://adrianroselli.com/2023/03/css-only-widgets-are-inaccessible.html

https://www.youtube.com/watch?v=ob_M_qXeDVE&t=1404s

# Tabs

- network? Focus is not automatic
- dom? Focus can follow selection

# Disclosure navigation

https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/

# Closing remarks

Practically Accessible is not Accessible

If you want to make an accessibility claim

https://adrianroselli.com/2022/11/your-accessibility-claims-are-wrong-unless.html

https://inclusive-components.design/tabbed-interfaces/
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
