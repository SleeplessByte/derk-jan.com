# Embrace the patch

- 00:30 · 1 · Yeah but I am using ...
- 02:00 · 1 · TOC
- 04:00 · 1 · Testing
- 06:00 · 1 · Event bubbling
- 08:00 · 1 · Event delegation
- 10:00 · 1 · Focus management
- 12:00 · 1 · Focus restoration
- 14:00 · 1 · Focus trapping
- 16:00 · 1 · Focus disabled
- 18:00 · 1 · Focus zone (aria-activedescendant)
- 20:00 · 1 · CSS-only solutions
- 22:00 · 1 · CSS & Interactivity
- 24:00 · 1 · Tabs
- 26:00 · 1 · Disclosure navigation
- 28:00 · 1 · Outro

# TOC

https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/

# Focus management

# Focus restoration

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

the element's tabindex value is non-null, or the element is determined by the user agent to be focusable;
the element is either not a shadow host, or has a shadow root whose delegates focus is false;
the element is not actually disabled;
the element is not inert;
the element is either being rendered, delegating its rendering to its children, or being used as relevant canvas fallback content.

https://html.spec.whatwg.org/multipage/interaction.html#focusable-area

# Focus zone (roving)

https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/
https://github.com/jsoref/primer-behaviors/blob/main/docs/focus-zone.md
https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant
https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/

# Focus zone (aria-activedescendant)

https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
https://www.w3.org/WAI/ARIA/apg/patterns/combobox/

# Focus & disabled

https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols

Keep focusable:

- Options in a Listbox
- Menu items in a Menu or menu bar
- Tab elements in a set of Tabs
- Tree items in a Tree View

# Tabs

- network? Focus is not automatic
- dom? Focus can follow selection

# Disclosure navigation

https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/
